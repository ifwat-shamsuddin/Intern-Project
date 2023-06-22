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
  const { name, eyeColor, height, gender, birthYear, species, numberOfFilms } =
    formData
  const { id } = character

  const newHomeworld =
    formData.homeworld === character.homeworld.name
      ? {
          ...character.homeworld,
        }
      : {
          ...character.homeworld,
          id: nanoid(),
          name: formData.homeworld,
        }

  return {
    id,
    homeworld: newHomeworld,
    species: species
      ? {
          id: species.value,
          name: species.label,
        }
      : null,
    filmConnection: {
      ...character.filmConnection,
      totalCount: numberOfFilms,
    },
    name,
    eyeColor,
    height,
    gender: gender?.value,
    birthYear,
  }
}
