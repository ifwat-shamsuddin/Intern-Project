import { configureStore } from "@reduxjs/toolkit"

import dataReducer from "@/reducers/dataSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      data: dataReducer,
    },
  })
}

const store = makeStore()

export default store
