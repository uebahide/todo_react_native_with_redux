import { createSlice } from "@reduxjs/toolkit";

type completeTodosType = {
  value: Array<string>;
};

const initialState: completeTodosType = {
  value: [],
};

const completeTodosSlice = createSlice({
  name: "completeTodos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { add, remove } = completeTodosSlice.actions;
export default completeTodosSlice.reducer;
