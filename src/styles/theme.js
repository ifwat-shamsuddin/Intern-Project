import { createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#dddce5",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#fff",
		},
	},
	table: {
		header: {
			bgColor: "#f1f3f5",
			textColor: "#7e7e7e",
			fontWeight: "bold",
		},
		row: {
			bottomBorder: "#f0f3f7",
			hoverBgColor: "#f5f7f8",
			primaryColor: "#d7dfe7",
		},
	},
})

export default theme
