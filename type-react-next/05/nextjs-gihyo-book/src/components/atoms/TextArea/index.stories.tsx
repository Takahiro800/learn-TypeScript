import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextArea } from './index'

export default {
  title: 'Atoms/Textarea',
  argTypes: {
    minRows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '最小行数',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  },
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
)

export const Normal = Template.bind({})
