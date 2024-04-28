import { type FC } from 'react'

import { Text, Select } from '@kuma-ui/core'

interface ModalWindowSelectPersonProps {
  linkUser: Array<string> | null
  register: any
  errors: any
}

export const ModalWindowSelectPerson: FC<ModalWindowSelectPersonProps> = ({
  linkUser,
  errors,
  register,
}) => {
  return (
    <>
      <Select
        className="border-2 rounded px-2 py-1 select-none"
        {...register('name', { required: '今日関わった人を選択してください' })}
      >
        {linkUser?.map((user, index) => (
          <option key={index} value={user}>
            {user}
          </option>
        ))}
      </Select>
      {errors.name !== null && (
        <Text className="text-red-600">{errors.name?.message}</Text>
      )}
    </>
  )
}
