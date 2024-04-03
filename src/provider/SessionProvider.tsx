'use client'

import { type ReactNode, type FC } from 'react'

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'

export interface SessionProviderProps {
  children: ReactNode
}

export const SessionProvider: FC<SessionProviderProps> = ({
  children,
}: SessionProviderProps) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}
