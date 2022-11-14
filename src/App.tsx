import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import SideNav from './components/organisms/SideNav'
import axios from 'axios'
import Table, { column, row } from './components/organisms/OrchestrationTable'
import { NAV_ITEMS } from './utils/Constants'

const App = () => {
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

        setTableData({ headers: res.data.headers, rows: res.data.data, header_names : res.data.header_names, result : res.data.result })
        setRowsLength(res.data.result.length)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <BrowserRouter>
      {/* <SideNav navItems={NAV_ITEMS}/> */}
      <Table
        headers={tableData?.headers}
        header_names = {tableData.header_names}
        result= {tableData.result}
        rows={tableData?.rows}
        handleCheckBox={handleCheckBox}
        rowsLength={rowsLength}
      />
    </BrowserRouter>
  )
}
export default App
