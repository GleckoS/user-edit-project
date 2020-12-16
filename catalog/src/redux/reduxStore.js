import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import LoginReducer from "./usersReducer";

let reducers = combineReducers({
    LoginReducer: LoginReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store