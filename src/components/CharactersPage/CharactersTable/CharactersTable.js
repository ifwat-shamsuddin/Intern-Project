import { isFinite } from "lodash"
import { useQuery } from "@apollo/client"
import { useState } from "react"

import { GET_ALL_CHARACTERS } from "@/graphql/characterQueries"
import CustomTable from "@/components/CustomTable"
import {
  StyledTableCell,
  NoValueCell,
  EditButtonCell,
} from "../../CustomTable/Cells"
import replaceIfNull from "@/utils/replaceIfNullUtils"

const CharactersTable = ({ onRowClick }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const { error, loading, data, fetchMore } = useQuery(GET_ALL_CHARACTERS, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: {
      first: rowsPerPage,
    },
  })

  const columns = [
    {
      header: "Name",
      field: "name",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Eye Color",
      field: "eyeColor",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Height",
      field: "height",
      CellRenderer: ({ cellData }) => {
        if (!isFinite(cellData)) return <NoValueCell />
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Gender",
      field: "gender",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={replaceIfNull(cellData)} />
      },
    },
    {
      header: "Birth Year",
      field: "birthYear",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={replaceIfNull(cellData)} />
      },
    },
    {
      header: "Homeworld",
      field: "homeworld.name",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Species",
      field: "species.name",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Number of Films",
      field: "filmConnection.totalCount",
      CellRenderer: ({ cellData }) => {
        if (!isFinite(cellData)) return <NoValueCell />
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: " ",
      field: null,
      CellRenderer: () => {
        return (
          <EditButtonCell
            tooltipTitle={"Edit Character"}
            onClick={onRowClick}
          />
        )
      },
    },
  ]

  if (error) console.error(error.message)
  if (loading) return <div>loading...</div>

  const rows = data.allPeople.edges.map((edge) => edge.node)
  const pageInfo = data.allPeople.pageInfo

  const handleFetchMore = () => {
    if (pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          cursor: pageInfo.endCursor,
        },
      })
    }
  }

  return (
    <CustomTable
      columns={columns}
      data={rows}
      totalRowsCount={data.allPeople.totalCount}
      onRowClick={onRowClick}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
      rowsPerPageOptions={[5, 10, 15, 25]}
      handleFetchMore={handleFetchMore}
    />
  )
}

export default CharactersTable
