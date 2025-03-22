import { BaseInput } from "./BaseIput";
import { useDispatch, useSelector } from "react-redux";
import { change, reset } from "../../../slices/todoInputSlice";
import { memo } from "react";

export const TodoInput = memo(() => {
  const dispatch = useDispatch();
  const todoInput = useSelector((state: any) => state.todoInput.value);
  const onChangeText = (s: string) => {
    dispatch(change(s));
  };

  return (
    <>
      <BaseInput
        onChangeText={onChangeText}
        placeholder="Enter title"
        value={todoInput}
      ></BaseInput>
    </>
  );
});
