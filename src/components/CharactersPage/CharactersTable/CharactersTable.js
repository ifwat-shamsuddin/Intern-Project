import { useSelector } from "react-redux"
import { isFinite } from "lodash"

import CustomTable from "@/components/CustomTable"
import { StyledTableCell, NoValueCell } from "../../CustomTable/Cells"
import * as characterSelectors from "@/selectors/characterSelectors"
import replaceIfNull from "@/utils/replaceIfNullUtils"

const CharactersTable = ({ onRowClick }) => {
  const characters = useSelector(characterSelectors.characters)

  const columns = [
    {
      header: "Name",
      field: "name",
      cellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Eye Color",
      field: "eyeColor",
      cellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Height",
      field: "height",
      cellRenderer: ({ cellData }) => {
        if (!isFinite(cellData)) return <NoValueCell />
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Gender",
      field: "gender",
      cellRenderer: ({ cellData }) => {
        return <StyledTableCell value={replaceIfNull(cellData)} />
      },
    },
    {
      header: "Birth Year",
      field: "birthYear",
      cellRenderer: ({ cellData }) => {
        return <StyledTableCell value={replaceIfNull(cellData)} />
      },
    },
    {
      header: "Homeworld",
      field: "homeworld.name",
      cellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Species",
      field: "species.name",
      cellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Number of Films",
      field: "filmConnection.totalCount",
      cellRenderer: ({ cellData }) => {
        if (!isFinite(cellData)) return <NoValueCell />
        return <StyledTableCell value={cellData} />
      },
    },
  ]

  return (
    <CustomTable
      columns={columns}
      data={characters}
      onRowClick={onRowClick}
    />
  )
}

export default CharactersTable
