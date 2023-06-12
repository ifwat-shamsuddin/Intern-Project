import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { useQuery } from "@apollo/client"

import { GET_ALL_CHARACTERS } from "@/graphql/queries/characterQueries"
import CharactersTable from "./CharactersTable/CharactersTable"

const useStyles = makeStyles(() => ({
  body: {
    display: "grid",
    placeItems: "center",
    gap: "10px",
    padding: "25px",
  },
  button: {
    placeSelf: "end",
  },
}))

export default function CharactersPage() {
  const classes = useStyles()

  const { error, loading, data, fetchMore } = useQuery(GET_ALL_CHARACTERS, {
    fetchPolicy: "network-only",
    variables: {
      first: 10,
    },
  })

  if (error) return <div>{error.message}</div>
  if (loading) return <div>loading...</div>

  return (
    <div className={classes.body}>
      <Typography variant="h2">Star Wars</Typography>

      <CharactersTable
        onRowClick={() => console.log("Table clicked")}
        data={data}
        fetchMore={fetchMore}
      />
    </div>
  )
}
