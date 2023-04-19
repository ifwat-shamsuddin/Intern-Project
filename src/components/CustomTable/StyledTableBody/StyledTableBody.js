import { TableBody, TableRow, makeStyles } from "@material-ui/core"
import { get } from "lodash"
import { useRouter } from "next/router"

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

const StyledTableBody = ({ columns, data }) => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <TableBody>
      {data.map((row) => (
        <TableRow
          hover
          key={row.id}
          classes={{ root: classes.root, hover: classes.hover }}
          onClick={() =>
            router.push(`/?mode=edit&id=${row.id}`, `edit/${row.id}`)
          }
        >
          {columns.map((column) => (
            <StyledTableCell
              key={row.id + column.header}
              value={get(row, column.field, "-")}
            />
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default StyledTableBody
