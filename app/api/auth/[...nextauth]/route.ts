import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import sql from '../../../utils/db'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            async authorize(credentials) {
                const {email, password} = credentials
                
                try {
                    let res = await sql`SELECT * FROM users WHERE email=${email}`
                    if (!res.length) {
                        return null
                    }
                    const passwordsMatch = await bcrypt.compare(password, res[0].password)
                    if (!passwordsMatch) {
                        return null
                    }
                    return res[0].userid
                }
                catch(e) {
                    console.log(e)
                    return null
                }
            }, 


        })
    ], 
    session: {
        strategy: 'jwt'
    }, 
    secret: process.env.NEXTAUTH_SECRET, 
    pages: {
        signIn:'/auth/login'
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}