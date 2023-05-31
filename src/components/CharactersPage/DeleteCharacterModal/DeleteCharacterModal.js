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
  body: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h6.fontSize,
    fontFamily: theme.typography.fontFamily,
  },
  button: {
    display: "flex",
    gap: theme.spacing(2),
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
}))

const DeleteCharacterModal = ({ isModalOpen, onClose, character }) => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(deleteCharacter(character.id))
  }

  if (!character) return

  return (
    <AlertModal
      isModalOpen={isModalOpen}
      onClose={onClose}
      title="Confirm delete character?"
    >
      <div className={classes.body}>{character.name}</div>
      <div className={classes.button}>
        <CancelButton onClick={onClose} />
        <DeleteButton onClick={handleOnClick} />
      </div>
    </AlertModal>
  )
}

export default DeleteCharacterModal
