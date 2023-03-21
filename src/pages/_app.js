import store from "@/containers/store"
import { Provider } from "react-redux"

import theme from "@/styles/theme"
import { ThemeProvider } from "@material-ui/core"

import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}
