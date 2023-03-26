const columns = [
  { header: "Name", field: "name" },
  { header: "Eye Color", field: "eyeColor" },
  { header: "Height", field: "height" },
  { header: "Gender", field: "gender" },
  { header: "Birth Year", field: "birthYear" },
  { header: "Homeworld", field: "name", nestedKey: "homeworld" },
  { header: "Species", field: "name", nestedKey: "species" },
  {
    header: "Number of Films",
    field: "totalCount",
    nestedKey: "filmConnection",
  },
]

export default columns
