import { makeStyles, TextField } from "@material-ui/core"
import { Controller, useFormContext } from "react-hook-form"

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

const ControlledTextInputField = ({
  name,
  label,
  rules = {},
  defaultValue = "",
  placeholder,
}) => {
  const classes = useStyles()
  const { control, errors } = useFormContext()

  const isRequired = rules.required !== undefined

  return (
    <div className={classes.root}>
      <span className={classes.label}>
        {label}
        {isRequired && "*"}
      </span>
      <Controller
        as={<TextField />}
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        placeholder={placeholder}
        variant="outlined"
        error={Boolean(errors[name])}
        helperText={errors[name]?.message}
      />
    </div>
  )
}

export default ControlledTextInputField
