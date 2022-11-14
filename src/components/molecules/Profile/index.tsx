import React from 'react'
import { Box, Grid, styled } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import Icon from '../../Atoms/Icon'
import CustomSelect from '../../Atoms/Select'
import { MenuItems } from '../../../utils/Constants'
const CustomBox = styled(Box)({
  backgroundColor: 'grey',
})
const CustomDiv = styled('div')({
  backgroundColor: 'whitesmoke',
  margin: '3px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
const IconDiv = styled('div')({
  backgroundColor: 'whitesmoke',
  margin: '3px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '40px',
})
const Profile: React.FC = () => {
  return (
    <div>
      <CustomBox>
        <Grid container>
          <Grid
            item
            xs={2}
            justifyContent="center"
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconDiv>
              <Icon icon={<PermIdentityIcon />} />
            </IconDiv>
          </Grid>
          <Grid item xs={10}>
            <CustomDiv>
              <CustomSelect formSize="small" value="1" items={MenuItems} />
            </CustomDiv>
          </Grid>
        </Grid>
      </CustomBox>
    </div>
  )
}

export default Profile
