'use client'

import { type FC } from 'react'

import { Flex, Box } from '@kuma-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import { signOut as signOutByNextAuth, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

import HeaderImage from '../../../public/Header-icon_v1.png'
import { SimpleButton } from '../SimpleButton'

export const Header: FC = () => {
  const { data: session, status } = useSession()
  const router = usePathname()

  const handleSignOut = async (): Promise<void> => {
    await signOutByNextAuth({
      callbackUrl: '/',
    })
  }

  return (
    <header>
      <Flex
        alignItems="center"
        className="bg-white w-screen shadow-lg fixed h-16 top-0"
      >
        <Box>
          <Link href="/">
            <Image
              src={HeaderImage}
              alt="ヘッダーロゴ画像"
              className="h-16 w-16 mx-2"
              priority
            />
          </Link>
        </Box>
        <Box className="ml-auto mx-3">
          {status === 'loading' ? (
            <SimpleButton bgColor={'bg-demoColor'}>読み込み中...</SimpleButton>
          ) : session !== null ? (
            router === '/my-page' ? (
              <SimpleButton bgColor={'bg-unBaseColor'} onClick={handleSignOut}>
                ログアウト
              </SimpleButton>
            ) : (
              <Link href="/my-page">
                <SimpleButton bgColor={'bg-baseColor'}>
                  マイページへ
                </SimpleButton>
              </Link>
            )
          ) : (
            <Link href="/login">
              <SimpleButton bgColor={'bg-baseColor'}>ログイン</SimpleButton>
            </Link>
          )}
        </Box>
      </Flex>
    </header>
  )
}
