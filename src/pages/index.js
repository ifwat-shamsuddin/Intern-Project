import { makeStyles } from "@material-ui/core/styles"

import CustomTable from "@/components/Table"

import columns from "@/enums/columns"
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
