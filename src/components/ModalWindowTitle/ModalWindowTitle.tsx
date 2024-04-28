import { type FC } from 'react'

import { Text, Flex } from '@kuma-ui/core'

interface ModalWindowTitleProps {
  buttonType: string | null
}

export const ModalWindowTitle: FC<ModalWindowTitleProps> = ({ buttonType }) => {
  return (
    <Flex className="ml-2 justify-center">
      <Text className="select-none">
        {buttonType === 'add'
          ? '今日関わった人を入力してください'
          : '今日関わった人を選択してください'}
      </Text>
    </Flex>
  )
}
