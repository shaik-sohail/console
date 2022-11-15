import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Profile from '.'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { MenuItems } from '../../../utils/Constants'

export default {
  title: 'molecules/Profile',
  component: Profile,
  argTypes: {},
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (args) => (
  <div style={{ width: '300px' }}>
    <Profile {...args} />
  </div>
)

export const PrimaryProfile = Template.bind({})
PrimaryProfile.args = {
  icon: <PermIdentityIcon />,
  menuItems: MenuItems,
}
