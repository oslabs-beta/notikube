import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import sql from '../../../utils/db'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
          }),

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
                    //console.log(res[0].userid)
                    return res[0]
                }
                catch(e) {
                    console.log(e)
                    return null
                }
            }, 
        })
    ], 
    session: {
        strategy: 'jwt', 
        maxAge: 2 * 60 * 60
    }, 
    secret: process.env.NEXTAUTH_SECRET, 
    pages: {
        signIn:'/auth/login'
    }, 
    callbacks: {
        async session({session, user}) {
            if (!session) return
            try {
                //console.log('Email from session to query db: ', session.user.email)
                let res = await sql`SELECT * FROM users WHERE email=${session.user.email}`
                //console.log('UserId from database: ', res[0].user_id)
                session.user.userid = res[0].user_id
                return session
            }
            catch(e) {
                console.log(e)
                return
            } 
        },

        async signIn({profile, account}) {
            if (account?.provider == 'credentials') {
                return true
            }
            console.log(profile)
            let res = await sql`SELECT * FROM users WHERE email=${profile.email}`
            if (!res.length) {
                await sql`INSERT INTO users (name, email) VALUES (${profile.name}, ${profile.email}) RETURNING *;`
            }

            return true
        }
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}