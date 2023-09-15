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

const addTaskModalSlice = createSlice({
    name: "addTaskModalStatus",
    initialState: {show : false},
    reducers: {
        showAddTaskModal: (state) =>{
            state.show = true
        },
        hideAddTaskModal: (state) =>{
            state.show = false
        }
    }
})

const AddteammatemodalSlice = createSlice({
    name: "AddteammatemodalStatus",
    initialState: {show : false},
    reducers: {
        showAddteammatemodal: (state) =>{
            state.show = true
        },
        hideAddteammatemodal: (state) =>{
            state.show = false
        }
    }
})

console.log(userSlice)
console.log(JSON.stringify(localStorage.getItem))

export const { signin } = userSlice.actions;
export const { showAddTaskModal, hideAddTaskModal } = addTaskModalSlice.actions;
export const { showAddteammatemodal, hideAddteammatemodal } = AddteammatemodalSlice.actions;

export const Store = configureStore({
    reducer: {
        user: userSlice.reducer,
        addTaskModalStatus: addTaskModalSlice.reducer,
        AddteammatemodalStatus: AddteammatemodalSlice.reducer
    }
})

export type RootState = ReturnType<typeof Store.getState>;
