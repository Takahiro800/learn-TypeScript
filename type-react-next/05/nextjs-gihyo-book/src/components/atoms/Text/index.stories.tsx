import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Text } from './index'

export default {
  title: 'Atoms/Text',
  argTypes: {
    variant: {
      options: [
        'extraSmall',
        'small',
        'medium',
        'mediumLarge',
        'large',
        'extraLarge',
      ],
      control: { type: 'select' },
      defaultValue: 'medium',
      description: 'テキストバリアント',
      children: {
        control: { type: 'text' },
        description: 'テキスト',
        table: {
          type: { summary: 'string' },
        },
      },
    },
  },
}
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

const sampleText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'

export const ExtraSmall = Template.bind({})
ExtraSmall.args = { variant: 'extraSmall', children: sampleText }
