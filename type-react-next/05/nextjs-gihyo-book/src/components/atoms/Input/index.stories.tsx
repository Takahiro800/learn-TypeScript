import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from './index'

export default {
  title: 'Atoms/Input',
  argTypes: {
    variant: {
      options: ['standard', 'outlined', 'filled'],
      control: { type: 'select' },
      description: 'バリアント',
      table: {
        type: { summary: 'standard, outlined, filled' },
        defaultValue: { summary: 'standard' },
      },
    },
    isError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Normal = Template.bind({})
Normal.args = { placeholder: 'test' }

export const Error = Template.bind({})
Error.args = { placeholder: 'hasError', isError: true }
