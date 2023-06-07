import { Table, TableContainer, Paper } from "@material-ui/core"

import CustomizedTableHead from "./CustomizedTableHead"
import StyledTableBody from "./StyledTableBody"
import { useState } from "react"
import CustomizedTablePagination from "./CustomizedTablePagination"

const CustomTable = ({ columns, data, onRowClick, rowsPerPageOptions }) => {
  const [tablePage, setTablePage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions?.[0] || 10)

  return (
    <TableContainer
      component={Paper}
      elevation={0}
    >
      <Table>
        <CustomizedTableHead columns={columns} />

        <StyledTableBody
          columns={columns}
          data={data}
          onRowClick={onRowClick}
          tablePage={tablePage}
          rowsPerPage={rowsPerPage}
        />

        <CustomizedTablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          rowsCount={data.length}
          rowsPerPage={rowsPerPage}
          tablePage={tablePage}
          setTablePage={setTablePage}
          setRowsPerPage={setRowsPerPage}
        />
      </Table>
    </TableContainer>
  )
}

export default CustomTable
