import { createSlice } from "@reduxjs/toolkit"


const initialstate = {
    user : null
}

const profileSlice = createSlice({
    name : "profile",
    initialState : initialstate,
    reducers : {
        setUser(state,value){
            state.user = value.payload
        }
    }
})

export const {setUser} = profileSlice.actions
export default profileSlice.reducer