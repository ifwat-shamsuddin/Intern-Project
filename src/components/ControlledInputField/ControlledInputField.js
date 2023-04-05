import { makeStyles, TextField } from "@material-ui/core"
import { Controller } from "react-hook-form"

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
    fontFamily: theme.typography.fontFamily,
  },
}))

const ControlledInputField = ({ control, name, label, placeholder, type }) => {
  const classes = useStyles()

  const validateInput = (value) => {
    if (!value) return false
    if (value.length < 3) return false

    return true
  }

  return (
    <div className={classes.root}>
      <span className={classes.label}>{label}</span>

      <Controller
        control={control}
        name={name}
        render={({ value, onChange }) => {
          return (
            <TextField
              value={value}
              placeholder={placeholder}
              variant="outlined"
              onChange={(event) => onChange(event.target.value)}
              size="small"
              type={type}
            />
          )
        }}
      />
    </div>
  )
}

export default ControlledInputField
