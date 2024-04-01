import { type Meta, type StoryObj } from '@storybook/react'

import { Footer } from './Footer'

const meta = {
  component: Footer,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {}
