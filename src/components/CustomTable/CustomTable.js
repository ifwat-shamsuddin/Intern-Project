import { Table, TableContainer, Paper } from "@material-ui/core"

import CustomizedTableHead from "./CustomizedTableHead"
import StyledTableBody from "./StyledTableBody"
import CustomizedTablePagination from "./CustomizedTablePagination"

const CustomTable = ({
  columns,
  data,
  onRowClick,
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
        />

        <CustomizedTablePagination {...CustomizedTablePaginationProps} />
      </Table>
    </TableContainer>
  )
}

export default CustomTable
