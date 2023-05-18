import { TableHead, TableRow } from "@material-ui/core"

import StyledTableCell from "../StyledTableCell"

const CustomizedTableHead = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <StyledTableCell
            key={column.header}
            value={column.header}
          />
        ))}
      </TableRow>
    </TableHead>
  )
}

export default CustomizedTableHead
