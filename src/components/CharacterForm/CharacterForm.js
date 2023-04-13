import { Button, Container, Grid, makeStyles } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addCharacter } from "@/reducers/characterReducer"

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
    if (!name || !eyeColor) return

    dispatch(
      addCharacter({
        id: nanoid(),
        name,
        eyeColor,
        height,
        gender: gender.value,
        birthYear,
        homeworld: {
          id: nanoid(),
          name: homeworld,
        },
        species: {
          id: nanoid(),
          name: species.value,
        },
        filmConnection: {
          totalCount: numberOfFilms,
        },
      })
    )
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
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.buttonBox}>
        <Button
          variant="contained"
          onClick={handleSubmit(onSubmit)}
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
