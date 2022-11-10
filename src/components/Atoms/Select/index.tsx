import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { Select, SelectProps } from '@mui/material'
import { Iprops } from '../../../utils/Constants'

const CustomSelect: React.FC<Iprops & SelectProps> = (props) => {
  const { items, value, handleChange } = props
  const menuItems = items.map((item) => (
    <MenuItem key={item.id} value={item.id}>
      {item.content}
    </MenuItem>
  ))

  return (
    <FormControl fullWidth size="small">
      <Select value={value} onChange={handleChange} variant="outlined">
        {menuItems}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
