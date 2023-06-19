import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { useLazyQuery } from "@apollo/client"
import { useEffect, useState, useMemo } from "react"

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

  const [fetchCharacters, { error, loading, called, data, fetchMore }] =
    useLazyQuery(GET_ALL_CHARACTERS, {
      fetchPolicy: "network-only",
      notifyOnNetworkStatusChange: true,
    })

  useEffect(() => {
    fetchCharacters({
      variables: {
        first: rowsPerPage,
      },
    })
  }, [])

  const characters = useMemo(() => {
    if (!data) return []
    return data.allPeople.edges.map((edge) => edge.node)
  }, [data])

  const pageInfo = data?.allPeople.pageInfo
  const totalRowsCount = data?.allPeople.totalCount

  if (!called && loading) return <div>loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div className={classes.body}>
      <Typography variant="h2">Star Wars</Typography>

      <CharactersTable
        characters={characters}
        tablePageInfo={pageInfo}
        totalRowsCount={totalRowsCount}
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
