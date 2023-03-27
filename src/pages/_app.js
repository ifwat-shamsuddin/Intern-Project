import { Provider } from "react-redux"
import { ThemeProvider } from "@material-ui/core"

import store from "@/store/store"
import theme from "@/theme"
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
