import { Button, Container, Grid, makeStyles } from "@material-ui/core"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addCharacter } from "@/reducers/characterReducer"
import { useRouter } from "next/router"

import { genderEnum } from "@/enums/genderEnum"
import { speciesEnum } from "@/enums/speciesEnum"
import { wordsToRemoveEnum } from "@/enums/wordsToRemoveEnum"
import ControlledTextInputField from "../ControlledTextInputField"
import ControlledNumberInputField from "../ControlledNumberInputField/ControlledNumberInputField"
import ControlledSelectInputField from "../ControlledSelectInputField/ControlledSelectInputField"
import { getCharacterById } from "@/selectors/characterSelectors"

const useStyles = makeStyles((theme) => ({
  title: {
    borderBottom: `1px solid ${theme.palette.grey[800]}`,
    padding: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },

  body: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    width: "92%",
    height: "78%",
    overflow: "auto",
  },

  buttonBox: {
    display: "flex",
    gap: theme.spacing(2),
    position: "absolute",
    bottom: 0,
    padding: theme.spacing(2),
    "& > *": {
      color: theme.palette.common.white,
    },
    "& > :first-child": {
      backgroundColor: theme.palette.button.main,
    },
    "& > :last-child": {
      backgroundColor: theme.palette.grey[400],
    },
  },
}))

const CharacterForm = ({ onClose }) => {
  const classes = useStyles()
  const [errors, setErrors] = useState({})

  const router = useRouter()
  const { mode, id } = router.query

  const character = useSelector((state) => getCharacterById(state, id))

  const defaultValues = {
    name: character?.name || "",
    eyeColor: character?.eyeColor || "",
    height: character?.height || "",
    gender:
      character && !wordsToRemoveEnum.words.includes(character.gender)
        ? {
            value: character.gender,
            label: character.gender,
          }
        : null,
    birthYear:
      character && !wordsToRemoveEnum.words.includes(character.birthYear)
        ? character.birthYear
        : "",
    homeworld: character?.homeworld?.name || "",
    species:
      character && character.species
        ? {
            value: character.species.name,
            label: character.species.name,
          }
        : null,
    numberOfFilms: character?.filmConnection?.totalCount || "",
  }

  const { control, handleSubmit } = useForm({
    defaultValues,
    reValidateMode: "onSubmit",
  })

  const dispatch = useDispatch()

  const onSubmit = ({
    name,
    eyeColor,
    height,
    gender,
    birthYear,
    homeworld,
    species,
    numberOfFilms,
  }) => {
    dispatch(
      addCharacter({
        id: nanoid(),
        name,
        eyeColor,
        height,
        gender: gender?.value,
        birthYear,
        homeworld: {
          id: nanoid(),
          name: homeworld,
        },
        species: {
          id: nanoid(),
          name: species?.value,
        },
        filmConnection: {
          totalCount: numberOfFilms,
        },
      })
    )
    onClose()
  }

  const submit = handleSubmit(onSubmit, (errors) => {
    setErrors(errors)
  })

  const rules = {
    name: {
      minLength: {
        value: 3,
        message: "This field should contain at least 3 characters",
      },
      pattern: {
        value: /^(?=(\s*\S){3})\s*[^\s].*$/,
        message: "There should be at least 3 non-space characters!",
      },
    },
    height: {
      min: {
        value: 1,
        message: "The height should range from 1 - 300",
      },
      max: {
        value: 300,
        message: "The height should range from 1 - 300",
      },
    },
    numberOfFilms: {
      min: {
        value: 1,
        message: "The minimum value is 1",
      },
    },
  }

  return (
    <>
      <Container
        className={classes.title}
        color="text.disabled"
      >
        {mode === "new"
          ? "Add New Character"
          : `Edit Character - ${character?.name}`}
      </Container>
      <div className={classes.body}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs
          >
            <ControlledTextInputField
              control={control}
              name="name"
              label="Name"
              placeholder="Enter name"
              rules={rules.name}
              error={errors.name}
              required
            />
          </Grid>
          <Grid
            item
            xs
          >
            <ControlledTextInputField
              control={control}
              name="eyeColor"
              label="Eye Color"
              placeholder="Enter eye color"
              rules={rules.eyeColor}
              error={errors.eyeColor}
              required
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs
          >
            <ControlledNumberInputField
              control={control}
              name="height"
              label="Height"
              placeholder="Enter height"
              type="number"
              rules={rules.height}
              error={errors.height}
            />
          </Grid>
          <Grid
            item
            xs
          >
            <ControlledSelectInputField
              control={control}
              name="gender"
              label="Gender"
              placeholder="Select gender"
              options={[
                { value: genderEnum.male, label: "Male" },
                { value: genderEnum.female, label: "Female" },
              ]}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs
          >
            <ControlledTextInputField
              control={control}
              name="birthYear"
              label="Birth Year"
              placeholder="Enter birth year"
            />
          </Grid>
          <Grid
            item
            xs
          >
            <ControlledTextInputField
              control={control}
              name="homeworld"
              label="HomeWorld"
              placeholder="Enter homeworld"
              rules={rules.homeworld}
              error={errors.homeworld}
              required
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs
          >
            <ControlledSelectInputField
              control={control}
              name="species"
              label="Species"
              placeholder="Select species"
              options={[
                { value: speciesEnum.droid, label: "Droid" },
                { value: speciesEnum.human, label: "Human" },
              ]}
            />
          </Grid>
          <Grid
            item
            xs
          >
            <ControlledNumberInputField
              control={control}
              name="numberOfFilms"
              label="Number Of Films"
              placeholder="Enter number of films appeared"
              type="number"
              rules={rules.numberOfFilms}
              error={errors.numberOfFilms}
              required
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.buttonBox}>
        <Button
          variant="contained"
          onClick={submit}
          size="large"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          size="large"
        >
          Cancel
        </Button>
      </div>
    </>
  )
}

export default CharacterForm
