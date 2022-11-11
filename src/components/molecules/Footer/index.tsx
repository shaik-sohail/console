import React from 'react'
import { Box, Typography } from '@mui/material'
import theme from '../../../theme/theme'

const styleMap = {
  outerBoxStyle: {
    borderTop: `1px solid ${theme.palette.primary.main}`,
    justifyContent: 'right',
    height: '100px',
    color: theme.palette.grey.main,
  },
  typographyStyle: {
    fontSize: '14px',
    fontWeight: '18px',
    display: 'flex',
    justifyContent: 'right',
    pr: '70px',
  },
}

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ ...styleMap.outerBoxStyle }}
    >
      <Box sx={{ pt: '40px' }}>
        <Typography sx={{ ...styleMap.typographyStyle }}>
          ©TransUnion LLC.All Rights Reserved.
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ ...styleMap.typographyStyle }}>
          TransUnion.com | Privacy Policy | Terms of Us
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
