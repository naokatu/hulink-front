'use client'

import { type FC } from 'react'

import { Flex } from '@kuma-ui/core'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signIn as signInByNextAuth } from 'next-auth/react'
import { type SubmitHandler } from 'react-hook-form'

import { client } from '@/api'
import { auth as authClient } from '@/libs/firebase/client'
import { type Inputs } from '@/types/inputs'

import { AuthLink } from '../AuthLink'
import { AuthText } from '../AuthText'
import { AuthForm } from '../AuthForm'

export const Register: FC = () => {
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        authClient,
        data.email,
        data.password,
      )
      const idToken = await userCredential.user.getIdToken()
      await client.POST('/user', {
        params: {
          header: {
            authorization: `Bearer ${idToken}`,
          },
        },
        body: {
          name: 'あなた',
        },
      })
      await signInByNextAuth('credentials', {
        idToken,
        callbackUrl: '/my-page',
      })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Flex
      justify="center"
      alignItems="center"
      className="m-12 flex-col gap-y-6"
    >
      <AuthText title="新規登録" />
      <AuthForm
        onSubmit={onSubmit}
        buttonText="新規登録"
        isRegistrationPage={true}
      />
      <AuthLink isRegistrationPage={true} />
    </Flex>
  )
}
