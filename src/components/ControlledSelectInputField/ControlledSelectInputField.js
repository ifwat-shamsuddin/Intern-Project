import { makeStyles, MenuItem, TextField } from "@material-ui/core"
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

const ControlledSelectInputField = ({
  control,
  name,
  label,
  placeholder,
  options,
}) => {
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
              select
            >
              <MenuItem
                key=""
                value=""
              >
                None
              </MenuItem>
              {options.map((option) => {
                return (
                  <MenuItem
                    key={option}
                    value={option}
                  >
                    {option}
                  </MenuItem>
                )
              })}
            </TextField>
          )
        }}
      />
    </div>
  )
}

export default ControlledSelectInputField
