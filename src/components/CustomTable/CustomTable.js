import { Table, TableContainer, Paper } from "@material-ui/core"

import CustomisedTableHead from "./CustomisedTableHead"
import StyledTableBody from "./StyledTableBody"

const CustomTable = ({ columns, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <CustomisedTableHead columns={columns} />

        <StyledTableBody
          columns={columns}
          data={data}
        />
      </Table>
    </TableContainer>
  )
}

export default CustomTable
