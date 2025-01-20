import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
<<<<<<< HEAD
    providers: [
       GoogleProvider( {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
       })
    ],
    secret: process.env.JWT_SECRET as string
=======
    // Configure one or more authentication providers
    providers: [
       GoogleProvider( {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
       })
        // ...add more providers here
    ],
>>>>>>> 147a31f (implementando OAuth authentication)
}

export default NextAuth(authOptions)