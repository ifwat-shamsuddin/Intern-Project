import { configureStore } from "@reduxjs/toolkit"

// Created dummy reducer to remove the error below
//
// Store does not have a valid reducer.
//
// Make sure to remove this reducer when have a proper one
const dummyReducer = (state = {}) => {
  return state
}

export const makeStore = () => {
  return configureStore({
    reducer: { dummyReducer },
  })
}

const store = makeStore()

export default store
