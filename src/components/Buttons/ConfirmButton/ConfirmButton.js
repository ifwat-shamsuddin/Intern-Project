import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.button.main,
    "&:hover": {
      backgroundColor: theme.palette.button.dark,
    },
  },
}))

const ConfirmButton = ({ label = "Confirm", onClick }) => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      onClick={onClick}
      size="large"
      className={classes.root}
    >
      {label}
    </Button>
  )
}

export default ConfirmButton
