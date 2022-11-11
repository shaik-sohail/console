import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'molecules/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const footer = Template.bind({})
footer.args = {}