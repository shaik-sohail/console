import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SideNav from '.'

export default {
  title: 'organisms/SideNav',
  component: SideNav,
  argTypes: {},
} as ComponentMeta<typeof SideNav>

const Template: ComponentStory<typeof SideNav> = (args) => <SideNav {...args} />

export const sideNav = Template.bind({})

sideNav.args = {}
