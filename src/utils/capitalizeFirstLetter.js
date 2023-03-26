function capitalizeFirstLetter(string) {
  if (Number.isInteger(string)) {
    return string
  }

  return string.replace(/\b\w/g, function (word) {
    return word.toUpperCase()
  })
}

export default capitalizeFirstLetter
