import { configureStore, createSlice } from "@reduxjs/toolkit";
import exp from "constants";
import { useState } from "react";
import AddGroup from '../modals/addgroup/addGroupModal';


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

const AddGroupSlice = createSlice({
    name: "AddGroup",
    initialState: {show : false},
    reducers: {
        showAddgroup: (state) =>{
            state.show = true
        },
        hideAddgroup: (state) =>{
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

const addTaskSlice = createSlice({
    name: "addTask",
    initialState:{ taskId: "", ownId: "" , title: "", description: "", group: "", deadLine: "", workers: [] },
    reducers: {
        addTask: (state, action) =>{

            const tasksList = JSON.parse(localStorage.getItem('tasksList') || '[]')

            state.taskId = action.payload.id;
            state.ownId = action.payload.ownId
            state.title = action.payload.title;
            state.group = action.payload.group;
            state.deadLine = action.payload.deadLine;
            state.workers = action.payload.workers;
            state.description = action.payload.desc;
            
            const newTask = {
                taskId: state.taskId,
                ownId: state.ownId,
                title: state.title,
                group: state.group,
                deadLine: state.deadLine,
                workers: state.workers,
                desc: state.description
            }

            const updateTaskList = [...tasksList , newTask];
            localStorage.setItem('tasksList' , JSON.stringify(updateTaskList))

        }
    }
})


export const { login } = userSlice.actions;
export const { showAddTaskModal, hideAddTaskModal } = addTaskModalSlice.actions;
export const { showAddteammatemodal, hideAddteammatemodal } = AddteammatemodalSlice.actions;
export const { teamMatesList } = addTeammateListSlice.actions;
export const { addTask } = addTaskSlice.actions;
export const { showAddgroup, hideAddgroup } = AddGroupSlice.actions;

export const Store = configureStore({
    reducer: {
        user: userSlice.reducer,
        addTaskModalStatus: addTaskModalSlice.reducer,
        AddteammatemodalStatus: AddteammatemodalSlice.reducer,
        teammateslist: addTeammateListSlice.reducer,
        AddGroup: AddGroupSlice.reducer
    }
})

export type RootState = ReturnType<typeof Store.getState>;
