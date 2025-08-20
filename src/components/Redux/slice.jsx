import {createSlice} from '@reduxjs/toolkit'

//initial state
const initialState =()=>{
    value: 0;
}

//create slice
const CounterSlice = createSlice({
    name: "counter", //slice name
    initialState,
    reducers: {
        increment: (state)=>{state.value += 1},
        decrement: (state)=>{state.value -= 1},
        incrementByAmount: (state, action)=>{state.value += action.payload},
    }
})

export const {increment, decrement, incrementByAmount} = CounterSlice.actions;
export default counterReducer = CounterSlice.reducer;