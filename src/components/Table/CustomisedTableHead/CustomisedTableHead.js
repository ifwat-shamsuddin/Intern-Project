import { TableHead, TableRow } from "@material-ui/core"

import StyledTableCell from "../StyledTableCell"

const CustomisedTableHead = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <StyledTableCell>{column.header}</StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default CustomisedTableHead
