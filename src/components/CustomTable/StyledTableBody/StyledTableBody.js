import { TableBody, TableRow, makeStyles } from "@material-ui/core"
import { get } from "lodash"

import StyledTableCell from "../StyledTableCell"

const useStyles = makeStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.secondary.main,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
}))

const StyledTableBody = ({ columns, data, onRowClick, editableRow }) => {
  const classes = useStyles()

  return (
    <TableBody>
      {data.map((row) => (
        <TableRow
          hover
          key={row.id}
          classes={{ root: classes.root, hover: classes.hover }}
          onClick={() => onRowClick(row)}
        >
          {columns.map((column) => (
            <StyledTableCell
              key={row.id + column.header}
              value={get(row, column.field, "-")}
            />
          ))}
          {editableRow && (
            <StyledTableCell
              editableRow={editableRow}
              onRowClick={() => onRowClick(row)}
            />
          )}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default StyledTableBody
