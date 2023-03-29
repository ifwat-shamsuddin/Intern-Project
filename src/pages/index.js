import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import CustomTable from "@/components/CustomTable"
import { useSelector } from "react-redux"

const useStyles = makeStyles((theme) => ({
  body: {
    display: "grid",
    placeItems: "center",
    padding: "25px",
  },
}))

export default function Home() {
  const classes = useStyles()

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

  const data = useSelector((state) => state.characters)

  return (
    <div className={classes.body}>
      <Typography variant="h2">Star Wars</Typography>
      <CustomTable
        columns={columns}
        data={data}
      />
    </div>
  )
}
