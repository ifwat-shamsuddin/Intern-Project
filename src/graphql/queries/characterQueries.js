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
      edges {
        node {
          birthYear
          eyeColor
          filmConnection {
            totalCount
          }
          gender
          height
          homeworld {
            id
            name
          }
          id
          name
          species {
            id
            name
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`
