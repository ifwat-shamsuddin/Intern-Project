export const validateNumberWithinRange = ({
  min,
  max,
  value,
  errorReturn = false,
}) => {
  if (!value) return
  if (value < min || value > max) return errorReturn
  return true
}

export const validateNumberMin = ({ min, value, errorReturn = false }) => {
  if (!value) return
  if (value < min) return errorReturn
  return true
}
