import React from 'react'
import { SvgIcon } from '@mui/material'
import { ICONS } from '../../../utils/Constants'

export interface IconPropsType {
  name: string
  [key: string]: unknown
}

const Icon = ({ name, ...props }: IconPropsType) => {
  return <SvgIcon {...props}>{ICONS[name]}</SvgIcon>
}

export default Icon
