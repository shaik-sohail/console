import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Profile from '.'

export default {
  title: 'molecule/Profile',
  component: Profile,
  argTypes: {},
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (args) => (
  <div style={{ width: '300px' }}>
    <Profile {...args} />
  </div>
)

export const PrimaryProfile = Template.bind({})
PrimaryProfile.args = {}
