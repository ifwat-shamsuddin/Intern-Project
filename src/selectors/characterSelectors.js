import { wordsToRemoveEnum } from "@/enums/wordsToRemoveEnum"

export const characters = (state) => state.character.characters

export const getCharacterById = (state, id) => {
  const characters = state.character.characters

  const character = characters.find((character) => character.id === id)
  if (!character) return null

  const filteredCharacter = {}
  Object.keys(character).forEach((key) => {
    const value = character[key]
    filteredCharacter[key] = wordsToRemoveEnum.words.includes(value)
      ? ""
      : value
  })

  return filteredCharacter
}
