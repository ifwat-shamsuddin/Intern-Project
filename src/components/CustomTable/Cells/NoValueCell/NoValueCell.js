import { TableCell, withStyles } from "@material-ui/core"

const NewTableCell = withStyles((theme) => ({
  root: {
    padding: "10px",
  },
}))(TableCell)

const NoValueCell = () => {
  return <NewTableCell>-</NewTableCell>
}

export default NoValueCell
