import React from 'react'
import { Box, Typography } from '@mui/material'
import theme from '../../../theme/theme'
import Icon from '../../Atoms/Icon'
import { ICONS } from '../../../utils/Constants'

const styleMap = {
  outerBoxStyle: {
    width: '100%',
    alignItems: 'center',
    height: '50px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'white',
      '.MuiSvgIcon-root': {
        color: 'black',
      },
    },
  },
}
interface InputProps {
  iconName: string
  text: string
  onNavItemClick: (value: string) => void
  active: boolean;
  route:string;
}
const NavItem = ({ iconName, text, onNavItemClick, active,route }: InputProps) => {
  return (
    <Box
      onClick={() => {
        onNavItemClick(route)
      }}
      display="flex"
      sx={{
        ...styleMap.outerBoxStyle,
        backgroundColor: !active
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
      }}
    >
      <Box sx={{ pl: '9px' }}>
        <Icon
          icon={ICONS[iconName]}
          fontSize="small"
          sx={{ color: !active ? theme.palette.secondary.main : 'none' }}
        />
      </Box>
      <Box sx={{ pl: '12px' }}>
        <Typography>{text}</Typography>
      </Box>
    </Box>
  )
}

export default NavItem
