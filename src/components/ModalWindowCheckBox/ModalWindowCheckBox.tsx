import { type FC } from 'react'

import { Input, Flex, Box, Text } from '@kuma-ui/core'
import Image from 'next/image'

import commentInputIcon from '../../../public/comment-input-icon.svg'

interface ModalWindowCheckBoxProps {
  watchInteract: string[]
  register: any
  errors: any
}

export const ModalWindowCheckBox: FC<ModalWindowCheckBoxProps> = ({
  errors,
  register,
  watchInteract,
}) => {
  const checkboxOptions = ['対面', 'LINEやDM', 'SNS']

  return (
    <Flex className="flex-col items-center ml-16">
      <Flex className="justify-center">
        <Box>
          <Image
            src={commentInputIcon}
            alt="チェックボックス"
            className="h-8 w-8 mr-2"
            priority
          ></Image>
        </Box>
        {checkboxOptions.map((item) => (
          <Box key={item} mr={4}>
            <label
              className={`mx-2 px-2 py-2 border border-baseColor rounded-xl select-none ${
                watchInteract.includes(item) ? 'bg-baseColor text-white' : ''
              }`}
            >
              <Input
                type="checkbox"
                className="hidden"
                value={item}
                {...register('interact', {
                  validate: (value: string[]) =>
                    value.length > 0 ||
                    'チェックボックスを最低一つ選択してください。',
                })}
              />
              {item}
            </label>
          </Box>
        ))}
      </Flex>
      {errors.interact != null && (
        <Text className="text-red-500 block">{errors.interact.message}</Text>
      )}
    </Flex>
  )
}
