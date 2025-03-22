import { configureStore } from "@reduxjs/toolkit";
import todoInputSlicer from "../slices/todoInputSlice";
import incompleteTodosSlicer from "../slices/incompleteTodosSlice";
import completeTodosSlicer from "../slices/completeTodosSlice";

export const store = configureStore({
  reducer: {
    todoInput: todoInputSlicer,
    incompleteTodos: incompleteTodosSlicer,
    completeTodos: completeTodosSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
