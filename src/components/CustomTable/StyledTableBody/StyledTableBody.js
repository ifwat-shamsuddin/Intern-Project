import React from "react"
import { TableBody, TableRow, makeStyles } from "@material-ui/core"
import { get } from "lodash"

const useStyles = makeStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.secondary.main,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      cursor: "pointer",
    },
    "& > *": {
      borderBottomColor: theme.palette.primary.dark,
    },
  },
}))

const StyledTableBody = ({
  columns,
  data,
  onRowClick,
  tablePage,
  rowsPerPage,
}) => {
  const classes = useStyles()

  const slicedRows = data.slice(
    tablePage * rowsPerPage,
    tablePage * rowsPerPage + rowsPerPage
  )

  return (
    <TableBody>
      {slicedRows.map((row) => (
        <TableRow
          hover
          key={row.id}
          classes={{ root: classes.root, hover: classes.hover }}
          onClick={() => onRowClick(row)}
        >
          {columns.map((column) => {
            const { header, field, CellRenderer } = column

            return (
              <React.Fragment key={row.id + header}>
                <CellRenderer
                  cellData={get(row, field)}
                  rowData={row}
                />
              </React.Fragment>
            )
          })}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default StyledTableBody
