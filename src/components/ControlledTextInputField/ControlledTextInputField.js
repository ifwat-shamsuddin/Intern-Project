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
                onChange={(event) => onChange(event.target.value)}
                size="small"
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

export default ControlledTextInputField
