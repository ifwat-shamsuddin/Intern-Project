import { Button, Container, Grid, makeStyles } from "@material-ui/core"
import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addCharacter, editCharacter } from "@/actions/characterActions"
import { useRouter } from "next/router"

import { genderEnum } from "@/enums/genderEnum"
import { speciesEnum } from "@/enums/speciesEnum"
import { formModeEnum } from "@/enums/formModeEnum"
import * as characterSelectors from "@/selectors/characterSelectors"
import {
  ControlledTextInputField,
  ControlledNumberInputField,
  ControlledSelectInputField,
} from "@/components/ControlledInputFields"
import * as formValidationUtils from "@/utils/formValidationUtils"

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

  const character = useSelector(
    characterSelectors.character(params ? params[1] : null)
  )

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
    if (!character) return

    const {
      name,
      eyeColor,
      height,
      gender,
      birthYear,
      homeworld,
      species,
      filmConnection,
    } = character
    reset({
      name: name || "",
      eyeColor: eyeColor || "",
      height: height || "",
      gender:
        gender !== "n/a"
          ? {
              value: gender,
              label: gender,
            }
          : null,
      birthYear: birthYear !== "unknown" ? birthYear : "",
      homeworld: homeworld?.name || "",
      species: species?.name
        ? {
            value: species.name,
            label: species.name,
          }
        : null,
      numberOfFilms: filmConnection?.totalCount || "",
    })
  }, [character])

  const dispatch = useDispatch()

  const getCharacterData = ({
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

    return isEdit
      ? {
          id: character.id,
          homeworld: {
            name: homeworld,
          },
          species: {
            name: species?.value,
          },
          ...commonAttributes,
        }
      : {
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
        }
  }

  const onSubmit = (character) => {
    const compiledCharacterData = getCharacterData(character)
    dispatch(
      isEdit
        ? editCharacter(compiledCharacterData)
        : addCharacter(compiledCharacterData)
    )
    onClose()
  }

  const submit = handleSubmit(onSubmit, (errors) => {
    setErrors(errors)
  })

  const validateNameMinLength = (value) => {
    if (value.length < 3)
      return "This field should contain at least 3 characters"
    return true
  }

  const validateNamePattern = (value) => {
    const namePatternRegex = /^(?=(\s*\S){3})\s*[^\s].*$/
    if (!namePatternRegex.test(value))
      return "There should be at least 3 non-space characters!"

    return true
  }

  const handleHeightValidation = (value) => {
    if (value === "") return true

    return formValidationUtils.validateNumberWithinRange({
      min: 1,
      max: 300,
      value,
      errorReturn: "The height should range from 1 - 300",
    })
  }

  const handleNumberOfFilmValidation = (value) => {
    return formValidationUtils.validateNumberWithinRange({
      min: 1,
      value,
      errorReturn: "The minimum is 1",
    })
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
              customValidationFunctions={{
                validateNameMinLength,
                validateNamePattern,
              }}
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
              customValidationFunctions={{ handleHeightValidation }}
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
              customValidationFunctions={{ handleNumberOfFilmValidation }}
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
