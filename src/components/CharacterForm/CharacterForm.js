import { Button, Container, Grid, makeStyles } from "@material-ui/core"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addCharacter } from "@/reducers/characterReducer"

import { requiredEnum } from "@/enums/requiredEnum"
import { genderEnum } from "@/enums/genderEnum"
import { speciesEnum } from "@/enums/speciesEnum"
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

const CharacterForm = ({ setOpen }) => {
  const classes = useStyles()
  const [errors, setErrors] = useState({})

  const { control, handleSubmit } = useForm({
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
  }

  const submit = handleSubmit(onSubmit, (errors) => {
    setErrors(errors)
  })

  const rules = {
    name: {
      ...requiredEnum,
      minLength: {
        value: 3,
        message: "This field should contain at least 3 characters",
      },
      pattern: {
        value: /^[^\s]{3}.*/,
        message: "The first 3 characters shouldn't be space!",
      },
    },
    eyeColor: {
      ...requiredEnum,
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
    homeworld: {
      ...requiredEnum,
    },
    numberOfFilms: {
      ...requiredEnum,
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
        Add New Character
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
              errors={errors}
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
              errors={errors}
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
              errors={errors}
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
              errors={errors}
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
              errors={errors}
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
          onClick={() => setOpen(false)}
          size="large"
        >
          Cancel
        </Button>
      </div>
    </>
  )
}

export default CharacterForm
