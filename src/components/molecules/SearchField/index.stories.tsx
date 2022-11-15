import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchField from '.'

export default {
  title: 'molecules/SearchField',
  component: SearchField,
  argTypes: {},
} as ComponentMeta<typeof SearchField>

const Template: ComponentStory<typeof SearchField> = (args) => (
  <SearchField {...args} />
)

export const PrimarySearchField = Template.bind({})
PrimarySearchField.args = {
  placeholder: 'Search',
  inputValue: 'Search',
}
