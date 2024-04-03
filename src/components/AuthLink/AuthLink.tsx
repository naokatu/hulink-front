import { type FC } from 'react'

import { Box, Text, Link } from '@kuma-ui/core'

interface Props {
  isRegistrationPage: boolean
}

export const AuthLink: FC<Props> = ({ isRegistrationPage }) => {
  const linkText = isRegistrationPage ? '登録済みの方は' : '新規登録は'
  const linkHref = isRegistrationPage ? '/login' : '/register'

  return (
    <Box>
      <Text className="inline-block">{linkText}</Text>
      <Link href={linkHref} className="font-bold text-blue-500 hover:underline">
        こちら
      </Link>
    </Box>
  )
}
