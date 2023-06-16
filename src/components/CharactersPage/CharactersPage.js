import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { useLazyQuery } from "@apollo/client"
import { useState } from "react"

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
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [tablePage, setTablePage] = useState(0)
  const classes = useStyles()

  const [
    fetchCharacters,
    { error, loading, called, data, networkStatus, fetchMore },
  ] = useLazyQuery(GET_ALL_CHARACTERS, {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: "true",
    variables: {
      first: rowsPerPage,
    },
  })

  if (error) return <div>{error.message}</div>
  if (called && loading) return <div>loading...</div>
  if (!called) fetchCharacters()

  return (
    <div className={classes.body}>
      <Typography variant="h2">Star Wars</Typography>

      <CharactersTable
        data={data}
        rowsPerPage={rowsPerPage}
        tablePage={tablePage}
        onRowsPerPage={setRowsPerPage}
        onTablePage={setTablePage}
        onRowClick={() => console.log("Table clicked")}
        onFetchMore={fetchMore}
        onFetchCharacters={fetchCharacters}
      />
    </div>
  )
}
