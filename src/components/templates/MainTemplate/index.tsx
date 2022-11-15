import React from 'react'
import { Box, Typography } from '@mui/material'
import SideNav from '../../organisms/SideNav'
import Footer from '../../molecules/Footer'

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
    borderBottom: '1px solid black',
  }
  
}


const MainTemplate = ({ child }: InputProps) => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
      <Box>
        <SideNav></SideNav>
      </Box>
      <Box
        sx={{...styleMap.containerStyle}}
      >
        <Box
          sx={{...styleMap.dummyHeaderStyle}}
        >
          <Typography>Replace with Header Component</Typography>
        </Box>
        <Box>{child}</Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default MainTemplate
