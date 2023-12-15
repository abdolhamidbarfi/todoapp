import { createSlice } from "@reduxjs/toolkit";


const LoginToken = createSlice({
    name: 'login-token',
    initialState: {
        token: ""
    },
    reducers : {
        setToken : (state , {payload}) => {
            state.token = payload
        }
    }
})


export const {setToken} = LoginToken.actions

export default LoginToken.reducer