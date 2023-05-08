import { Table, TableContainer, Paper } from "@material-ui/core"

import CustomisedTableHead from "./CustomisedTableHead"
import StyledTableBody from "./StyledTableBody"

const CustomTable = ({ columns, data, onRowClick, editableRow }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
    >
      <Table>
        <CustomisedTableHead
          columns={columns}
          editableRow={editableRow}
        />

        <StyledTableBody
          columns={columns}
          data={data}
          onRowClick={onRowClick}
          editableRow={editableRow}
        />
      </Table>
    </TableContainer>
  )
}

export default CustomTable
