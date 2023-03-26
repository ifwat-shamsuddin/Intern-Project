import { TableCell, withStyles } from "@material-ui/core"

import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter"
import replaceIfNull from "@/utils/replaceIfNull"

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
  },
}))(TableCell)

const StyledTableCell = ({ children }) => {
  return (
    <NewTableCell>
      {capitalizeFirstLetter(replaceIfNull(children))}
    </NewTableCell>
  )
}

export default StyledTableCell
