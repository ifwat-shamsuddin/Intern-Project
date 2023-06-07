import { isFinite } from "lodash"
import { useQuery } from "@apollo/client"

import { GET_ALL_CHARACTERS } from "@/graphql/characterQueries"
import CustomTable from "@/components/CustomTable"
import {
  StyledTableCell,
  NoValueCell,
  EditButtonCell,
} from "../../CustomTable/Cells"
import replaceIfNull from "@/utils/replaceIfNullUtils"

const CharactersTable = ({ onRowClick }) => {
  const { error, loading, data } = useQuery(GET_ALL_CHARACTERS, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
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

  return (
    <CustomTable
      columns={columns}
      data={data.allPeople.people}
      onRowClick={onRowClick}
    />
  )
}

export default CharactersTable
