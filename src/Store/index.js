import React from "react";
import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    incrementBy2(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrementBy2(state, action) {
      state.counter = state.counter + action.payload;
    },
    incrementBy5(state, action) {
      state.counter = state.counter + action.payload;
    },
    deccrementBy5(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "incrementBy2") {
//     return { counter: state.counter + action.value };
//   }
//   if (action.type === "decrementBy2") {
//     return { counter: state.counter - action.value };
//   }
//   if (action.type === "incrementBy5") {
//     return { counter: state.counter + action.value };
//   }
//   if (action.type === "decrementBy5") {
//     return { counter: state.counter - action.value };
//   }
//   return state;
// };

counterSlice.actions.decrementBy2();

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const CounterActions = counterSlice.actions;
export const AuthActions = authSlice.actions;
export default store;
