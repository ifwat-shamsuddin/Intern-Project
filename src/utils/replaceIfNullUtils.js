import { wordsToRemoveEnum } from "@/enums/wordsToRemoveEnum"

const replaceIfNull = (string) => {
  return wordsToRemoveEnum.words.includes(string) ? "-" : string
}

export default replaceIfNull
