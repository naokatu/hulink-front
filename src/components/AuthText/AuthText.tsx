import { type FC } from 'react'

import { Box, Text } from '@kuma-ui/core'

interface Props {
  title: string
}

export const AuthText: FC<Props> = ({ title }) => {
  return (
    <>
      <Box>
        <Text>HuLinkはアカウント登録してお使いいただけます</Text>
      </Box>
      <Box className="w-64">
        <Text className="text-lg font-bold">{title}</Text>
      </Box>
    </>
  )
}
