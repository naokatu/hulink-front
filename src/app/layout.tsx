import { type FC, type ReactNode } from 'react'
import './global.css'

import type { Metadata } from 'next'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { Box } from '@kuma-ui/core'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SessionProvider } from '../provider'

export const metadata: Metadata = {
  title: 'HuLink',
  description: 'HuLink page',
}

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <html lang="ja" suppressHydrationWarning={true} className="relative">
        <body className="overflow-x-hidden">
          <Header />
          <Box className="pt-16 pb-8">
            <KumaRegistry>{children}</KumaRegistry>
          </Box>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  )
}

export default RootLayout
