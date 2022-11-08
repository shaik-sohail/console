import React from 'react'
import { SvgIcon } from '@mui/material'

export interface IconPropsType {
  icon:JSX.Element;
  [key: string]: unknown
}

const Icon = ({ icon, ...props }: IconPropsType) => {
  return <SvgIcon {...props}>{icon}</SvgIcon>
}

export default Icon
