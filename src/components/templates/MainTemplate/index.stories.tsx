import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainTemplate from '.'
import { Box } from '@mui/material'

export default {
  title: 'templates/MainTemplate',
  component: MainTemplate,
  argTypes: {},
} as ComponentMeta<typeof MainTemplate>

const Template: ComponentStory<typeof MainTemplate> = (args) => (
  <MainTemplate {...args} />
)

export const mainTemplate = Template.bind({})

mainTemplate.args = {
  child: <Box sx={{ height: '900px', width: '100%' }}>Main Content</Box>,
}
