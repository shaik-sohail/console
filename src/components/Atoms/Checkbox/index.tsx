import React from 'react'
import {
  Checkbox as MUICheckBox,
  CheckboxProps as MUICheckBoxProps,
} from '@mui/material'

interface CheckBoxProps extends MUICheckBoxProps {
}

const CheckBox = (props: CheckBoxProps) => {
  return (
    <MUICheckBox
      sx={{ transform: 'scale(0.8)', color: '#c1c1c1' }}
      size="small"
      checked={props.checked}
      {...props}
    />
  )
}

export default CheckBox
