import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  characters: [
    {
      id: "cGVvcGxlOjE=",
      name: "Luke Skywalker",
      eyeColor: "blue",
      height: 172,
      gender: "male",
      birthYear: "19BBY",
      homeworld: {
        id: "cGxhbmV0czox",
        name: "Tatooine",
      },
      species: null,
      filmConnection: {
        totalCount: 4,
      },
    },
    {
      id: "cGVvcGxlOjI=",
      name: "C-3PO",
      eyeColor: "yellow",
      height: 167,
      gender: "n/a",
      birthYear: "112BBY",
      homeworld: {
        id: "cGxhbmV0czox",
        name: "Tatooine",
      },
      species: {
        id: "c3BlY2llczoy",
        name: "Droid",
      },
      filmConnection: {
        totalCount: 6,
      },
    },
    {
      id: "cGVvcGxlOjM=",
      name: "R2-D2",
      eyeColor: "red",
      height: 96,
      gender: "n/a",
      birthYear: "33BBY",
      homeworld: {
        id: "cGxhbmV0czo4",
        name: "Naboo",
      },
      species: {
        id: "c3BlY2llczoy",
        name: "Droid",
      },
      filmConnection: {
        totalCount: 6,
      },
    },
    {
      id: "cGVvcGxlOjQ=",
      name: "Darth Vader",
      eyeColor: "yellow",
      height: 202,
      gender: "male",
      birthYear: "41.9BBY",
      homeworld: {
        id: "cGxhbmV0czox",
        name: "Tatooine",
      },
      species: null,
      filmConnection: {
        totalCount: 4,
      },
    },
    {
      id: "cGVvcGxlOjU=",
      name: "Leia Organa",
      eyeColor: "brown",
      height: 150,
      gender: "female",
      birthYear: "19BBY",
      homeworld: {
        id: "cGxhbmV0czoy",
        name: "Alderaan",
      },
      species: null,
      filmConnection: {
        totalCount: 4,
      },
    },
    {
      id: "cGVvcGxlOjY=",
      name: "Owen Lars",
      eyeColor: "blue",
      height: 178,
      gender: "male",
      birthYear: "52BBY",
      homeworld: {
        id: "cGxhbmV0czox",
        name: "Tatooine",
      },
      species: null,
      filmConnection: {
        totalCount: 3,
      },
    },
    {
      id: "cGVvcGxlOjc=",
      name: "Beru Whitesun lars",
      eyeColor: "blue",
      height: 165,
      gender: "female",
      birthYear: "47BBY",
      homeworld: {
        id: "cGxhbmV0czox",
        name: "Tatooine",
      },
      species: null,
      filmConnection: {
        totalCount: 3,
      },
    },
    {
      id: "cGVvcGxlOjg=",
      name: "R5-D4",
      eyeColor: "red",
      height: 97,
      gender: "n/a",
      birthYear: "unknown",
      homeworld: {
        id: "cGxhbmV0czox",
        name: "Tatooine",
      },
      species: {
        id: "c3BlY2llczoy",
        name: "Droid",
      },
      filmConnection: {
        totalCount: 1,
      },
    },
    {
      id: "cGVvcGxlOjk=",
      name: "Biggs Darklighter",
      eyeColor: "brown",
      height: 183,
      gender: "male",
      birthYear: "24BBY",
      homeworld: {
        id: "cGxhbmV0czox",
        name: "Tatooine",
      },
      species: null,
      filmConnection: {
        totalCount: 1,
      },
    },
    {
      id: "cGVvcGxlOjEw",
      name: "Obi-Wan Kenobi",
      eyeColor: "blue-gray",
      height: 182,
      gender: "male",
      birthYear: "57BBY",
      homeworld: {
        id: "cGxhbmV0czoyMA==",
        name: "Stewjon",
      },
      species: null,
      filmConnection: {
        totalCount: 6,
      },
    },
  ],
}

const characterReducer = createSlice({
  name: "character",
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      state.characters.push(action.payload)
    },
    editCharacter: (state, action) => {
      const {
        id,
        name,
        eyeColor,
        height,
        gender,
        birthYear,
        homeworld,
        species,
        filmConnection,
      } = action.payload
      const existingCharacter = state.characters.find(
        (existingCharacter) => existingCharacter.id === id
      )

      if (existingCharacter) {
        ;(existingCharacter.name = name),
          (existingCharacter.eyeColor = eyeColor),
          (existingCharacter.height = height),
          (existingCharacter.gender = gender),
          (existingCharacter.birthYear = birthYear),
          (existingCharacter.homeworld = homeworld),
          (existingCharacter.species = species),
          (existingCharacter.filmConnection = filmConnection)
      }
    },
  },
})

export const { addCharacter, editCharacter } = characterReducer.actions

export default characterReducer.reducer
