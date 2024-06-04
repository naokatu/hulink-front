import { getSession } from 'next-auth/react'

/** @public */
export const getIdTokenFromSession = async (): Promise<string | undefined> => {
  const data = await getSession()

  return data?.idToken
}
