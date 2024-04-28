import { type FC } from 'react'

import { Text, Input } from '@kuma-ui/core'

interface ModalWindowAddPersonProps {
  register: any
  errors: any
}

export const ModalWindowAddPerson: FC<ModalWindowAddPersonProps> = ({
  errors,
  register,
}) => {
  return (
    <>
      <Input
        className="border-2 rounded px-2 py-1 select-none"
        type="text"
        placeholder="なまえ"
        {...register('name', { required: '名前を入力してください' })}
      />
      {errors.name !== null && (
        <Text className="text-red-600">{errors.name?.message}</Text>
      )}
    </>
  )
}
