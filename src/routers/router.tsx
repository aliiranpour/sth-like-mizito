import { Routes, Route } from "react-router-dom"
import Login from "../pages/Log in/Login"
import Signin from "../pages/Signin/Signin"
import Sharedlayout from "../layout/Sharedlayout"
import Tasks from "../pages/Tasks/Tasks"
import Taskstypes from "../pages/Taskstypes/Taskstypes"
import Notes from "../pages/Notes/Notes"
import { Provider } from "react-redux"
import { Store } from "../store/store"


const Webroutes = () =>{
    return(
        <Provider store={ Store }>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/home" element={<Sharedlayout />}>
                    <Route index element={<Tasks />} />
                    <Route path="/home/tasks type" element={<Taskstypes />} />
                    <Route path="/home/notes" element={<Notes />} />
                </Route>
            </Routes>
        </Provider>
    )
}

export default Webroutes;