import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {CountryReducer} from "./CountryReducer";


const rootReducer = combineReducers({
    country: CountryReducer

})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store
