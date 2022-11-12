import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import {
  Divider,
  Grid,
  Select,
  SelectProps,
  Typography,
  styled,
} from '@mui/material'
import { CustomSelectProps } from '../../../utils/Constants'

const MuiDivider = styled(Divider)({
  border: '1px solid grey',
})

const CustomSelect: React.FC<CustomSelectProps & SelectProps> = (props) => {
  const { items, formSize } = props
  const menuItems = items.map((item) => (
    <MenuItem key={item.id} value={item.id}>
      {
        <Grid container width="150px">
          <Grid item container justifyContent={'space-between'}>
            <Grid item>
              <Typography>{item.preText}</Typography>
            </Grid>
            {item.postText && (
              <>
                <MuiDivider orientation="vertical" flexItem />
                <Grid item>
                  <Typography>{item.postText}</Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      }
    </MenuItem>
  ))

  return (
    <FormControl fullWidth size={formSize}>
      <Select {...props}>{menuItems}</Select>
    </FormControl>
  )
}

export default CustomSelect
