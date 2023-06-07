import { gql } from "@apollo/client"

export const GET_ALL_CHARACTERS = gql`
  query AllCharacters($first: Int, $cursor: String) {
    allPeople(first: $first, after: $cursor) {
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
        endCursor
        hasNextPage
      }
    }
  }
`
