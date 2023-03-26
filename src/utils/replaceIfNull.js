const wordsToReplace = ["n/a", "unknown"]

function replaceIfNull(string) {
  if (Number.isInteger(string)) {
    return string
  }
  return wordsToReplace.includes(string) ? "-" : string
}

export default replaceIfNull
