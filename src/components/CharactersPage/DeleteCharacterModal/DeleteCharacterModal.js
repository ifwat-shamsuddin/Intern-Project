import { makeStyles } from "@material-ui/core"
import { useApolloClient } from "@apollo/client"

import AlertModal from "@/components/AlertModal"
import CancelButton from "@/components/Buttons/CancelButton/CancelButton"
import DeleteButton from "@/components/Buttons/DeleteButton/DeleteButton"
import {
  GET_ALL_CHARACTERS,
  GET_CHARACTER,
} from "@/graphql/queries/characterQueries"

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
  const cache = useApolloClient().cache

  const handleOnClick = () => {
    const data = cache.readQuery({
      query: GET_ALL_CHARACTERS,
    })

    const updatedPeople = data.allPeople.people.filter((person) => {
      return person.id !== character.id
    })

    const updatedData = {
      allPeople: {
        ...data.allPeople,
        people: updatedPeople,
      },
    }

    cache.writeQuery({
      query: GET_ALL_CHARACTERS,
      data: updatedData,
    })

    cache.writeQuery({
      query: GET_CHARACTER,
      variables: {
        personId: character.id,
      },
      data: {
        person: null,
      },
    })

    cache.evict({
      id: cache.identify({ __typename: "Person", id: character.id }),
    })

    onClose()
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
