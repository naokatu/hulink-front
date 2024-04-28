import { type FC } from 'react'

import { Flex } from '@kuma-ui/core'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { type InputsLinkUser } from '@/types/inputsLinkUser'

import { SimpleButton } from '../SimpleButton'
import { ModalWindowTitle } from '../ModalWindowTitle'
import { ModalWindowPersonName } from '../ModalWindowPersonName'
import { ModalWindowCheckBox } from '../ModalWindowCheckBox'

interface ModalWindowFormProps {
  onClose: () => void
  buttonType: string | null
  linkUser: Array<string> | null
  addPersonSubmit: (data: InputsLinkUser) => void
  selectPersonSubmit: (data: InputsLinkUser) => void
}

export const ModalWindowForm: FC<ModalWindowFormProps> = ({
  addPersonSubmit,
  buttonType,
  linkUser,
  onClose,
  selectPersonSubmit,
}) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<InputsLinkUser>({
    defaultValues: {
      interact: [],
    },
  })

  const watchInteract = watch('interact')

  const onSubmit: SubmitHandler<InputsLinkUser> = (data) => {
    if (buttonType === 'add') {
      addPersonSubmit(data)
    } else {
      selectPersonSubmit(data)
    }
    onClose()
  }

  return (
    <form
      className="flex flex-col gap-10 justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ModalWindowTitle buttonType={buttonType} />
      <ModalWindowPersonName
        register={register}
        errors={errors}
        buttonType={buttonType}
        linkUser={linkUser}
      />
      <ModalWindowCheckBox
        watchInteract={watchInteract}
        register={register}
        errors={errors}
      />
      <Flex className="justify-end">
        <SimpleButton type="submit" bgColor="justify-center bg-baseColor w-20">
          登録
        </SimpleButton>
      </Flex>
    </form>
  )
}
