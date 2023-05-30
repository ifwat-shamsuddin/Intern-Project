import {
  DialogActions,
  DialogContent,
  Typography,
  makeStyles,
} from "@material-ui/core"
import { useDispatch } from "react-redux"

import AlertModal from "@/components/AlertModal"
import CancelButton from "@/components/Buttons/CancelButton/CancelButton"
import DeleteButton from "@/components/Buttons/DeleteButton/DeleteButton"
import { deleteCharacter } from "@/actions/characterActions"

const useStyles = makeStyles((theme) => ({
  button: {
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    width: "90%",
    justifyContent: "center",
    "& > *": {
      color: theme.palette.common.white,
    },
  },
}))

const DeleteCharacterModal = ({ isModalOpen, onClose, character }) => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(deleteCharacter(character))
  }

  if (!character) return

  return (
    <AlertModal
      isModalOpen={isModalOpen}
      onClose={onClose}
      title="Confirm delete character?"
    >
      <DialogContent>
        <Typography variant="h6">{character.name}</Typography>
      </DialogContent>
      <DialogActions className={classes.button}>
        <CancelButton onClick={onClose} />
        <DeleteButton onClick={handleOnClick} />
      </DialogActions>
    </AlertModal>
  )
}

export default DeleteCharacterModal
