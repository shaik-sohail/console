import React from 'react'
import CheckBox from '../../Atoms/Checkbox'
import { Table as MUITable, Typography, Box, IconButton } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { KeyboardArrowDown } from '@mui/icons-material'
import TablePagination from '@mui/material/TablePagination'
import stableSort from '../../../util/utilityFunction'

const styleMap = {
  tableCellWithText: {
    fontSize: '12px',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    fontSize: '14px',
  },
  cellHead: {
    padding: '0px 10px 0px 8px',
    borderLeft: '1px solid #dfdfdf',
    borderRight: '1.5px solid #dfdfdf',
  },
  cellRow: {
    padding: '5px 10px 5px 8px',
    borderLeft: '1px solid #dfdfdf',
    borderRight: '1.5px solid #dfdfdf',
  },
  rowHead: {
    borderBottom: '1.2px solid #9e9e9e',
  },
}

export interface column {
  id: number
  value: string
  type: string
  alignText: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined
}

export interface row {
  [x: string]: any
}

interface ITableProps {
  headers?: column[]
  rows?: row[]
  handleCheckBox?: (id: number) => void
  rowsLength: number
}

const Table = ({ headers, rows, handleCheckBox, rowsLength }: ITableProps) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
 
  return (
    <div style={{ border: '1px solid #dddddd' }}>
      <TableContainer>
        <MUITable sx={{ border: '1px solid #dddddd' }}>
          <TableHead>
            <TableRow sx={styleMap.rowHead}>
              {headers?.map((data) => {
                if (data.type == 'text') {
                  return (
                    <TableCell align={data.alignText} sx={styleMap.cellHead}>
                      <Typography sx={styleMap.tableHeaderCell}>
                        {data.value}
                      </Typography>
                    </TableCell>
                  )
                } else if (data.type == 'checkbox') {
                  return (
                    <TableCell
                      align={data.alignText}
                      width={2}
                      sx={styleMap.cellHead}
                    >
                      <CheckBox />
                    </TableCell>
                  )
                } else if (data.type == 'sort') {
                  return (
                    <TableCell align={data.alignText} sx={styleMap.cellHead}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          sx={{
                            flex: '1',
                            ...styleMap.tableHeaderCell,
                          }}
                        >
                          {data.value}
                        </Typography>
                        <IconButton>
                          <KeyboardArrowDown />
                        </IconButton>
                      </Box>
                    </TableCell>
                  )
                }
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(rows)
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map?.((data: any) => {
                // {rows?.map((data) => {
                return (
                  <TableRow
                    key={data.id}
                    sx={{
                      borderBottom: '1px solid #eeeeee',
                      backgroundColor: data.isRowSelected && '#d2d2d2',
                      '&:hover': {
                        backgroundColor: data.isRowSelected
                          ? '#d2d2d2'
                          : ' #ebebeb;',
                      },
                    }}
                  >
                    {data.values?.map((valueType: any) => {
                      if (valueType.type == 'checkbox') {
                        return (
                          <TableCell sx={styleMap.cellRow} align="center">
                            <CheckBox
                              onChange={(e) => handleCheckBox?.(data.id)}
                              checked={valueType.isChecked}
                            />
                          </TableCell>
                        )
                      } else if (valueType.type == 'text') {
                        return (
                          <TableCell
                            align={valueType.alignText}
                            sx={styleMap.cellRow}
                          >
                            <Typography sx={styleMap.tableCellWithText}>
                              {valueType.value}
                            </Typography>
                          </TableCell>
                        )
                      } else {
                        return <></>
                      }
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </MUITable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rowsLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default Table
