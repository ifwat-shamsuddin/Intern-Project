export const ADD_CHARACTER = "ADD_CHARACTER"

export const addCharacter = (character) => {
  return {
    type: ADD_CHARACTER,
    newCharacter: character,
  }
}
