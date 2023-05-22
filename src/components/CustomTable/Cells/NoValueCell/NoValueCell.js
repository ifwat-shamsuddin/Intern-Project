import { TableCell, withStyles } from "@material-ui/core"

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
    borderBottomColor: theme.palette.primary.dark,
    textTransform: "capitalize",
  },
}))(TableCell)

const NoValueCell = () => {
  return <NewTableCell>-</NewTableCell>
}

export default NoValueCell
