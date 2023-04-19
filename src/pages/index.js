import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

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

  const router = useRouter()
  const { mode } = router.query

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

  const isOpen = mode === "new" || mode === "edit"

  return (
    <div className={classes.body}>
      <RightSideDrawer
        isOpen={isOpen}
        onClose={() => router.push("/")}
      >
        <CharacterForm onClose={() => router.push("/")} />
      </RightSideDrawer>
      <Typography variant="h2">Star Wars</Typography>
      <div className={classes.button}>
        <AddNewButton
          label="Add New Character"
          onClick={() => router.push("/?mode=new", `new`)}
        />
      </div>
      <CustomTable
        columns={columns}
        data={data}
      />
    </div>
  )
}
