export const characters = (state) => state.characters

export const character = (id) => (state) =>
  state.characters.find((character) => character.id === id)
