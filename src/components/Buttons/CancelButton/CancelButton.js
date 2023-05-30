import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[400],
    "&:hover": {
      backgroundColor: theme.palette.grey[600],
    },
  },
}))

const CancelButton = ({ label = "Cancel", onClick }) => {
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

export default CancelButton
