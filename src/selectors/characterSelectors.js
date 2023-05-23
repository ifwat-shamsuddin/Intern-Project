export const characters = (state) => state.characters

export const getCharacterById = (id) => (state) =>
  state.characters.find((character) => character.id === id)
