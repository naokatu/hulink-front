'use client'

import { type FC } from 'react'

import { Flex, Box } from '@kuma-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import HeaderImage from '../../../public/Header-icon_v1.png'
import { SimpleButton } from '../SimpleButton'

export const Header: FC = () => {
  const { data: session, status } = useSession()

  return (
    <header>
      <Flex alignItems="center" className="bg-white shadow-lg h-16">
        <Box>
          <Link href="/">
            <Image
              src={HeaderImage}
              alt="ヘッダーロゴ画像"
              className="h-16 w-16 mx-2"
              priority
            ></Image>
          </Link>
        </Box>
        <Box className="ml-auto">
          {status === 'loading' ? (
            <SimpleButton bgColor={'bg-demoColor'}>読み込み中...</SimpleButton>
          ) : session !== null ? (
            <Link href="/my-page">
              <SimpleButton bgColor={'bg-baseColor'}>マイページへ</SimpleButton>
            </Link>
          ) : (
            <Link href="/login">
              <SimpleButton bgColor={'bg-baseColor'}>ログイン</SimpleButton>
            </Link>
          )}
        </Box>
        <Box>
          <Link href="/demo">
            <SimpleButton bgColor={'bg-demoColor'}>デモを見てみる</SimpleButton>
          </Link>
        </Box>
      </Flex>
    </header>
  )
}
