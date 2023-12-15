import { createSlice } from "@reduxjs/toolkit";


const initialState : any = {
    show : false
}

const SideBar = createSlice({
    name: 'sidebar',
    initialState,
    reducers : {
        setShow : (state , {payload}) => {
           state.show = payload
        }
    }
})


export const {setShow} = SideBar.actions

export default SideBar.reducer