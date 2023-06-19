import { gql } from "@apollo/client"

export const GET_ALL_CHARACTERS = gql`
  query AllCharacters(
    $first: Int
    $last: Int
    $beforeCursor: String
    $afterCursor: String
  ) {
    allPeople(
      first: $first
      last: $last
      before: $beforeCursor
      after: $afterCursor
    ) {
      totalCount
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
      pageInfo {
        startCursor
        endCursor
      }
    }
  }
`

export const GET_A_CHARACTER = gql`
  fragment PersonDetails on Person {
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
