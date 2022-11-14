import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from '.'
import { ICONS } from '../../../utils/Constants'
import theme from '../../../theme/theme'

export default {
  title: 'atoms/Icon',
  component: Icon,
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
        default: 'small',
      },
    },
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

const secondaryStyle = {
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
}

export const PrimaryIcon = Template.bind({})
export const ActiveIcon = Template.bind({})

PrimaryIcon.args = {
  icon: ICONS['home'],
}

ActiveIcon.args = {
  icon: ICONS['home'],
  sx: { ...secondaryStyle },
}
