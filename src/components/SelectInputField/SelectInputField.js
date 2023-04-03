import { makeStyles, MenuItem, TextField } from "@material-ui/core"
import { useState } from "react"

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

const SelectInputField = ({
  id,
  label,
  required,
  placeholder,
  error,
  errorMsg,
  options,
}) => {
  const classes = useStyles()
  const [value, setValue] = useState("")

  return (
    <div className={classes.root}>
      <span className={classes.label}>
        {label}
        {required && "*"}
      </span>
      <TextField
        id={`${id}-input`}
        select
        required={required}
        variant="outlined"
        size="small"
        error={error}
        helperText={error && errorMsg}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <MenuItem
          key="none"
          value="None"
        >
          None
        </MenuItem>
        {options.map((option) => (
          <MenuItem
            key={option}
            value={option}
          >
            {option}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}

export default SelectInputField
