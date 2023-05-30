import { Button, makeStyles } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  },
}))

const DeleteButton = ({ label = "Delete", onClick }) => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      className={classes.button}
      startIcon={<DeleteIcon />}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default DeleteButton
