import { Table, TableContainer, Paper } from "@material-ui/core"

import CustomisedTableHead from "./CustomisedTableHead"
import StyledTableBody from "./StyledTableBody"
import { editableRowEnum } from "@/enums/editableRowEnum"

const CustomTable = ({ columns, data, onRowClick, hasEditableRow }) => {
  const modifiedColumns = [...columns]

  if (hasEditableRow) {
    modifiedColumns.push(editableRowEnum)
  }

  return (
    <TableContainer
      component={Paper}
      elevation={0}
    >
      <Table>
        <CustomisedTableHead columns={modifiedColumns} />

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
