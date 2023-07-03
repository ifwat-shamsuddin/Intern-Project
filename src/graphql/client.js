import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allPeople: {
            merge: (existing, incoming) => {
              return incoming
            },
            read: (existing) => {
              return existing
            },
          },
        },
      },
      Species: {
        keyFields: false,
      },
      Planet: {
        keyFields: false,
      },
    },
  }),
})

export default client
