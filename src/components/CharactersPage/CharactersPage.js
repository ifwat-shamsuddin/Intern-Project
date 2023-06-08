import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

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

  return (
    <div className={classes.body}>
      <Typography variant="h2">Star Wars</Typography>

      <CharactersTable onRowClick={() => console.log("Table clicked")} />
    </div>
  )
}
