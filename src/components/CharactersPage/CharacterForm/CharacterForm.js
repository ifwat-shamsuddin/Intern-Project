import { Box, Grid, makeStyles } from "@material-ui/core"
import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { useApolloClient, useLazyQuery } from "@apollo/client"

import { GET_A_CHARACTER } from "@/graphql/queries/characterQueries"
import { GET_ALL_SPECIES } from "@/graphql/queries/speciesQueries"
import { genderEnum } from "@/enums/genderEnum"
import { formModeEnum } from "@/enums/formModeEnum"
import {
  ControlledTextInputField,
  ControlledNumberInputField,
  ControlledSelectInputField,
} from "@/components/ControlledInputFields"
import * as formValidationUtils from "@/utils/formValidationUtils"
import {
  prepareCharacterForFormReset,
  prepareEditCharacterData,
  prepareSpeciesOptions,
} from "@/utils/CharactersPageUtils"
import ConfirmButton from "@/components/Buttons/ConfirmButton"
import CancelButton from "@/components/Buttons/CancelButton"
import DeleteButton from "@/components/Buttons/DeleteButton"
import DeleteCharacterModal from "../DeleteCharacterModal"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    justifyContent: "center",
    height: "100%",
  },
  formHeader: {
    borderBottom: `1px solid ${theme.palette.grey[800]}`,
    padding: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
  formBody: {
    flexGrow: 1,
    padding: "15px",
    overflow: "auto",
  },
  formFooter: {
    display: "flex",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  },
}))

const CharacterForm = ({ onClose }) => {
  const classes = useStyles()
  const router = useRouter()
  const client = useApolloClient()
  const [errors, setErrors] = useState({})
  const [deleteCharacterModalOpen, setDeleteCharacterModalOpen] =
    useState(false)
  const { params = [] } = router.query

  const isEdit = useMemo(() => {
    return params[0] === formModeEnum.edit
  }, [params])

  const characterCacheId = client.cache.identify({
    __typename: "Person",
    id: params[1],
  })

  const character = client.readFragment({
    id: characterCacheId,
    fragment: GET_A_CHARACTER,
  })

  const [fetchSpecies, { loading, data: speciesOptions }] =
    useLazyQuery(GET_ALL_SPECIES)

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
    reset(prepareCharacterForFormReset(character))
  }, [character])

  useEffect(() => {
    if (isEdit && !character) {
      router.push({
        pathname: "/characters/[[...params]]",
        query: undefined,
      })
    }
  }, [isEdit, character])

  const onSubmit = (formData) => {
    client.writeFragment({
      id: characterCacheId,
      fragment: GET_A_CHARACTER,
      data: prepareEditCharacterData({ formData, character }),
    })
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

  const handleOpenDeleteCharacterModal = () => {
    setDeleteCharacterModalOpen(true)
  }

  const handleCloseDeleteCharacterModal = () => {
    setDeleteCharacterModalOpen(false)
  }

  return (
    <>
      <DeleteCharacterModal
        isModalOpen={deleteCharacterModalOpen}
        onClose={handleCloseDeleteCharacterModal}
        character={character}
      />

      <Box className={classes.root}>
        <Box
          className={classes.formHeader}
          color="text.disabled"
        >
          {`Edit Character - ${character?.name}`}
        </Box>
        <Box className={classes.formBody}>
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
                options={prepareSpeciesOptions({ speciesOptions })}
                isLoading={loading}
                isSearchable
                onMenuOpen={fetchSpecies}
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
        </Box>
        <Box className={classes.formFooter}>
          <ConfirmButton
            label="Save"
            onClick={submit}
          />
          <CancelButton onClick={onClose} />
          {isEdit && (
            <div style={{ marginLeft: "auto" }}>
              <DeleteButton
                label="Delete Character"
                onClick={handleOpenDeleteCharacterModal}
              />
            </div>
          )}
        </Box>
      </Box>
    </>
  )
}

export default CharacterForm
