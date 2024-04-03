'use client'

import { type FC } from 'react'

import { Box, Input } from '@kuma-ui/core'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { SimpleButton } from '../SimpleButton'

interface AuthFormProps {
  onSubmit: SubmitHandler<Inputs>
  buttonText: string
  isRegistrationPage: boolean
}

interface Inputs {
  email: string
  password: string
}

export const AuthForm: FC<AuthFormProps> = ({
  buttonText,
  isRegistrationPage,
  onSubmit,
}) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>()

  return (
    <Box className="w-64">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="border rounded px-2 py-1"
          type="text"
          placeholder="メールアドレス"
          {...register('email', {
            required: 'メールアドレスを入力してください',
            pattern: {
              value:
                /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
              message: '正しいメールアドレスを入力してください',
            },
          })}
        />
        {errors.email !== null && (
          <span className="text-red-600">{errors.email?.message}</span>
        )}

        <Input
          placeholder="パスワード"
          type="password"
          className="border rounded px-2 py-1"
          {...register('password', {
            required: 'パスワードを入力してください',
            ...(isRegistrationPage && {
              minLength: {
                value: 6,
                message: '6文字以上入力してください',
              },
            }),
          })}
        />
        {errors.password !== null && (
          <span className="text-red-600">{errors.password?.message}</span>
        )}

        <SimpleButton type="submit" bgColor="#0E8BFF">
          {buttonText}
        </SimpleButton>
      </form>
    </Box>
  )
}
