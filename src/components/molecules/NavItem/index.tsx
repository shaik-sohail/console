import React from 'react'
import { Box, Typography } from '@mui/material'
import theme from '../../../theme/theme'
import Icon from '../../Atoms/Icon'

interface InputProps {
  iconName: string
  text: string
  onNavItemClick: (value: string) => void
  active: boolean
}
const NavItem = ({ iconName, text, onNavItemClick, active }: InputProps) => {
  return (
    <Box
      onClick={() => {
        onNavItemClick(iconName)
      }}
      display="flex"
      sx={{
        width: '100%',
        alignItems: 'center',
        backgroundColor: !active ? theme.palette.primary.main : 'white',
        height: '50px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'white',
          '.MuiSvgIcon-root': {
            color: 'black',
          },
        },
      }}
    >
      <Box sx={{ pl: '9px' }}>
        <Icon
          name={iconName}
          fontSize="small"
          sx={{ color: !active ? 'white' : 'black' }}
        />
      </Box>
      <Box sx={{ pl: '12px' }}>
        <Typography>{text}</Typography>
      </Box>
    </Box>
  )
}

export default NavItem
