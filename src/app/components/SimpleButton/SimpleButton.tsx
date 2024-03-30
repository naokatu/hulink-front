import { Button } from '@kuma-ui/core'
import { ButtonHTMLAttributes, ReactNode } from 'react'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  bgColor?: string
}
export const SimpleButton = ({ children, bgColor, ...props }: Props) => {
  return (
    <Button
      p={8}
      mr={5}
      bgColor={bgColor}
      color="white"
      borderRadius={6}
      {...props}
    >
      {children}
    </Button>
  )
}
