import { Table, TableContainer, Paper } from "@material-ui/core"

import CustomizedTableHead from "./CustomizedTableHead"
import StyledTableBody from "./StyledTableBody"
import { editableRowEnum } from "@/enums/editableRowEnum"

const CustomTable = ({ columns, data, onRowClick }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
    >
      <Table>
        <CustomizedTableHead columns={columns} />

        <StyledTableBody
          columns={modifiedColumns}
          data={data}
          onRowClick={onRowClick}
          hasEditableRow={hasEditableRow}
        />
      </Table>
    </TableContainer>
  )
}

export default CustomTable
