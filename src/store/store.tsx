import { configureStore, createSlice } from "@reduxjs/toolkit";
import exp from "constants";
import { useState } from "react";


const userSlice = createSlice({
    name: "user",
    initialState: {id:"" ,userEmail: "",userPhonenumber:"", userPassword: ""},
    reducers: {
        login: (state, action) =>{
            state.id = action.payload.id;
            state.userEmail = action.payload.email;
            state.userPhonenumber = action.payload.phonenumber
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

const addTeammateListSlice = createSlice({
    name: "teammateslist",
    initialState: { id: "", name: "", phonenumber: "" },
    reducers: {
        teamMatesList: (state, action) =>{

            let existTeammate = true;
            const teamMatesList = JSON.parse(localStorage.getItem('teamMatesList') || '[]');
            const userLocalStorage = JSON.parse(localStorage.getItem('users') || '[]')
            userLocalStorage.forEach( (e: any) => {                
                if( e.phonenumber === Number(action.payload.phonenumber) ){
                    existTeammate = false
                    const newTeammate = {
                        id: e.id,
                        name: action.payload.name,
                        phonenumber: e.phonenumber
                    }
                    
                    const updatedTeammateList = [...teamMatesList , newTeammate ]
                    localStorage.setItem('teamMatesList' , JSON.stringify(updatedTeammateList))
                }
            });
            if(existTeammate) alert("کاربری با همچین شماره تلفنی وجود ندارد")
        }
    }
})

console.log(userSlice)
console.log(JSON.stringify(localStorage.getItem))

export const { login } = userSlice.actions;
export const { showAddTaskModal, hideAddTaskModal } = addTaskModalSlice.actions;
export const { showAddteammatemodal, hideAddteammatemodal } = AddteammatemodalSlice.actions;
export const { teamMatesList } = addTeammateListSlice.actions;

export const Store = configureStore({
    reducer: {
        user: userSlice.reducer,
        addTaskModalStatus: addTaskModalSlice.reducer,
        AddteammatemodalStatus: AddteammatemodalSlice.reducer,
        teammateslist: addTeammateListSlice.reducer
    }
})

export type RootState = ReturnType<typeof Store.getState>;
