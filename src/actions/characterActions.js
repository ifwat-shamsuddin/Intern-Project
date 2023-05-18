import store from "@/store/store"

const actionPrefix = "characterActions/"

export const ADD_CHARACTER = actionPrefix + "ADD_CHARACTER"
export const EDIT_CHARACTER = actionPrefix + "EDIT_CHARACTER"

export const addCharacter = (newCharacter) => {
  return {
    type: ADD_CHARACTER,
    newCharacter,
  }
}

export const editCharacter = (updatedCharacter) => {
  const state = store.getState()
  const updatedCharacters = state.characters.map((existingCharacter) => {
    if (existingCharacter.id === updatedCharacter.id) {
      return {
        ...existingCharacter,
        ...updatedCharacter,
      }
    }
    return existingCharacter
  })

  return {
    type: EDIT_CHARACTER,
    updatedCharacters,
  }
}
