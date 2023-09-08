import { configureStore, createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {userEmail: "",userPhonenumber:"", userPassword: ""},
    reducers: {
        signin: (state, action) =>{
            state.userEmail = action.payload.email
            state.userPhonenumber = action.payload.phonenumber
            state.userPassword = action.payload.password 
            console.log(state)
        }
    }
})

console.log(userSlice)
console.log(JSON.stringify(localStorage.getItem))

export const { signin } = userSlice.actions

export const Store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})