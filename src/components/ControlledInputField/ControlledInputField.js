import { makeStyles, TextField } from "@material-ui/core"
import { Controller } from "react-hook-form"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,

    "& .MuiFormHelperText-contained": {
      margin: "0",
    },

    "& .MuiOutlinedInput-input": {
      padding: "6px 10px 6px 10px",
      fontSize: theme.typography.fontSize,
    },
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    paddingBottom: "4px",
  },
}))

const ControlledInputField = ({ control, name, label, placeholder, type }) => {
  const classes = useStyles()

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
