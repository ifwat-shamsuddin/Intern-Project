export const characters = (state) => state.character.characters

export const getCharacterById = (state, id) => {
  const characters = state.character.characters

  return characters.find((character) => character.id === id)
}
