import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from '.'
import {
  HEADER_NAMES,
  TABLE_DATA_HEADERS,
  TABLE_DATA_RESULT,
  TABLE_ROWS_DATA,
} from '../../../utils/Constants'
export default {
  title: 'organisms/Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const table = Template.bind({})

table.args = {
  headers : TABLE_DATA_HEADERS,
  rows : TABLE_ROWS_DATA,
  header_names :HEADER_NAMES,
  result : TABLE_DATA_RESULT,
  rowsLength : TABLE_DATA_RESULT.length
}
