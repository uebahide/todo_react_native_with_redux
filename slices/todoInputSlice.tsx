import { createSlice } from "@reduxjs/toolkit";

const todoInputSlice = createSlice({
  name: "todoInput",
  initialState: {
    value: "",
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = "";
    },
  },
});

export const { change, reset } = todoInputSlice.actions;
export default todoInputSlice.reducer;
