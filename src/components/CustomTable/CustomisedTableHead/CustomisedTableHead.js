import { TableHead, TableRow } from "@material-ui/core"

import StyledTableCell from "../StyledTableCell"

const CustomisedTableHead = ({ columns, editableRow }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <StyledTableCell
            key={column.header}
            value={column.header}
          />
        ))}
        {editableRow && (
          <StyledTableCell
            key={"editCharacterButton"}
            value={null}
          />
        )}
      </TableRow>
    </TableHead>
  )
}

export default CustomisedTableHead
