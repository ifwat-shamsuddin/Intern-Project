import { TableHead, TableRow } from "@material-ui/core"

import StyledTableCell from "../StyledTableCell"
import { editableRowEnum } from "@/enums/editableRowEnum"

const CustomisedTableHead = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) =>
          column === editableRowEnum ? (
            <StyledTableCell
              key={column.header}
              value={" "}
            />
          ) : (
            <StyledTableCell
              key={column.header}
              value={column.header}
            />
          )
        )}
      </TableRow>
    </TableHead>
  )
}

export default CustomisedTableHead
