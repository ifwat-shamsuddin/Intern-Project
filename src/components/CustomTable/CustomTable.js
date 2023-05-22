import { Table, TableContainer, Paper } from "@material-ui/core"

import CustomizedTableHead from "./CustomizedTableHead"
import StyledTableBody from "./StyledTableBody"

const CustomTable = ({ columns, data, onRowClick }) => {
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
      </Table>
    </TableContainer>
  )
}

export default CustomTable
