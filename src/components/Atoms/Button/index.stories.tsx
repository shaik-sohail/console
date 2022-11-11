import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '.'

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

export const CreateJourney = Template.bind({})
export const JourneyTemplate = Template.bind({})

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
