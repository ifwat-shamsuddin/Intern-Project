import { Typography, makeStyles, useTheme } from "@material-ui/core"
import { useMemo } from "react"
import { Controller } from "react-hook-form"
import Select from "react-select"

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
  errorMsg: {
    margin: 0,
    color: theme.palette.error.main,
  },
}))

const ControlledSelectInputField = ({
  control,
  name,
  label,
  placeholder,
  options,
  rules,
  errors,
}) => {
  const classes = useStyles()
  const theme = useTheme()

  const customStyles = useMemo(() => {
    return {
      control: (baseStyles, { isFocused }) => {
        const borderColor = !!errors?.[name]
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
  }, [theme, errors])

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
              <Select
                styles={customStyles}
                options={options}
                placeholder={placeholder}
                value={value}
                onChange={(newValue) => onChange(newValue)}
              />
              <Typography
                variant="caption"
                display="block"
                className={classes.errorMsg}
              >
                {!!errors?.[name] && errors[name].message}
              </Typography>
            </>
          )
        }}
      />
    </div>
  )
}

export default ControlledSelectInputField
