import { createStore } from "redux"

import characterReducer from "@/reducers/characterReducer"

const store = createStore(characterReducer)

export default store
