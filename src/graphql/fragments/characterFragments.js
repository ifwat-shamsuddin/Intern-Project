import { gql } from "@apollo/client"

export const CHARACTER_FRAGMENT = gql`
  fragment Character on Person {
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
`
