import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import SideNav from './components/organisms/SideNav'
import axios from 'axios'
import Table, { column, row } from './components/organisms/OrchestrationTable'
import CustomSelect from './components/Atoms/Select'
import { Divider, Grid, SelectChangeEvent, Typography } from '@mui/material'
const App = () => {
  const [tableData, setTableData] = useState<{
    headers?: column[]
    rows?: row[]
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
        setTableData({ headers: res.data.headers, rows: res.data.data })
        setRowsLength(res.data.data.length)
      })
      .catch((err) => console.log(err))
  }, [])

  // function MItem() {
  //   return (
  //     <Grid container sx={{ width: '150px' }}>
  //       <Grid item container justifyContent={'space-between'}>
  //         <Grid item>
  //           <Typography>Sohail</Typography>
  //         </Grid>
  //         <Divider
  //           orientation="vertical"
  //           flexItem
  //           sx={{ border: '1px solid grey' }}
  //         />
  //         <Grid item>
  //           <Typography>Zemoso</Typography>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   )
  // }
  // const [value, setValue] = React.useState('1')
  // const handleChange = (event: SelectChangeEvent) => {
  //   const newVal = event.target.value
  //   setValue(newVal)
  // }
  return (
    <BrowserRouter>
      {/* <SideNav/> */}
      {/* <div style={{ width: '250px' }}>
        <CustomSelect
          value={value}
          handleChange={handleChange}
          items={
            // 'sohail'
            [
              { id: '1', content: <MItem /> },
              { id: '2', content: <MItem /> },
            ]
          }
        />
      </div> */}
      <Table
        headers={tableData?.headers}
        rows={tableData?.rows}
        handleCheckBox={handleCheckBox}
        rowsLength={rowsLength}
      />
    </BrowserRouter>
  )
}
export default App
