import { Text, View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { TodoInputAndButton } from "@/components/molecules/TodoInputAndButton";
import { IncompleteTodos } from "@/components/organisms/IncompleteTodos";
import { CompleteTodos } from "@/components/organisms/CompleteTodos";

export default function Index() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoInputAndButton></TodoInputAndButton>
        <IncompleteTodos></IncompleteTodos>
        <CompleteTodos></CompleteTodos>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
});
