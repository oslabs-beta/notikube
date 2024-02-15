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

            async authorize(credentials): Promise<any> {
                const {email, password} = credentials as {email: string, password: string}
                
                try {
                    //Checking to see if the user exists
                    let res = await sql`SELECT * FROM users WHERE email=${email}`
                    if (!res.length) {
                        return null
                    }
                    //Checking to see if the password is correct
                    const passwordsMatch = await bcrypt.compare(password, res[0].password)
                    if (!passwordsMatch) {
                        return null
                    }
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
        async session({session, user}): Promise<any> {
            if (!session) return
            try {
                //Identifying the userid in the db to put in the session.user object
                let res = await sql`SELECT * FROM users WHERE email=${session.user.email!}`

                session.user.userid = res[0].user_id
                return session
            }
            catch(e) {
                console.log(e)
                return null
            } 
        },

        async signIn({profile, account}): Promise<any> {
            //Checking to see if the user is using the Github oauth or local auth
            if (account?.provider == 'credentials') {
                return true
            }
            console.log(profile)

            try {
                //Checking to see if the user exists
                //Typescript note: 'profile?.email!' has an explanation mark to ensure that this value will not be null
                let res = await sql`SELECT * FROM users WHERE email=${profile?.email!}`
                if (!res.length) {
                    //Inputing user into the db
                    await sql`INSERT INTO users (name, email) VALUES (${profile?.name as string}, ${profile?.email as string});`
                }
    
                return true
            }
            catch(e) {
                console.log(e)
                return
            }

        }
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}