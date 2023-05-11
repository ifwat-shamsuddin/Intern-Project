import { TableCell, withStyles } from "@material-ui/core"

import replaceIfNull from "@/utils/replaceIfNullUtils"
import EditButton from "@/components/EditButton/EditButton"

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

const StyledTableCell = ({ value, hasEditableRow, onRowClick }) => {
  return (
    <NewTableCell>
      {hasEditableRow ? (
        <EditButton
          tooltipTitle="Edit Character"
          onClick={onRowClick}
        />
      ) : (
        replaceIfNull(value)
      )}
    </NewTableCell>
  )
}

export default StyledTableCell
