import { Button, Container, Grid, makeStyles } from "@material-ui/core"
import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addCharacter, editCharacter } from "@/reducers/characterReducer"
import { useRouter } from "next/router"

import { genderEnum } from "@/enums/genderEnum"
import { speciesEnum } from "@/enums/speciesEnum"
import { formModeEnum } from "@/enums/formModeEnum"
import { getCharacterById } from "@/selectors/characterSelectors"
import ControlledTextInputField from "../ControlledTextInputField"
import ControlledNumberInputField from "../ControlledNumberInputField/ControlledNumberInputField"
import ControlledSelectInputField from "../ControlledSelectInputField/ControlledSelectInputField"

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
  const router = useRouter()
  const [errors, setErrors] = useState({})
  const { params } = router.query

  const isEdit = useMemo(() => {
    return params && params[0] === formModeEnum.edit
  }, [params])

  const character = useSelector(getCharacterById(params ? params[1] : null))

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      eyeColor: "",
      height: "",
      gender: null,
      birthYear: "",
      homeworld: "",
      species: null,
      numberOfFilms: "",
    },
    reValidateMode: "onSubmit",
  })

  useEffect(() => {
    reset({
      name: character?.name || "",
      eyeColor: character?.eyeColor || "",
      height: character?.height || "",
      gender:
        character && character.gender !== "n/a"
          ? {
              value: character.gender,
              label: character.gender,
            }
          : null,
      birthYear:
        character && character.birthYear !== "unknown"
          ? character.birthYear
          : "",
      homeworld: character?.homeworld?.name || "",
      species:
        character && character.species?.name
          ? {
              value: character.species.name,
              label: character.species.name,
            }
          : null,
      numberOfFilms: character?.filmConnection?.totalCount || "",
    })
  }, [character])

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
    const commonAttributes = {
      name,
      eyeColor,
      height,
      gender: gender?.value,
      birthYear,
      filmConnection: {
        totalCount: numberOfFilms,
      },
    }

    dispatch(
      isEdit
        ? editCharacter({
            id: character.id,
            homeworld: {
              name: homeworld,
            },
            species: {
              name: species?.value,
            },
            ...commonAttributes,
          })
        : addCharacter({
            id: nanoid(),
            homeworld: {
              id: nanoid(),
              name: homeworld,
            },
            species: {
              id: nanoid(),
              name: species?.value,
            },
            ...commonAttributes,
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
        {isEdit ? `Edit Character - ${character.name}` : "Add New Character"}
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
