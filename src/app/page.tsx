import { Text } from '@kuma-ui/core'
import { type NextPage } from 'next'

import ServerComponent from '@/components/ServerComponent'
import ClientComponent from '@/components/clientComponent'

const Home: NextPage = () => {
  return (
    <main>
      <ClientComponent />
      <Text color="blue" fontSize="16px" fontWeight="bold">
        Hello world
      </Text>
      <ServerComponent />
    </main>
  )
}

export default Home
