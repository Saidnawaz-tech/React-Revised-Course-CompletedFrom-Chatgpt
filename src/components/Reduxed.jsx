import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

//  Create Redux Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload }
  }
});

//  Extract actions
const { increment, decrement, incrementByAmount } = counterSlice.actions;

//  Create store
export const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

//  UI Component
export default function CounterApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Redux Toolkit - Single File</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Increment by {amount}
        </button>
      </div>
    </div>
  );
}


/*
App.jsx:

import {Provider} from 'react-redux'
import CounterApp,{ store } from './components/Reduxed'
// import './App'


//  Export wrapped with Provider

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}

*/