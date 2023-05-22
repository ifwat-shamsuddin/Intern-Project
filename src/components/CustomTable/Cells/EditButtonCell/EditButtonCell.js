import EditButton from "@/components/EditButton/EditButton"
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

const EditButtonCell = ({ tooltipTitle, onClick }) => {
  return (
    <NewTableCell>
      <EditButton
        tooltipTitle={tooltipTitle}
        onClick={onClick}
      />
    </NewTableCell>
  )
}

export default EditButtonCell
