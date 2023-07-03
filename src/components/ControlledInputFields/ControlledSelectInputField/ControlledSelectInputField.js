import { makeStyles, useTheme } from "@material-ui/core"
import { useMemo } from "react"
import { Controller } from "react-hook-form"
import Select from "react-select"

import InputErrorMessage from "../../InputErrorMessage/InputErrorMessage"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    paddingBottom: "4px",
  },
}))

const ControlledSelectInputField = ({
  isRequired = false,
  control,
  name,
  label,
  error = "",
  customValidationFunctions = {},
  SelectProps = {},
}) => {
  const classes = useStyles()
  const theme = useTheme()

  const customStyles = useMemo(() => {
    return {
      control: (baseStyles, { isFocused }) => {
        const borderColor = !!error
          ? theme.palette.error.main
          : isFocused
          ? theme.palette.primary.main
          : theme.palette.grey[400]
        return {
          ...baseStyles,
          minHeight: 0,
          height: "30px",
          borderColor,
          "&:hover": {
            borderColor: isFocused
              ? theme.palette.primary.main
              : theme.palette.grey[400],
          },
        }
      },
      valueContainer: (baseStyles) => ({
        ...baseStyles,
        padding: "2px 8px 8px 8px",
      }),
      dropdownIndicator: (baseStyles) => ({
        ...baseStyles,
        padding: "2px 8px 8px 8px",
      }),
      indicatorSeparator: (baseStyles) => ({
        ...baseStyles,
        marginTop: 0,
        marginBottom: "5px",
      }),
      placeholder: (baseStyles) => ({
        ...baseStyles,
        color: theme.palette.text.hint,
      }),
    }
  }, [theme, error])

  const validateRequired = (value) => {
    if (isRequired && !value) return "This field is required"
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
        rules={{ validate: { validateRequired, ...customValidationFunctions } }}
        render={({ value, onChange }) => {
          return (
            <>
              <Select
                styles={customStyles}
                value={value}
                onChange={(newValue) => onChange(newValue)}
                {...SelectProps}
              />
              <InputErrorMessage errorMessage={error} />
            </>
          )
        }}
      />
    </div>
  )
}

export default ControlledSelectInputField
