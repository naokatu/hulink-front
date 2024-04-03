'use client'

import React from 'react'

import { useSession } from 'next-auth/react'

const ClientComponent = (): React.ReactElement => {
  const { data: session } = useSession()
  const user = session?.user
  return <p>{'Client' + JSON.stringify(user)}</p>
}

/** @public */
export default ClientComponent
