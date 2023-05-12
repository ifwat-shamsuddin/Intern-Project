export const characters = (state) => state.character.characters

export const getCharacterById = (id) => (state) =>
  state.character.characters.find((character) => character.id === id)
