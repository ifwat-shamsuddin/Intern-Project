import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { find } from "lodash"

import CustomTable from "@/components/CustomTable"
import AddNewButton from "@/components/AddNewButton"
import RightSideDrawer from "@/components/RightSideDrawer"
import CharacterForm from "@/components/CharacterForm"
import { formModeEnum } from "@/enums/formModeEnum"
import { charactersSelectors } from "@/selectors/characterSelectors"
import { useMemo } from "react"

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

  const characters = useSelector(charactersSelectors)

  const router = useRouter()
  const { params } = router.query

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

  const isOpen = useMemo(() => {
    return params && !!find(formModeEnum, (value) => value.includes(params[0]))
      ? true
      : false
  }, [params])

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
          onClick={() =>
            router.push({
              pathname: "/characters",
              query: { params: ["new"] },
            })
          }
        />
      </div>
      <CustomTable
        columns={columns}
        data={characters}
      />
    </div>
  )
}
