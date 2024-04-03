import { type Meta, type StoryObj } from '@storybook/react'

import { Register } from './Register'

const meta = {
  component: Register,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Register>

export default meta

type Story = StoryObj<typeof Register>

export const Default: Story = {}
