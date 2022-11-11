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

function MItem() {
  return (
    <Grid container sx={{ width: '150px' }}>
      <Grid item container justifyContent={'space-between'}>
        <Grid item>
          <Typography>Sohail</Typography>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ border: '1px solid grey' }}
        />
        <Grid item>
          <Typography>Softility</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
export const PrimarySelect = Template.bind({})
PrimarySelect.args = {
  value: '1',
  selectVariant: 'outlined',
  formSize: 'medium',
  items: [{ id: '1', content: <MItem /> }],
}
