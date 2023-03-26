import { TableBody, TableRow, makeStyles } from "@material-ui/core"

import StyledTableCell from "../StyledTableCell"

const useStyles = makeStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.secondary.main,
    },
    "&$hover:hover": {
      backgroundColor: theme.palette.primary.main,
      cursor: "pointer",
    },
  },

  hover: {},
}))

const StyledTableBody = ({ columns, data }) => {
  const classes = useStyles()

  return (
    <TableBody>
      {data.map((row) => (
        <TableRow
          hover
          key={row.id}
          classes={{ root: classes.root, hover: classes.hover }}
          onClick={() => alert("You have clicked row " + row.name)}
        >
          {columns.map((column) => (
            <StyledTableCell>
              {column.nestedKey
                ? row[column.nestedKey]
                  ? row[column.nestedKey][column.field]
                  : "-"
                : row[column.field]}
            </StyledTableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default StyledTableBody
