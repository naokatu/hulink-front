'use client'

import { useState, type FC } from 'react'

import { Flex, Box } from '@kuma-ui/core'
import Image from 'next/image'
import Link from 'next/link'

import HeaderImage from '../../../public/Header-icon_v1.png'
import { SimpleButton } from '../SimpleButton'

export const Header: FC = () => {
  // TODO ユーザ機能実装後にちゃんと書く
  const user = null
  const [waiting, setWaiting] = useState<boolean>(false)

  const signIn: VoidFunction = () => {
    setWaiting(true)
  }

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
          {user === null && !waiting && (
            <Link href="/auth">
              <SimpleButton onClick={signIn} bgColor={'#0E8BFF'}>
                ログイン
              </SimpleButton>
            </Link>
          )}
        </Box>
        <Box>
          {!waiting && (
            <Link href="/demo">
              <SimpleButton bgColor={'#949494'}>デモを見てみる</SimpleButton>
            </Link>
          )}
        </Box>
      </Flex>
    </header>
  )
}
