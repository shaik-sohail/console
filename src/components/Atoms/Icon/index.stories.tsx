import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from '.'
import { ICONS } from '../../../utils/Constants'


export default {
  title: 'atoms/Icon',
  component: Icon,
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: ['small', 'medium','large'],
        default: 'small',
      },
    },
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
)

export const icon = Template.bind({})

icon.args = {
    icon:ICONS['home']
}