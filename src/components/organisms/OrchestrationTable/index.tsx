import React from 'react'
import { Table as MUITable, Typography,  } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import stableSort from '../../../utils/utilityFunction'

const styleMap = {
  tableCellWithText: {
    fontSize: '14px',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  cellHead: {
    padding: '4px 12px 4px 12px',
    borderLeft: '1px solid #dfdfdf',
    borderRight: '1.5px solid #dfdfdf',
  },
  cellRow: {
    padding: '10px 12px 10px 12px',
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
  header_names?: [string]
  result?: row[]
  handleCheckBox?: (id: number) => void
  rowsLength: number
}

const Table = ({
  headers,
  rows,
  handleCheckBox,
  rowsLength,
  result,
  header_names,
}: ITableProps) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(4)
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
    <div style={{ border: '1px solid #dddddd', maxWidth: '80%' }}>
      <TableContainer sx={{ width: '100%' }}>
        <MUITable sx={{ border: '1px solid #dddddd' }}>
          <TableHead>
            <TableRow sx={styleMap.rowHead}>
              {/* Below commented code is to develop dynamic headers for the table */}
              {/* {headers?.map((data) => {
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
              })} */}
              <TableCell width={4} align="center" sx={styleMap.cellHead}>
                <Typography sx={styleMap.tableHeaderCell}>S.no</Typography>
              </TableCell>

              {header_names?.map((header) => {
                return (
                  <TableCell align="left" sx={styleMap.cellHead}>
                    <Typography sx={styleMap.tableHeaderCell}>
                      {header}
                    </Typography>
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>

          {/* Below code is to render dynamic data into the table */}
          {/* <TableBody>
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
          </TableBody> */}

          <TableBody>
            {stableSort(result)
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map?.((data: any) => {
                // {rows?.map((data) => {
                return (
                  <TableRow
                    key={data._rev}
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
                    <TableCell align="center" sx={styleMap.cellRow}>
                      <Typography sx={styleMap.tableCellWithText}>
                        {result?.indexOf(data) + 1}
                      </Typography>
                    </TableCell>
                    <TableCell align="left" sx={styleMap.cellRow}>
                      <Typography sx={styleMap.tableCellWithText}>
                        {data._id}
                      </Typography>
                    </TableCell>

                    <TableCell align="left" sx={styleMap.cellRow}>
                      <Typography sx={styleMap.tableCellWithText}>
                        {data.description}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </MUITable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[4, 10, 15]}
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
