import { type Meta, type StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  component: Header,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
