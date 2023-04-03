import { Drawer, makeStyles } from "@material-ui/core"
import AddNewCharacterForm from "../AddNewCharacterForm"

const useStyles = makeStyles((theme) => ({
  paperAnchorRight: {
    backgroundColor: "transparent",
  },
  root: {
    display: "flex",
    fontFamily: theme.typography.fontFamily,
  },
  closeContainer: {
    height: "inherit",
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "small",
    "& div": {
      cursor: "pointer",
      padding: "8px 15px 10px 15px",
      borderRadius: "0 0 0 5px",
      backgroundColor: "#375a57",
      height: "3%",
    },
  },
  form: {
    backgroundColor: theme.palette.common.white,
    height: "100vh",
  },
}))

const RightSideDrawer = ({ open, setOpen }) => {
  const classes = useStyles()

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      classes={{ paperAnchorRight: classes.paperAnchorRight }}
      elevation={0}
    >
      <div className={classes.root}>
        <div
          className={classes.closeContainer}
          onClick={() => setOpen(false)}
        >
          <div>X</div>
        </div>
        <div className={classes.form}>
          <AddNewCharacterForm />
        </div>
      </div>
    </Drawer>
  )
}

export default RightSideDrawer
