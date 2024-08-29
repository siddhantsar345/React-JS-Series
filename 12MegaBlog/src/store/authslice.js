import {createSlice} from '@reduxjs/toolkit'

const initalState={
    status:false,
    userData:null
}

const authslice= createSlice({
    name:"auth",
    initalState,
    reducer:{
        login:(state, action) =>{
            state.status= true;
            state.userData=action.payload.userData
        },
        logout:(state) =>{
            state.status = false;
            state.userData= null;
        }
    }
});

export const {login, logout} =authslice.actions

export default authslice.reducer;

