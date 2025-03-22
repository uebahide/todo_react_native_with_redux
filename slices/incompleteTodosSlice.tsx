import { createSlice } from "@reduxjs/toolkit";

type incompleteTodosType = {
  value: Array<string>;
};

const initialState: incompleteTodosType = {
  value: [],
};

const incompleteTodosSlice = createSlice({
  name: "incompleteTodos",
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

export const { add, remove } = incompleteTodosSlice.actions;
export default incompleteTodosSlice.reducer;
