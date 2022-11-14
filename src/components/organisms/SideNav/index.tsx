import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import NavItem from '../../molecules/NavItem'
import theme from '../../../theme/theme'
import { NavItemsType, NAV_ITEMS } from '../../../utils/Constants'
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
interface InputProps {
  navItems?: NavItemsType[]
}
const SideNav = ({ navItems }: InputProps) => {
  const navigate = useNavigate()
  const [navItemsList, setNavItemsList] = useState(navItems)
  const [currentPage, setCurrentPage] = useState('')
  useEffect(() => {
    if (navItems == undefined) {
      setNavItemsList(NAV_ITEMS)
    }
  }, [])
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
        {navItemsList &&
          navItemsList.map((item) => {
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
                  item.nestedItems &&
                  item.nestedItems.length != 0 &&
                  item.nestedItems.map((nestedItem) => {
                    return (
                      <NavItem
                        iconName={'none'}
                        route={`${item.route}/${nestedItem.route}`}
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
