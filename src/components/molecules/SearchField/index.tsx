import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { styled } from '@mui/material'

interface Iprops {
  placeholder: string
  inputValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomSearchField = styled(OutlinedInput)(() => ({
  height: '34px',
  width : "500px"
}))

const CustomizedInputBase: React.FC<Iprops> = (props) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl>
        <CustomSearchField
        
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.inputValue}
          startAdornment={<SearchOutlinedIcon sx={{ paddingRight: '5px' }} />}
        />
      </FormControl>
    </Box>
  )
}
export default CustomizedInputBase
