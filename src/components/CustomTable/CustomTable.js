import { Table, TableContainer, Paper } from "@material-ui/core"

import CustomizedTableHead from "./CustomizedTableHead"
import StyledTableBody from "./StyledTableBody"
import CustomizedTablePagination from "./CustomizedTablePagination"

const CustomTable = ({
  columns,
  data,
  onRowClick,
  tablePage,
  rowsPerPage,
  CustomizedTablePaginationProps = {},
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
          tablePage={tablePage}
          rowsPerPage={rowsPerPage}
          {...CustomizedTablePaginationProps}
        />
      </Table>
    </TableContainer>
  )
}

export default CustomTable
