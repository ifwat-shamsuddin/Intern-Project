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
