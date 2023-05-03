import { Drawer, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  paperAnchorRight: {
    backgroundColor: "transparent",
  },
  root: {
    display: "flex",
    fontFamily: theme.typography.fontFamily,
    height: "100%",
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
      backgroundColor: theme.palette.button.dark,
      height: "3%",
    },
  },
  form: {
    backgroundColor: theme.palette.common.white,
  },
}))

const RightSideDrawer = ({ isOpen, onClose, children }) => {
  const classes = useStyles()

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      classes={{ paperAnchorRight: classes.paperAnchorRight }}
      elevation={0}
    >
      <div className={classes.root}>
        <div
          className={classes.closeContainer}
          onClick={onClose}
        >
          <div>X</div>
        </div>
        <div className={classes.form}>{children}</div>
      </div>
    </Drawer>
  )
}

export default RightSideDrawer
