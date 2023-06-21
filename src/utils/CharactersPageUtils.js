import { nanoid } from "@reduxjs/toolkit"

export const prepareCharacterForFormReset = ({
  name,
  eyeColor,
  height = "",
  gender,
  birthYear,
  homeworld,
  species,
  filmConnection,
}) => {
  const characterGender =
    gender !== "n/a"
      ? {
          value: gender,
          label: gender,
        }
      : null

  const characterSpecies = species?.name
    ? {
        value: species.name,
        label: species.name,
      }
    : null

  return {
    name,
    eyeColor,
    height,
    gender: characterGender,
    birthYear: birthYear !== "unknown" ? birthYear : "",
    homeworld: homeworld?.name,
    species: characterSpecies,
    numberOfFilms: filmConnection?.totalCount,
  }
}

export const prepareNewCharacterData = ({ formData }) => {
  const {
    name,
    eyeColor,
    height,
    gender,
    birthYear,
    homeworld,
    species,
    numberOfFilms,
  } = formData

  return {
    id: nanoid(),
    homeworld: {
      id: nanoid(),
      name: homeworld,
    },
    species: {
      id: nanoid(),
      name: species?.value,
    },
    filmConnection: {
      totalCount: numberOfFilms,
    },
    name,
    eyeColor,
    height,
    gender: gender?.value,
    birthYear,
  }
}

export const prepareEditCharacterData = ({ formData, character }) => {
  const {
    name,
    eyeColor,
    height,
    gender,
    birthYear,
    homeworld,
    species,
    numberOfFilms,
  } = formData
  const { id } = character

  return {
    id,
    homeworld: {
      name: homeworld,
    },
    species: {
      name: species?.value,
    },
    filmConnection: {
      totalCount: numberOfFilms,
    },
    name,
    eyeColor,
    height,
    gender: gender?.value,
    birthYear,
  }
}

export const prepareSpeciesOptions = ({ speciesOptions }) => {
  if (!speciesOptions) return []

  const transformedData = speciesOptions.allSpecies.species.map(
    ({ id, name }) => ({
      value: id,
      label: name,
    })
  )

  return transformedData
}
