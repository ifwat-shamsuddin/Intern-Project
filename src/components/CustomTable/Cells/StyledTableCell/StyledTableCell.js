import { TableCell, withStyles } from "@material-ui/core"

import NoValueCell from "../NoValueCell/NoValueCell"

const NewTableCell = withStyles((theme) => ({
  root: {
    padding: "10px",
  },
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.dark,
    fontWeight: theme.typography.fontWeightBold,
  },
  body: {
    textTransform: "capitalize",
  },
}))(TableCell)

const StyledTableCell = ({ value }) => {
  if (!value) return <NoValueCell />
  return <NewTableCell>{value}</NewTableCell>
}

export default StyledTableCell
