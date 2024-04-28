import { type Meta, type StoryObj } from '@storybook/react'

import { ModalWindowForm } from './ModalWindowForm'

const meta = {
  component: ModalWindowForm,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ModalWindowForm>

export default meta

type Story = StoryObj<typeof ModalWindowForm>

export const Default: Story = {}
