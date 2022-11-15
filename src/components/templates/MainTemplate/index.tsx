import React from 'react'
import { Box } from '@mui/material'
import SideNav from '../../organisms/SideNav'
import Footer from '../../molecules/Footer'
import Header from '../../organisms/Header'
import { MenuItems } from '../../../utils/Constants'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

interface InputProps {
  child: JSX.Element
}

const styleMap = {
  containerStyle: {
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '.&container::-webkitScrollbar': {
      display: 'none',
    },
    height: '100vh',
    width: '100vw',
  },
  dummyHeaderStyle: {
    height: '100px',
    width: '100%',
    borderBottom: '1px solid #e5e5e5',
  },
}

const MainTemplate = ({ child }: InputProps) => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
      <Box>
        <SideNav></SideNav>
      </Box>
      <Box sx={{ ...styleMap.containerStyle }}>
        <Box sx={{ ...styleMap.dummyHeaderStyle }}>
          <Header
            title={'Orchestration'}
            badgeContent={2}
            icon={<PermIdentityIcon />}
            menuItems={MenuItems}
          />
        </Box>
        <Box px={4} sx={{minHeight : "700px"}} mt={5}>{child}</Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default MainTemplate
