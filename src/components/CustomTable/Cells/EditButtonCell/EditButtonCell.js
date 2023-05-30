import EditButton from "@/components/Buttons/EditButton"
import { TableCell, withStyles } from "@material-ui/core"

const NewTableCell = withStyles((theme) => ({
  root: {
    padding: "10px",
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
