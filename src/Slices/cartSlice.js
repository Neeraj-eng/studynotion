import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totaliteams : null
}

const cartSlice = createSlice({
    name : "cart",
    initialState : initialState,
    reducers : {
        setTotaliteams : (state,value) => {
            state.totaliteams = value.payload
        }
    }
})

export const {setTotaliteams} = cartSlice.actions
export default cartSlice.reducer