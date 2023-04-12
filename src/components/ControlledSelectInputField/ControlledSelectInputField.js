import { makeStyles } from "@material-ui/core"
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
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  minHeight: 0,
                  height: "30px",
                }),
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
                  color: "#a2a2a2",
                }),
              }}
              options={options}
              defaultValue={null}
              placeholder={placeholder}
              value={options.find((option) => option.value === value)}
              onChange={(event) => onChange(event.value)}
            />
          )
        }}
      />
    </div>
  )
}

export default ControlledSelectInputField
