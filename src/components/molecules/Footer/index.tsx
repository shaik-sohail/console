import React from 'react'
import { Box, Typography } from '@mui/material'
import theme from '../../../theme/theme'
import { NavLink } from 'react-router-dom'
import { TRANSUNION_LLC } from '../../../utils/Constants'

const styleMap = {
  outerBoxStyle: {
    borderTop: `1px solid ${theme.palette.primary.main}`,
    justifyContent: 'right',
    height: '120px',
    color: theme.palette.grey.main,
  },
  typographyStyle: {
    fontSize: '14px',
    fontWeight: '18px',
    display: 'flex',
    justifyContent: 'right',
    pr: '70px',
  },
  linkStyle: {
    textDecoration: 'none',
    color: theme.palette.grey.main,
    paddingLeft: '15px',
    paddingRight: '15px',
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
          {TRANSUNION_LLC}{' '}
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ ...styleMap.typographyStyle }}>
          <NavLink to="/" style={{ ...styleMap.linkStyle }}>
            TransUnion.com
          </NavLink>
          |
          <NavLink to="/privacyPolicy" style={{ ...styleMap.linkStyle }}>
            {' '}
            Privacy Policy{' '}
          </NavLink>
          |
          <NavLink
            to="/terms"
            style={{ ...styleMap.linkStyle, paddingRight: '0px' }}
          >
            Terms of Us
          </NavLink>
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
