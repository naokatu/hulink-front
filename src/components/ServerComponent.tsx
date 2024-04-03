import React from 'react'

import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/libs/next-auth/authOptions'

const ServerComponent = async (): Promise<React.ReactElement> => {
  const session = await getServerSession(authOptions)
  const user = session?.user

  return <p>{'Server' + JSON.stringify(user)}</p>
}

/** @public */
export default ServerComponent
