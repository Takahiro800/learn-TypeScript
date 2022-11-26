import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ShapeImage } from './index'

export default {
  title: 'Atoms/ShapeImage',
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '画像の形',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
  },
}

const Template: ComponentStory<typeof ShapeImage> = (args) => (
  <ShapeImage {...args} />
)

export const Circle = Template.bind({})
Circle.args = {
  src: '/images/1.jpeg',
  shape: 'circle',
}

export const Square = Template.bind({})
Square.args = {
  src: '/images/1.jpeg',
  shape: 'square',
}
