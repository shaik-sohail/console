import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { Select, SelectProps } from '@mui/material'
import { CustomSelectProps } from '../../../utils/Constants'

const CustomSelect: React.FC<CustomSelectProps & SelectProps> = (props) => {
  const { items, value, handleChange, selectVariant, formSize } = props
  const menuItems = items.map((item) => (
    <MenuItem key={item.id} value={item.id}>
      {item.content}
    </MenuItem>
  ))

  return (
    <FormControl fullWidth size={formSize}>
      <Select value={value} onChange={handleChange} variant={selectVariant}>
        {menuItems}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
