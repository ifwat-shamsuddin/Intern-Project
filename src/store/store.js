import { configureStore } from "@reduxjs/toolkit"

import characterReducer from "@/reducers/characterReducer"

export const makeStore = () => {
  return configureStore({
    reducer: {
      character: characterReducer,
    },
  })
}

const store = makeStore()

export default store
