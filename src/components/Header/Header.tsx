import { type FC } from 'react'

import { Flex, Box } from '@kuma-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/libs/next-auth/authOptions'

import HeaderImage from '../../../public/Header-icon_v1.png'
import { SimpleButton } from '../SimpleButton'

export const Header: FC = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user

  return (
    <header>
      <Flex alignItems="center" className="bg-white shadow-lg h-16">
        <Box>
          <Link href="/">
            <Image
              src={HeaderImage}
              alt="ヘッダーロゴ画像"
              className="h-16 w-16 mx-2"
            ></Image>
          </Link>
        </Box>
        <Box className="ml-auto">
          {user === null && (
            <Link href="/login">
              <SimpleButton bgColor={'#0E8BFF'}>ログイン</SimpleButton>
            </Link>
          )}
          {user !== null && (
            <Link href="/my-page">
              <SimpleButton bgColor={'#0E8BFF'}>マイページへ</SimpleButton>
            </Link>
          )}
        </Box>
        <Box>
          <Link href="/demo">
            <SimpleButton bgColor={'#949494'}>デモを見てみる</SimpleButton>
          </Link>
        </Box>
      </Flex>
    </header>
  )
}
