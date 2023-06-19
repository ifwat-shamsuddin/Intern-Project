import { Provider } from "react-redux"
import { ThemeProvider } from "@material-ui/core"
import { ApolloProvider } from "@apollo/client"

import client from "@/graphql/client"
import store from "@/store/store"
import theme from "@/theme"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  )
}
