import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { useDispatch } from "react-redux";
import { remove as removeFromIncomp } from "@/slices/incompleteTodosSlice";
import { add as addToComp } from "@/slices/completeTodosSlice";

type IncompleteTodoType = {
  title: string;
  index: number;
};

export const IncompleteTodo: FC<IncompleteTodoType> = (props) => {
  const dispatch = useDispatch();
  const { title, index } = props;
  const complete = () => {
    dispatch(removeFromIncomp(index));
    dispatch(addToComp(title));
  };
  const deleteTodo = () => {
    dispatch(removeFromIncomp(index));
  };
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <PrimaryButton onPressed={complete}>Complete</PrimaryButton>
      <SecondaryButton onPressed={deleteTodo}>Delete</SecondaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
