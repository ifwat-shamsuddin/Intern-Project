import { Dialog, DialogTitle, makeStyles } from "@material-ui/core"
import WarningRoundedIcon from "@material-ui/icons/WarningRounded"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-paper": {
      margin: 0,
      padding: theme.spacing(4),
      alignItems: "center",
    },
  },
  title: {
    color: theme.palette.error.main,
  },
}))

const AlertModal = ({ isModalOpen, onClose, title = "Warning", children }) => {
  const classes = useStyles()

  return (
    <Dialog
      open={isModalOpen}
      onClose={onClose}
      className={classes.root}
      maxWidth="md"
    >
      <WarningRoundedIcon
        color="error"
        fontSize="large"
      />
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      {children}
    </Dialog>
  )
}

export default AlertModal
