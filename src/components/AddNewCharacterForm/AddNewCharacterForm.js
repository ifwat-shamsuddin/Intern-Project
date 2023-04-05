import { Button, makeStyles } from "@material-ui/core"
import { FormProvider, useForm } from "react-hook-form"
import { useState, useCallback } from "react"

import ControlledTextInputField from "../ControlledTextInputField"
import NumberInputField from "../NumberInputField"
import SelectInputField from "../SelectInputField"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
}))

const AddNewCharacterForm = () => {
  const classes = useStyles()
  const methods = useForm()

  const onSubmit = (data, e) => console.log(data, e)
  const onError = (errors, e) => console.log(errors, e)

  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  return (
    <div>
      <FormProvider {...methods}>
        <form
          className={classes.root}
          onSubmit={methods.handleSubmit(onSubmit, onError)}
        >
          <ControlledTextInputField
            name="name"
            label="Name"
            placeholder="Enter name"
            rules={{
              required: "Please enter a name",
              minLength: {
                value: 3,
                message: "Name should be at least 3 characters",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </FormProvider>
      <button onClick={forceUpdate}>Force re-render</button>
    </div>
  )
}

export default AddNewCharacterForm
