import { gql } from "@apollo/client"

export const GET_ALL_CHARACTERS = gql`
  query AllCharacters {
    allPeople {
      people {
        id
        name
        eyeColor
        height
        gender
        birthYear
        homeworld {
          id
          name
        }
        species {
          id
          name
        }
        filmConnection {
          totalCount
        }
      }
    }
  }
`
