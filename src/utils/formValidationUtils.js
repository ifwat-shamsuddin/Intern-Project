export const validateNumberWithinRange = ({
  min,
  max,
  value,
  errorReturn = false,
  isOptional = false,
}) => {
  if (!value && isOptional) return true
  if (value < min || value > max) return errorReturn
  return true
}

export const validateNotEmptyString = ({ value, errorReturn = false }) => {
  const notEmptyStringRegex = /\S/

  if (!notEmptyStringRegex.test(value)) return errorReturn
  return true
}
