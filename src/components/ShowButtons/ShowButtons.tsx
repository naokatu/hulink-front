import { type FC } from 'react'

import { Flex, Box, Button, Text } from '@kuma-ui/core'
import Image from 'next/image'

import SelectPersonIconImage from '../../../public/Button-icon.svg'
import AddPersonIconImage from '../../../public/add-person-Button-icon.svg'

interface ShowButtonsProps {
  isShowButtons: boolean | null
  onAddPerson: (buttonType: string) => void
}

export const ShowButtons: FC<ShowButtonsProps> = ({
  isShowButtons,
  onAddPerson,
}) => {
  return (
    <>
      {isShowButtons !== null && (
        <Flex
          className={`absolute bottom-32 right-2 flex-col gap-y-6 ${
            isShowButtons ? 'animate-slide-in-right' : 'animate-slide-out-right'
          }`}
        >
          <Box>
            <Flex>
              <Box className="mt-3">
                <Text>マップにいる人を選択する</Text>
              </Box>
              <Box>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-full text-xl mx-1"
                  onClick={() => { onAddPerson('select'); }}
                >
                  <Image
                    src={SelectPersonIconImage}
                    alt="マップにいる人を選択"
                    className="h-4 w-4"
                    priority
                  ></Image>
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box className="ml-14">
            <Flex>
              <Box className="mt-3">
                <Text>新しい人を追加</Text>
              </Box>
              <Box>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full text-2xl py-4 px-4 mx-2"
                  onClick={() => { onAddPerson('add'); }}
                >
                  <Image
                    src={AddPersonIconImage}
                    alt="新しい人を追加"
                    className="h-4 w-4"
                    priority
                  ></Image>
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      )}
    </>
  )
}
