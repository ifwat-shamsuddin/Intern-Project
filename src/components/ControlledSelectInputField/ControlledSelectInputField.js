import { makeStyles, useTheme } from "@material-ui/core"
import { useMemo } from "react"
import { Controller } from "react-hook-form"
import Select from "react-select"

import InputErrorMessage from "../InputErrorMessage/InputErrorMessage"

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
  control,
  name,
  label,
  placeholder,
  options,
  rules,
  error,
  required,
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
          ...(required && { required: "This field is required" }),
          ...rules,
        }}
        render={({ value, onChange }) => {
          return (
            <>
              <Select
                styles={customStyles}
                options={options}
                placeholder={placeholder}
                value={value}
                onChange={(newValue) => onChange(newValue)}
              />
              <InputErrorMessage errorMessage={error?.message} />
            </>
          )
        }}
      />
    </div>
  )
}

export default ControlledSelectInputField
