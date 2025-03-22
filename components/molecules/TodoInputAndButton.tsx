import { TodoInput } from "../atoms/inputs/TodoInput";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { Alert, StyleSheet, View } from "react-native";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "@/slices/todoInputSlice";
import { add } from "@/slices/incompleteTodosSlice";

export const TodoInputAndButton = memo(() => {
  const inputTodo = useSelector((state: any) => state.todoInput.value);
  const dispatch = useDispatch();
  const addTodo = () => {
    if (inputTodo != "") {
      dispatch(add(inputTodo));
      dispatch(reset());
    }
  };
  return (
    <View style={styles.container}>
      <TodoInput />
      <PrimaryButton onPressed={addTodo}>Add</PrimaryButton>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
