import { StyleSheet, Text, View } from "react-native";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@/app/store";
import { IncompleteTodo } from "../molecules/IncompleteTodo";

export const IncompleteTodos = () => {
  const incompleteTodos = useSelector(
    (state: RootState) => state.incompleteTodos.value
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incomplete</Text>
      {incompleteTodos.map((todo, index) => (
        <IncompleteTodo key={todo + index} index={index} title={todo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    height: 250,
    width: 300,
    marginVertical: 20,
  },
  title: {
    textAlign: "center",
  },
});
