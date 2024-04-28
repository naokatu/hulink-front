import { type FC } from 'react'

import { Flex, Box } from '@kuma-ui/core'
import Image from 'next/image'

import addPersonInputIcon from '../../../public/add-person-input-icon.svg'
import { ModalWindowSelectPerson } from '../ModalWindowSelectPerson'
import { ModalWindowAddPerson } from '../ModalWindowAddPerson'

interface ModalWindowPersonNameProps {
  buttonType: string | null
  linkUser: Array<string> | null
  register: any
  errors: any
}

export const ModalWindowPersonName: FC<ModalWindowPersonNameProps> = ({
  buttonType,
  linkUser,
  errors,
  register,
}) => {
  return (
    <Flex className="justify-center">
      <Box>
        <Image
          src={addPersonInputIcon}
          alt="関わった人の入力欄"
          className="h-8 w-8 mx-2"
          priority
        ></Image>
      </Box>
      {buttonType === 'add' && (
        <Box>
          <ModalWindowAddPerson register={register} errors={errors} />
        </Box>
      )}
      {buttonType === 'select' && (
        <Box>
          <ModalWindowSelectPerson
            linkUser={linkUser}
            register={register}
            errors={errors}
          />
        </Box>
      )}
    </Flex>
  )
}
