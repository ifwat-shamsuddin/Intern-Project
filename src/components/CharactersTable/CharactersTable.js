import { useSelector } from "react-redux"

import CustomTable from "@/components/CustomTable"
import * as characterSelectors from "@/selectors/characterSelectors"

const CharactersTable = ({ onRowClick }) => {
  const characters = useSelector(characterSelectors.characters)

  const columns = [
    { header: "Name", field: "name" },
    { header: "Eye Color", field: "eyeColor" },
    { header: "Height", field: "height" },
    { header: "Gender", field: "gender" },
    { header: "Birth Year", field: "birthYear" },
    { header: "Homeworld", field: "homeworld.name" },
    { header: "Species", field: "species.name" },
    {
      header: "Number of Films",
      field: "filmConnection.totalCount",
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
