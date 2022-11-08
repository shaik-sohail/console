import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import NavItem from '../../molecules/NavItem'
import theme from '../../../theme/theme'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../../utils/Constants'

const SideNav = () => {
  const [currentPage, setcurrentPage] = useState('')
  const onNavItemClick = (value: string) => {
    setcurrentPage(window.location.pathname.split('/')[1])
  }

  return (
    <Box
      sx={{
        height: '100vh',
        maxWidth: '260px',
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{
          borderBottom: '1px solid white',
          height: '100px',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h4">TruValidate</Typography>
      </Box>
      <Box sx={{ pl: '7px', pt: '4.5px' }}>
        {NAV_ITEMS.map((item) => {
          return (
            <NavLink
              to={item.icon}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <NavItem
                iconName={item.icon}
                text={item.text}
                onNavItemClick={onNavItemClick}
                active={item.icon == currentPage}
              />
            </NavLink>
          )
        })}
      </Box>
    </Box>
  )
}

export default SideNav
