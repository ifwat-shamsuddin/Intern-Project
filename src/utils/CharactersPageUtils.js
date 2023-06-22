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

  const characterSpecies = species
    ? {
        value: species.id,
        label: species.name,
      }
    : null

  const characterHomeworld = homeworld
    ? {
        value: homeworld.id,
        label: homeworld.name,
      }
    : null

  return {
    name,
    eyeColor,
    height,
    gender: characterGender,
    birthYear: birthYear !== "unknown" ? birthYear : "",
    homeworld: characterHomeworld,
    species: characterSpecies,
    numberOfFilms: filmConnection?.totalCount ?? "",
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

  const characterSpecies = species
    ? {
        ...character.species,
        id: species.value,
        name: species.label,
      }
    : null

  const characterHomeworld = homeworld
    ? {
        ...character.homeworld,
        id: homeworld.value,
        name: homeworld.label,
      }
    : null

  return {
    id,
    name,
    eyeColor,
    height,
    gender: gender?.value,
    birthYear,
    homeworld: characterHomeworld,
    species: characterSpecies,
    filmConnection: {
      ...character.filmConnection,
      totalCount: numberOfFilms,
    },
  }
}
