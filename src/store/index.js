import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

let authstate = {
    IsAuthenticated: false
}
let modelstate = {
    showmodel: false
}
let contactstate = {
    show: false
}
let modelslice = createSlice({
    name: 'model',
    initialState: modelstate,
    reducers: {
        show(state) { state.showmodel = true },
        Dontshow(state) { state.showmodel = false }
    }
})
let contactslice = createSlice({
    name: 'contactus',
    initialState: contactstate,
    reducers: {
        change(state) { state.show = !state.show }
    }
})



let AuthSlice = createSlice({
    name: 'auth',
    initialState: authstate,
    reducers: {
        login(state) { state.IsAuthenticated = true },
        logout(state) { state.IsAuthenticated = false }
    }
})
let store = configureStore({
    reducer: { auth: AuthSlice.reducer, mode: modelslice.reducer, cont: contactslice.reducer }
})

export let authaction = AuthSlice.actions
export let modelaction = modelslice.actions
export let contaction = contactslice.actions

export default store