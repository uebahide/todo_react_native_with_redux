import { StyleSheet, Text, View } from "react-native";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@/app/store";
import { CompleteTodo } from "../molecules/completeTodo";

export const CompleteTodos = () => {
  const completeTodos = useSelector(
    (state: RootState) => state.completeTodos.value
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete</Text>
      {completeTodos.map((todo, index) => (
        <CompleteTodo key={todo + index} index={index} title={todo} />
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
