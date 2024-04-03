import { type Meta, type StoryObj } from '@storybook/react'

import { Login } from './Login'

const meta = {
  component: Login,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Login>

export default meta

type Story = StoryObj<typeof Login>

export const Default: Story = {}
