import { Checkbox as MuiCheckBox } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
const CheckBox = styled(MuiCheckBox)({})
const CustomSelect: React.FC = () => {
  return (
    <>
      <CheckBox {...label} />
    </>
  )
}

export default CustomSelect
