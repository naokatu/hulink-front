import { type Meta, type StoryObj } from '@storybook/react'

import { AddPersonModalWindow } from './AddPersonModalWindow'

const meta = {
  component: AddPersonModalWindow,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AddPersonModalWindow>

export default meta

type Story = StoryObj<typeof AddPersonModalWindow>

export const Default: Story = {}
