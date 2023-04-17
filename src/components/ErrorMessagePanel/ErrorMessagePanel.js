import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    color: theme.palette.error.main,
  },
}))

const ErrorMessagePanel = ({ errors }) => {
  const classes = useStyles()

  return (
    <Typography
      variant="caption"
      display="block"
      className={classes.root}
    >
      {!!errors && errors.message}
    </Typography>
  )
}

export default ErrorMessagePanel
