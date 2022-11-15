import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from '.'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { MenuItems } from '../../../utils/Constants'
export default {
  title: 'Organisms/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <div>
    <Header {...args} />
  </div>
)

export const PrimaryHeader = Template.bind({})
PrimaryHeader.args = {
  title: 'Orchestration',
  badgeContent: 2,
  icon: <PermIdentityIcon />,
  menuItems: MenuItems,
}
