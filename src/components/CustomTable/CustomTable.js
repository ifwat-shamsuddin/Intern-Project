import { Table, TableContainer, Paper } from "@material-ui/core"
import { useState } from "react"

import CustomizedTableHead from "./CustomizedTableHead"
import StyledTableBody from "./StyledTableBody"
import CustomizedTablePagination from "./CustomizedTablePagination"

const CustomTable = ({
  columns,
  data,
  onRowClick,
  rowsPerPageOptions,
  totalRowsCount,
  rowsPerPage,
  setRowsPerPage,
  handleFetchMore,
  tablePage,
  setTablePage,
}) => {
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
          totalRowsCount={totalRowsCount}
          rowsPerPage={rowsPerPage}
          tablePage={tablePage}
          setTablePage={setTablePage}
          setRowsPerPage={setRowsPerPage}
          handleFetchMore={handleFetchMore}
        />
      </Table>
    </TableContainer>
  )
}

export default CustomTable
