import { makeStyles, TextField } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& .MuiFormHelperText-contained": {
      margin: "0",
    },
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize,
  },
}))

const NumberInputField = ({
  id,
  label,
  required,
  placeholder,
  error,
  errorMsg,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <span className={classes.label}>
        {label}
        {required && "*"}
      </span>
      <TextField
        type="number"
        id={`${id}-input`}
        required={required}
        variant="outlined"
        placeholder={placeholder}
        size="small"
        error={error}
        helperText={error && errorMsg}
      />
    </div>
  )
}

export default NumberInputField
