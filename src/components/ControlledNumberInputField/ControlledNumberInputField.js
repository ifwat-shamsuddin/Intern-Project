import { makeStyles, TextField } from "@material-ui/core"
import { Controller } from "react-hook-form"

import InputErrorMessage from "../InputErrorMessage/InputErrorMessage"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,

    "& .MuiOutlinedInput-input": {
      padding: "6px 10px 6px 10px",
      fontSize: theme.typography.fontSize,
    },
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    paddingBottom: "4px",
  },
}))

const ControlledNumberInputField = ({
  control,
  name,
  label,
  placeholder,
  rules,
  errors,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <span className={classes.label}>{label}</span>

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ value, onChange }) => {
          return (
            <>
              <TextField
                value={value}
                placeholder={placeholder}
                variant="outlined"
                size="small"
                inputProps={{ pattern: "[0-9]*" }}
                onChange={(event) => {
                  const isValidData =
                    event.target.validity.valid || event.target.value === ""
                  if (isValidData) onChange(event.target.value)
                }}
                error={!!errors}
              />
              <InputErrorMessage errorMessage={errors?.message} />
            </>
          )
        }}
      />
    </div>
  )
}

export default ControlledNumberInputField
