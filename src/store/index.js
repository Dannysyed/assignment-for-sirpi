import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

let counterstate =
{
    counter: 0,
    isshown: true
}
let authstate = {
    IsAuthenticated: false
}
let modelstate = {
    showmodel: false
}
let modelslice = createSlice({
    name: 'model',
    initialState: modelstate,
    reducers: {
        show(state) { state.showmodel = true },
        Dontshow(state) { state.showmodel = false }
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
let counterSlice = createSlice({
    name: 'counter',
    initialState: counterstate,
    reducers: {
        increment(state) { state.counter = state.counter + 1 },
        decrement(state) { state.counter-- },
        increase(state, action) { state.counter = state.counter + action.payload },
        toggler(state) { state.isshown = !state.isshown },

    }
})
let store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer, mode: modelslice.reducer }
})
// using redux as reducer

// let Reducerfunction = (state = statedata, action) => {
//     if (action.type == 'increment') {

//         return { counter: state.counter + 1, isshown: state.isshown }
//     }
//     if (action.type == 'decrement') {
//         return { counter: state.counter - 1, isshown: state.isshown }
//     }
//     if (action.type == 'custom') {
//         return { counter: state.counter + action.payload, isshown: state.isshown }

//     }
//     if (action.type == 'toggle') {

//         return { counter: state.counter, isshown: !state.isshown, }
//     }


//     return {
//         counter: state.counter, isshown: state.isshown
//     }
// }
// let store = createStore(Reducerfunction)

// let subscriptionfn = () => {
//     console.log(store.getState());

// }
// store.subscribe(subscriptionfn)
// store.dispatch({ type: 'increment' })
export let counteraction = counterSlice.actions
export let authaction = AuthSlice.actions
export let modelaction = modelslice.actions

export default store