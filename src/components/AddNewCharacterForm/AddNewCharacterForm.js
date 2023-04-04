import { Button, makeStyles } from "@material-ui/core"
import { useForm } from "react-hook-form"

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
  const { handleSubmit, control, errors } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ControlledTextInputField
        name="name"
        label="Name"
        placeholder="Enter name"
        control={control}
        errors={errors}
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
  )
}

export default AddNewCharacterForm
