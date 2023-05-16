import { makeStyles, TextField } from "@material-ui/core"
import { Controller } from "react-hook-form"

import InputErrorMessage from "../InputErrorMessage/InputErrorMessage"
import { validateNonSpaceInput } from "@/utils/formValidationUtils"

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
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    paddingBottom: "4px",
  },
}))

const ControlledTextInputField = ({
  control,
  name,
  label,
  placeholder,
  customValidationFunction,
  error,
  required,
}) => {
  const classes = useStyles()

  const validateRequired = (value) => {
    if (required && !value) return "This field is required"

    if (required)
      return validateNonSpaceInput({
        value,
        errorReturn: "This field should not be only space",
      })

    return true
  }

  return (
    <div className={classes.root}>
      <span className={classes.label}>
        {label}
        {required && "*"}
      </span>

      <Controller
        control={control}
        name={name}
        rules={{
          validate: { validateRequired, ...customValidationFunction },
        }}
        render={({ value, onChange }) => {
          return (
            <>
              <TextField
                value={value}
                placeholder={placeholder}
                variant="outlined"
                onChange={(event) => onChange(event.target.value)}
                size="small"
                error={!!error}
              />
              <InputErrorMessage errorMessage={error?.message} />
            </>
          )
        }}
      />
    </div>
  )
}

export default ControlledTextInputField
