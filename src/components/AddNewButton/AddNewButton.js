import { Button, makeStyles } from "@material-ui/core"
import AddCircleIcon from "@material-ui/icons/AddCircle"

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.button.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.button.dark,
    },
  },
}))

const AddNewButton = ({ label, onClick }) => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      className={classes.button}
      startIcon={<AddCircleIcon />}
    >
      {label}
    </Button>
  )
}

export default AddNewButton
