export const characters = (state) => state.character.characters

export const getCharacterById = (state, id) => {
  state.character.characters.find((character) => character.id === id)
}
