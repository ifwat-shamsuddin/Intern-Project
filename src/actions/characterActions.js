const actionPrefix = "characterActions/"

export const ADD_CHARACTER = actionPrefix + "ADD_CHARACTER"

export const addCharacter = (character) => {
  return {
    type: ADD_CHARACTER,
    newCharacter: character,
  }
}
