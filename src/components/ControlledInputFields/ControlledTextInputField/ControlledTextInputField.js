import { makeStyles, TextField } from "@material-ui/core"
import { Controller } from "react-hook-form"

import InputErrorMessage from "../../InputErrorMessage/InputErrorMessage"
import * as formValidationUtils from "@/utils/formValidationUtils"

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
  isRequired = false,
  control,
  name,
  label,
  placeholder = "",
  error,
  customValidationFunctions = {},
}) => {
  const classes = useStyles()

  const validateRequired = (value) => {
    if (isRequired)
      return formValidationUtils.validateNotEmptyString({
        value,
        errorReturn: "This field is required",
      })

    return true
  }

  return (
    <div className={classes.root}>
      <span className={classes.label}>
        {label}
        {isRequired && "*"}
      </span>

      <Controller
        control={control}
        name={name}
        rules={{
          validate: { validateRequired, ...customValidationFunctions },
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
