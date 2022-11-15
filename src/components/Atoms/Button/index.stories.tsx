import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '.'
import { Typography, Box } from '@mui/material'
import { ArrowDownward } from '@mui/icons-material'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

const createJourneyStyle = {
  borderRadius: '24px',
  color: '#fff',
  width: '230px',
}

const journeyTemplateStyle = {
  borderRadius: '24px',
  width: '230px',
  border: '4px solid',
  '&:hover': {
    border: '4px solid',
  },
}

const moveToTemplateStyle = {
  borderRadius: '8px',
  border: '1px solid #dddbda',
  '&:hover': {
    border: '1px solid #dddbda',
  },
}

export const CreateJourney = Template.bind({})
export const JourneyTemplate = Template.bind({})
export const MoveTo = Template.bind({})
CreateJourney.args = {
  variant: 'contained',
  children: 'create new journey',
  sx: { ...createJourneyStyle },
}

JourneyTemplate.args = {
  variant: 'outlined',
  children: 'create new journey',
  sx: { ...journeyTemplateStyle },
}

MoveTo.args = {
  variant: 'outlined',
  children: (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        sx={{ color: 'black', fontWeight: 'bold', pr: '5px' }}
        variant="body2"
      >
        Move to
      </Typography>
      <ArrowDownward fontSize="small" sx={{ color: 'black' }} />
    </Box>
  ),

  sx: { ...moveToTemplateStyle },
}
