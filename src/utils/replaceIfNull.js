const wordsToReplace = ["n/a", "unknown"]

const replaceIfNull = (string) => {
  return wordsToReplace.includes(string) ? "-" : string
}

export default replaceIfNull
