import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './index'

export default {
  title: 'Atoms/Button',
  argTypes: {
    variant: {
      options: ['primary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'ボタンバリアント',
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      description: '表示用テキスト',
    },
  },
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { variant: 'primary', children: 'Button' }
