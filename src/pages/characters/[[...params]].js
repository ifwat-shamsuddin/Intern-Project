import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { useEffect, useMemo } from "react"

import CustomTable from "@/components/CustomTable"
import AddNewButton from "@/components/AddNewButton"
import RightSideDrawer from "@/components/RightSideDrawer"
import CharacterForm from "@/components/CharacterForm"
import { formModeEnum } from "@/enums/formModeEnum"
import * as characterSelectors from "@/selectors/characterSelectors"

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

export default function Characters() {
  const classes = useStyles()

  const characters = useSelector(characterSelectors.characters)

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
    return params && Object.values(formModeEnum).includes(params[0])
  }, [params])

  const handleOpenForm = (id) => {
    const params = id ? [formModeEnum.edit, id] : [formModeEnum.new]

    router.push({
      pathname: "/characters/[[...params]]",
      query: { params },
    })
  }

  const handleCloseForm = () => {
    router.push("/characters/[[...params]]")
  }

  useEffect(() => {
    if (!params) return

    if (params.length > 2) {
      handleCloseForm()
    }

    if (params.length > 0 && !Object.values(formModeEnum).includes(params[0])) {
      handleCloseForm()
    }
  }, [params])

  return (
    <div className={classes.body}>
      <RightSideDrawer
        isOpen={isOpen}
        onClose={handleCloseForm}
      >
        <CharacterForm onClose={handleCloseForm} />
      </RightSideDrawer>
      <Typography variant="h2">Star Wars</Typography>
      <div className={classes.button}>
        <AddNewButton
          label="Add New Character"
          onClick={() => handleOpenForm()}
        />
      </div>
      <CustomTable
        columns={columns}
        data={characters}
        onRowClick={({ id }) => handleOpenForm(id)}
      />
    </div>
  )
}
