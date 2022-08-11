import {legacy_createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import { reducer as appreducer } from "./reducer"
import { reducer as authreducer } from "./auth/reducer"


const rootreducer = combineReducers({appreducer,authreducer})
const store = legacy_createStore(rootreducer,applyMiddleware(thunk))

export {store}