import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { useSelector } from "react-redux"
import { useState } from "react"

import CustomTable from "@/components/CustomTable"
import AddNewButton from "@/components/AddNewButton"
import RightSideDrawer from "@/components/RightSideDrawer"
import CharacterForm from "@/components/CharacterForm"
import { characters } from "@/selectors/characterSelectors"

const useStyles = makeStyles((theme) => ({
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

export default function Home() {
  const classes = useStyles()

  const data = useSelector(characters)
  const [open, setOpen] = useState(false)

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
    <div className={classes.body}>
      <RightSideDrawer
        open={open}
        setOpen={setOpen}
        Component={CharacterForm}
      />
      <Typography variant="h2">Star Wars</Typography>
      <div className={classes.button}>
        <AddNewButton
          label="Add New Character"
          onClick={() => setOpen(true)}
        />
      </div>
      <CustomTable
        columns={columns}
        data={data}
      />
    </div>
  )
}
