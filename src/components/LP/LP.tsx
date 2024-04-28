'use client'

import { type FC } from 'react'

import { Flex, Box, Text } from '@kuma-ui/core'
import Image from 'next/image'
import Link from 'next/link'

import LPImage from '../../../public/Header-icon_v1.png'
import { SimpleButton } from '../SimpleButton'

export const LP: FC = () => {
  return (
    <Flex justify="center" alignItems="center" className="m-12 flex-col gap-8">
      <Flex className="">
        <Box className="w-1/3">
          <Image src={LPImage} alt="ヘッダーのトップ画像"></Image>
        </Box>
        <Box className="w-1/2 mt-16">
          <Text className="text-2xl font-bold text-topTextColor">
            人間関係を可視化するアプリ
            <br />
            大切な人とのつながりを、もっと身近に
          </Text>
          <Text className="mt-4 text-gray-700 leading-relaxed mb-4">
            このアプリは自分に関わる人を視覚的に把握することができます。大切な人々との思い出を振り返り、自分を支えてくれる存在を再確認してみませんか？
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Text className="m-12 text-lg font-bold">
          このアプリではこんなことができます
        </Text>
      </Flex>
      <Flex>
        <Box>
          <Text className="text-lg font-semibold text-topTextColor text-center">
            人間関係を一目で把握。
          </Text>
          <Text className="m-4 text-gray-700 leading-relaxed">
            自分に関わる人々をカテゴリー別に整理し、一覧で表示。
            それぞれの人との関係性の深さや、最後に連絡を取った日付などもわかります。
          </Text>
        </Box>
        <Box>
          <Text className="text-lg font-semibold text-topTextColor text-center">
            思い出を振り返る。
          </Text>
          <Text className="m-4 text-gray-700 leading-relaxed">
            画面に映し出された人達を見れば、一緒に過ごした日々を思い出し、当時の空気感に包まれる感覚になります。
          </Text>
        </Box>
        <Box>
          <Text className="text-lg font-semibold text-topTextColor text-center">
            自分を支えてくれる人たちの存在を再確認
          </Text>
          <Text className="m-4 text-gray-700 leading-relaxed ">
            自分を中心にした人間関係のマップを見ることで、人生を支えてくれる大切な人たちの存在を改めて深く実感できます。
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Link href="/login">
          <SimpleButton bgColor={'bg-baseColor'}>
            始めてみる（ログインページへ）
          </SimpleButton>
        </Link>
      </Flex>
    </Flex>
  )
}
