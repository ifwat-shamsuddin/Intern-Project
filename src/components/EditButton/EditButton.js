import { IconButton, Tooltip, makeStyles } from "@material-ui/core"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"

const useStyles = makeStyles(() => ({
  root: {
    height: "10px",
  },
}))

const EditButton = ({ tooltipTitle, onClick }) => {
  const classes = useStyles()

  return (
    <Tooltip
      title={tooltipTitle}
      placement="top"
      arrow
    >
      <IconButton
        className={classes.root}
        onClick={onClick}
        size="small"
      >
        <EditOutlinedIcon />
      </IconButton>
    </Tooltip>
  )
}

export default EditButton
