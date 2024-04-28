import { type FC } from 'react'

import { Box, Flex } from '@kuma-ui/core'

export const Footer: FC = () => {
  return (
    <footer className="bg-slate-100 w-screen bottom-0">
      <Flex justify="center" alignItems="center" height="7vh">
        <Box>
          <p>&copy; 2024 naokatu</p>
        </Box>
      </Flex>
    </footer>
  )
}
