import EditButton from "@/components/EditButton/EditButton"
import { TableCell, withStyles } from "@material-ui/core"

const NewTableCell = withStyles((theme) => ({
  root: {
    padding: "10px",
  },
  body: {
    borderBottomColor: theme.palette.primary.dark,
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
