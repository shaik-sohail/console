import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavItem from '.'

export default {
  title: 'molecules/NavItem',
  component: NavItem,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: [
          'home',
          'clientManagement',
          'configurations',
          'accessManagement',
          'orchesstration',
          'riskCaseManagement',
          'reports',
        ],
        default: 'home',
      },
    },
    text: {
      control: {
        type: 'select',
        options: [
          'Home',
          'Client Management',
          'Configurations',
          'Access Management',
          'Orchesstration',
          'Risk Case Management',
          'Reports',
        ],
        default: 'Home',
      },
    },
    active: {
      control: {
        type: 'select',
        options: [true, false],
        default: false,
      },
    },
    route: {
      control: {
        type: 'select',
        options: [
          'home',
          'clientManagement',
          'configurations',
          'accessManagement',
          'orchesstration',
          'riskCaseManagement',
          'reports',
        ],
        default: 'home',
      },
    },
  },
} as ComponentMeta<typeof NavItem>

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />

export const PrimaryNavItem = Template.bind({})

PrimaryNavItem.args = {
  iconName: 'home',
  text: 'Home',
  active: false,
  route: 'home',
  onNavItemClick: () => {
    console.log('Click')
  },
}

export const ActiveNavItem = Template.bind({})

ActiveNavItem.args = {
  iconName: 'home',
  text: 'Home',
  active: true,
  route: 'home',
  onNavItemClick: () => {
    console.log('Click')
  },
}
