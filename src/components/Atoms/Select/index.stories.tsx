import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Select from '.'
import { Divider, Grid, Typography } from '@mui/material'

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ width: '250px' }}>
    <Select {...args} />
  </div>
)

export const PrimarySelect = Template.bind({})
PrimarySelect.args = {
  value: '1',
  variant: 'outlined',
  formSize: 'small',
  items: [{ id: '1', preText: 'sohail', postText: 'softility' }],
}
