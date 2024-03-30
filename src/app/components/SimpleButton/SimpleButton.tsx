import { Button } from '@kuma-ui/core'
import { ButtonHTMLAttributes, ReactNode } from 'react'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}
export const SimpleButton = ({ children, ...props }: Props) => {
  return (
    <Button
      p={8}
      mr={5}
      bgColor="#4FAAFF"
      color="white"
      borderRadius={6}
      {...props}
    >
      {children}
    </Button>
  )
}
