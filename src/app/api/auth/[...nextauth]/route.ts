import NextAuth from 'next-auth'

import { authOptions } from '@/libs/next-auth/authOptions'

const handler = NextAuth(authOptions) as (request: Request) => Promise<Response>
export { handler as GET, handler as POST }
