import { configureStore } from "@reduxjs/toolkit"

import charactersReducer from "@/reducers/charactersSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      characters: charactersReducer,
    },
  })
}

const store = makeStore()

export default store
