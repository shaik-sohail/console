import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CheckBox from '.'

export default {
  title: 'atoms/Checkbox',
  component: CheckBox,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
        default: 'small',
      },
    },
  },
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
)

export const checkBox = Template.bind({})

checkBox.args = {}
