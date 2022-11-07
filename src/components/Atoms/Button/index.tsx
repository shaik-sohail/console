import React from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from '@mui/material'
interface iProps extends MuiButtonProps {}
const CustomizedButton = styled(MuiButton)(() => ({
  borderRadius: '24px',
  border: '4px solid ',
}))
const CutomButton: React.FC<iProps> = (props) => {
  const { children } = props
  return (
    <>
      <CustomizedButton {...props}>{children}</CustomizedButton>
    </>
  )
}

export default CutomButton
