import { gql } from "@apollo/client"

export const GET_ALL_HOMEWORLD = gql`
  query AllPlanets {
    allPlanets {
      planets {
        id
        name
      }
    }
  }
`
