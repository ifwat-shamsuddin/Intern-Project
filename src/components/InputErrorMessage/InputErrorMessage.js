import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    color: theme.palette.error.main,
  },
}))

const InputErrorMessage = ({ errorMessage }) => {
  const classes = useStyles()

  if (!errorMessage) return null

  return (
    <Typography
      variant="caption"
      display="block"
      className={classes.root}
    >
      {errorMessage}
    </Typography>
  )
}

export default InputErrorMessage
