import { type FC, type ButtonHTMLAttributes, type ReactNode } from 'react'

import { Button } from '@kuma-ui/core'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  bgColor?: string
}
export const SimpleButton: FC<Props> = ({
  bgColor,
  children,
  ...props
}: Props) => {
  return (
    <Button
      p={8}
      mr={5}
      className={bgColor}
      color="white"
      borderRadius={6}
      {...props}
    >
      {children}
    </Button>
  )
}
