import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import { useEffect, useMemo } from "react"

// import AddNewButton from "@/components/Buttons/AddNewButton"
// import RightSideDrawer from "@/components/RightSideDrawer"
// import CharacterForm from "@/components/CharactersPage/CharacterForm"
// import { formModeEnum } from "@/enums/formModeEnum"
import CharactersTable from "./CharactersTable/CharactersTable"

const useStyles = makeStyles(() => ({
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

export default function CharactersPage() {
  const classes = useStyles()

  // const router = useRouter()
  // const { params } = router.query

  // const isFormOpen = useMemo(() => {
  //   return params && Object.values(formModeEnum).includes(params[0])
  // }, [params])

  // const handleOpenForm = (id) => {
  //   const params = id ? [formModeEnum.edit, id] : [formModeEnum.new]

  //   router.push({
  //     pathname: "/characters/[[...params]]",
  //     query: { params },
  //   })
  // }

  // const handleCloseForm = () => {
  //   router.push("/characters/[[...params]]")
  // }

  // useEffect(() => {
  //   if (!params) return

  //   if (params.length > 2) {
  //     handleCloseForm()
  //   }

  //   if (params.length > 0 && !isFormOpen) {
  //     handleCloseForm()
  //   }
  // }, [params, isFormOpen])

  return (
    <div className={classes.body}>
      {/* <RightSideDrawer
        isOpen={isFormOpen}
        onClose={handleCloseForm}
      >
        <CharacterForm onClose={handleCloseForm} />
      </RightSideDrawer> */}
      <Typography variant="h2">Star Wars</Typography>
      {/* <div className={classes.button}>
        <AddNewButton
          label="Add New Character"
          onClick={() => handleOpenForm()}
        />
      </div> */}
      <CharactersTable onRowClick={() => console.log("Table clicked")} />
    </div>
  )
}
