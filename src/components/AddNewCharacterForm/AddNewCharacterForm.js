import { makeStyles } from "@material-ui/core"

import TextInputField from "../TextInputField"
import NumberInputField from "../NumberInputField"
import SelectInputField from "../SelectInputField"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
  },
}))

const AddNewCharacterForm = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TextInputField
        id="name"
        label="Name"
        required
        placeholder="Enter name"
        errorMsg={"Error message here"}
      />
      <NumberInputField
        id="age"
        label="Age"
        required
        placeholder="Enter age"
        error
        errorMsg="Invalid age"
      />
      <SelectInputField
        id="gender"
        label="Gender"
        required
        placeholder="Select gender"
        errorMsg="Please select a gender"
        options={["Male", "Female"]}
      />
    </div>
  )
}

export default AddNewCharacterForm
