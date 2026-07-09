import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice"
import cartReducer from "../Slices/cartSlice"
import profileReducer from "../Slices/profileSilce"

const rootReducer = combineReducers({
    auth : authReducer,
    cart : cartReducer,
    profile : profileReducer
})

export default rootReducer 