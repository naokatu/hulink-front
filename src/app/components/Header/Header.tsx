'use client'

import { useState, type FC } from 'react'

import { Flex, Box } from '@kuma-ui/core'
import Image from 'next/image'
import Link from 'next/link'

import HeaderImage from '../../../../public/Header-icon_v1.png'
import { SimpleButton } from '../SimpleButton'

export const Header: FC = () => {
  const user = null
  const [waiting, setWaiting] = useState<boolean>(false)

  const signIn = () => {
    setWaiting(false)
  }

  return (
    <header>
      <Flex
        justify="space-between"
        alignItems="center"
        className="bg-white shadow-lg"
      >
        <Box>
          <Link href="/">
            <Image
              src={HeaderImage}
              alt="ヘッダーロゴ画像"
              width={40}
              height={40}
              className="py-1 mx-2"
            ></Image>
          </Link>
        </Box>
        <Box>
          {user === null && !waiting && (
            <Link href="/auth">
              <SimpleButton onClick={signIn}>ログイン</SimpleButton>
            </Link>
          )}
        </Box>
      </Flex>
    </header>
  )
}
