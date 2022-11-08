import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { styled } from '@mui/material'

const CustomSearchField = styled(OutlinedInput)(() => ({
  height: '25px',
}))

const CustomizedInputBase: React.FC = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl>
        <CustomSearchField
          placeholder="Search"
          startAdornment={<SearchOutlinedIcon sx={{ paddingRight: '5px' }} />}
        />
      </FormControl>
    </Box>
  )
}
export default CustomizedInputBase
