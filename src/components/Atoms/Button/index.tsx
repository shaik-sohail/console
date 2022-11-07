import React from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from '@mui/material'
interface iProps extends MuiButtonProps {}
const CustomizedButton = styled(MuiButton)(() => ({}))
const CutomButton: React.FC<iProps> = (props) => {
  const { children } = props
  return (
    <>
      <CustomizedButton {...props}>{children}</CustomizedButton>
    </>
  )
}

export default CutomButton
