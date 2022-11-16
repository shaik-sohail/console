import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import MainTemplate from '../../components/templates/MainTemplate'
import axios from 'axios'

import Table, {
  column,
  row,
} from '../../components/organisms/OrchestrationTable'
import CustomizedInputBase from '../../components/molecules/SearchField'
import CustomButton from '../../components/Atoms/Button'
import { ArrowDownward } from '@mui/icons-material'



export const createJourneyStyle = {
    borderRadius: '24px',
    color: '#fff',
    width: '230px',
  }
  
  export const journeyTemplateStyle = {
    borderRadius: '24px',
    width: '230px',
    border: '4px solid',
    '&:hover': {
      border: '4px solid',
    },
  }
  
  export const moveToTemplateStyle = {
    
    borderRadius: '8px',
    border: '1px solid #dddbda',
    '&:hover': {
      border: '1px solid #dddbda',
    },
  }
const MainContent = () => {
  const [tableData, setTableData] = useState<{
    headers?: column[]
    rows?: row[]
    header_names?: [string]
    result?: row[]
  }>({})

  const [rowsLength, setRowsLength] = useState<number>(0)

  const handleCheckBox = (id: number) => {
    if (tableData?.rows) {
      tableData?.rows?.forEach((data: any) => {
        if (data.id === id) {
          data.isRowSelected = !data.isRowSelected
          data.values.map((valueItem: any) => {
            if (valueItem.type == 'checkbox') {
              valueItem.isChecked = !valueItem.isChecked
            }
          })
        }
      })
    }
    const tableDataUpdated: { headers?: column[]; rows?: row[] } = {
      headers: tableData && tableData?.headers,
      rows: tableData && tableData?.rows,
    }
    setTableData({ ...tableDataUpdated })
  }

  useEffect(() => {
    axios
      .get('http://localhost:8080/table_data')
      .then((res) => {
        console.log('Result is : ', res)

        setTableData({
          headers: res.data.headers,
          rows: res.data.data,
          header_names: res.data.header_names,
          result: res.data.result,
        })
        setRowsLength(res.data.result.length)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Box sx={{marginBottom : "20px"}}>
      <Box
        sx={{
          borderBottom: '1px solid #eff0f3',
          marginBottom: '40px',
          pb: '6px',
        }}
      >
        <Typography>
          Account<span style={{ marginLeft: '40px' }}>:</span> Coffee Company
        </Typography>
        <Typography>
          Account ID<span style={{ marginLeft: '20px' }}>:</span> 97034
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItem: 'center', marginBottom : "40px" }}>
        <CustomizedInputBase
          placeholder={'Search'}
          inputValue={'Search'}
          onChange={() => {}}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <CustomButton
            variant="outlined"
            children={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  sx={{ color: 'black', fontWeight: 'bold', pr: '5px' }}
                  variant="body2"
                >
                  Move to
                </Typography>
                <ArrowDownward fontSize="small" sx={{ color: 'black' }} />
              </Box>
            }
            sx={{ ...moveToTemplateStyle }}
          />

          <CustomButton
            variant="outlined"
            children="JOURNEY TEMPLATE"
            sx={{ ...journeyTemplateStyle, marginLeft: '40px' }}
          />
          <CustomButton
            variant="contained"
            children="CREATE NEW JOURNEY"
            sx={{ ...createJourneyStyle, marginLeft: '40px' }}
          />
        </Box>
      </Box>
      <Table
        headers={tableData?.headers}
        header_names={tableData.header_names}
        result={tableData.result}
        rows={tableData?.rows}
        handleCheckBox={handleCheckBox}
        rowsLength={rowsLength}
      />
    </Box>
  )
}

const OrchestrationPage = () => {
  return <MainTemplate child={<MainContent />}></MainTemplate>
}

export default OrchestrationPage
