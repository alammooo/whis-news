import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux"
import thunk from "redux-thunk"
import { baseUrl, newsReducer } from "./reducers/rootReducer"

const combined = combineReducers({ baseUrl, newsReducer })
const store = createStore(combined, applyMiddleware(thunk))

export default store
