const actionPrefix = "characterActions/"

export const ADD_CHARACTER = `${actionPrefix}ADD_CHARACTER`
export const EDIT_CHARACTER = `${actionPrefix}EDIT_CHARACTER`

export const addCharacter = (newCharacter) => {
  return {
    type: ADD_CHARACTER,
    newCharacter,
  }
}

export const editCharacter = (updatedCharacter) => {
  return {
    type: EDIT_CHARACTER,
    updatedCharacter,
  }
}
