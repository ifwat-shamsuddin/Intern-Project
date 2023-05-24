import { nanoid } from "@reduxjs/toolkit"

export const prepareCharacterForFormReset = ({
  name,
  eyeColor,
  height,
  gender,
  birthYear,
  homeworld,
  species,
  filmConnection,
}) => {
  return {
    name,
    eyeColor,
    height: height || "",
    gender:
      gender !== "n/a"
        ? {
            value: gender,
            label: gender,
          }
        : null,
    birthYear: birthYear !== "unknown" ? birthYear : "",
    homeworld: homeworld.name,
    species: species?.name
      ? {
          value: species.name,
          label: species.name,
        }
      : null,
    numberOfFilms: filmConnection.totalCount,
  }
}

export const transformCharacterForSubmit = (
  isEdit,
  id,
  {
    name,
    eyeColor,
    height,
    gender,
    birthYear,
    homeworld,
    species,
    numberOfFilms,
  }
) => {
  const commonAttributes = {
    name,
    eyeColor,
    height,
    gender: gender?.value,
    birthYear,
    filmConnection: {
      totalCount: numberOfFilms,
    },
  }

  if (isEdit) {
    return {
      id,
      homeworld: {
        name: homeworld,
      },
      species: {
        name: species?.value,
      },
      ...commonAttributes,
    }
  } else {
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
      ...commonAttributes,
    }
  }
}
