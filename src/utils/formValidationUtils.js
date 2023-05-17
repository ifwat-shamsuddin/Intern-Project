import { isFinite, isNumber } from "lodash"

export const validateNumberWithinRange = ({
  min = Infinity,
  max = Infinity,
  value,
  errorReturn = false,
}) => {
  if (!isNumber(min) || !isNumber(max) || !isFinite(value)) return errorReturn
  if (value < min || value > max) return errorReturn
  return true
}

export const validateNotEmptyString = ({ value, errorReturn = false }) => {
  const notEmptyStringRegex = /\S/

  if (!notEmptyStringRegex.test(value)) return errorReturn
  return true
}
