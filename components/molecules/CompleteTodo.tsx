import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { useDispatch } from "react-redux";
import { remove as removeFromComp } from "@/slices/completeTodosSlice";
import { add as addToIncom } from "@/slices/incompleteTodosSlice";

type CompleteTodoType = {
  title: string;
  index: number;
};

export const CompleteTodo: FC<CompleteTodoType> = (props) => {
  const dispatch = useDispatch();
  const { title, index } = props;
  const back = () => {
    dispatch(removeFromComp(index));
    dispatch(addToIncom(title));
  };
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <PrimaryButton onPressed={back}>Back</PrimaryButton>
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
