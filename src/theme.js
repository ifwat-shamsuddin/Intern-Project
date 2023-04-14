import { unstable_createMuiStrictModeTheme as createTheme } from "@material-ui/core/styles"
// Changes import because of a findDOMnode error upon opening Drawer
// Might need to find other solution because this method should not be used in production

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      dark: "#dddce5",
    },
    primary: {
      light: "#f1f3f5",
      main: "#f5f7f8",
      dark: "#f0f3f7",
      contrastText: "#000",
    },
    secondary: {
      light: "#d7dfe7",
      main: "#d7dfe7",
      dark: "#7e7e7e",
      contrastText: "#fff",
    },
    button: {
      light: "#aecdff",
      main: "#0999e2",
      dark: "#0676af",
    },
  },
})

export default theme
