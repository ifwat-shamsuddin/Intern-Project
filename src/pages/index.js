import { makeStyles } from "@material-ui/core/styles"

import CustomTable from "@/components/CustomTable"
import data from "public/data.json"

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.common.dark,
    padding: "8px",
  },
  body: {
    display: "grid",
    placeItems: "center",
    backgroundColor: theme.palette.common.black,
    height: "100vh",
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

  return (
    <>
      <div className={classes.body}>
        <div className={classes.title}>
          <h1>Star Wars</h1>
        </div>
        <div>
          <CustomTable
            columns={columns}
            data={data}
          />
        </div>
      </div>
    </>
  )
}
