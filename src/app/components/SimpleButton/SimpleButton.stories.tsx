import { type Meta, type StoryObj } from '@storybook/react'

import { SimpleButton } from './SimpleButton'

const meta = {
  component: SimpleButton,
  args: {
    children: 'ボタンテキスト',
  },
} satisfies Meta<typeof SimpleButton>

export default meta

type Story = StoryObj<typeof SimpleButton>

export const Default: Story = {
  args: {
    children: 'ボタンテキスト',
  },
}
