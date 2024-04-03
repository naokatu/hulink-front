import type { NextAuthOptions, DefaultSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { auth as authAdmin } from '@/libs/firebase/admin'

declare module 'next-auth' {
  interface Session {
    user: {
      // Firebaseの認証情報
      uid: string
      emailVerified?: boolean
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    // Firebaseの認証情報
    uid: string
    emailVerified: boolean
  }
}

/** @public */
export const authOptions: NextAuthOptions = {
  secret: process.env['NEXTAUTH_SECRET'],
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (credentials, _req): Promise<any | null> => {
        const { idToken } = credentials as { idToken: string }
        if (idToken != null) {
          try {
            const decoded = await authAdmin.verifyIdToken(idToken)

            return { ...decoded }
          } catch (err) {
            console.error('aaa')
            console.error(err)
          }
        }
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }): Promise<any> {
      return { ...token, ...user }
    },
    // sessionにJWTトークンからのユーザ情報を格納
    async session({ session, token }) {
      session.user.emailVerified = token.emailVerified
      session.user.uid = token.uid
      return session
    },
  },
}
