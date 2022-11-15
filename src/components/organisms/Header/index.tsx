import { Badge, Grid, Select, Typography } from '@mui/material'
import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined'
import Profile from '../../molecules/Profile'
import { IMenuItems } from '../../../utils/Constants'
interface CustomHeaderProps {
  title: string
  badgeContent: number
  icon: JSX.Element
  menuItems: IMenuItems[]
}
const iconStyle = {
  margin: '3px',
  backgroundColor: 'white',
  height: '40px',
  width: '40px',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
}

const center = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px',
}
const profile = {
  width: '350px',
  paddingLeft: '10px',
}

const bgColor = {
  backgroundColor: 'grey',
}

const Header: React.FC<CustomHeaderProps> = (props) => {
  const { title, badgeContent, icon, menuItems } = props
  return (
    <Grid container sx={center}>
      <Grid item xs={6}>
        <Typography variant="h1" fontSize="24px" color="grey">
          {title}
        </Typography>
      </Grid>
      <Grid item container xs={6}>
        <Grid
          item
          container
          display="flex"
          justifyContent="flex-end"
          marginRight="20px"
        >
          <Grid
            item
            sx={bgColor}
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <Badge
              sx={iconStyle}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              color="warning"
              badgeContent={badgeContent}
            >
              <NotificationsNoneOutlinedIcon
                fontSize="medium"
                sx={{ margin: '2px' }}
              />
            </Badge>
          </Grid>
          <Grid item sx={profile}>
            <Profile icon={icon} menuItems={menuItems} />
          </Grid>
          <Grid
            item
            sx={bgColor}
            marginLeft="10px"
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <div style={iconStyle}>
              <QuestionMarkOutlinedIcon
                fontSize="medium"
                sx={{ margin: '2px' }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
