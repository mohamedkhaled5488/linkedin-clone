import {  combineReducers } from "redux";
import userReducer from "./reduces";



const rootReducer = combineReducers({
    userstate:userReducer,
})
export default rootReducer;