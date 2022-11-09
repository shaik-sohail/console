import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import NavItem from '../../molecules/NavItem'
import theme from '../../../theme/theme'
import { NAV_ITEMS } from '../../../utils/Constants'
import { useNavigate } from 'react-router-dom'

const styleMap = {
  outerBoxStyle: {
    height: '100vh',
    maxWidth: '260px',
    backgroundColor: theme.palette.primary.main,
  },
  headerBoxStyle: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    height: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.main,
  },
}

const SideNav = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState('')
  const onNavItemClick = (value: string) => {
    navigate(`/${value}`)
    setCurrentPage(window.location.pathname.split('/')[1])
  }

  return (
    <Box sx={{ ...styleMap.outerBoxStyle }}>
      <Box
        display="flex"
        alignItems="center"
        sx={{ ...styleMap.headerBoxStyle }}
      >
        <Typography variant="h4">TruValidate</Typography>
      </Box>
      <Box sx={{ pl: '7px', pt: '4.5px' }}>
        {NAV_ITEMS.map((item) => {
          return (
            <>
              <NavItem
                iconName={item.icon}
                route={item.route}
                text={item.text}
                onNavItemClick={onNavItemClick}
                active={item.route == currentPage}
              />
              {item.route == currentPage &&
                item.nestedItems.length != 0 &&
                item.nestedItems.map((nestedItem) => {
                  return (
                    <NavItem
                      iconName={'none'}
                      route={item.route}
                      text={nestedItem.text}
                      onNavItemClick={onNavItemClick}
                      active={true}
                    />
                  )
                })}
            </>
          )
        })}
      </Box>
    </Box>
  )
}

export default SideNav
