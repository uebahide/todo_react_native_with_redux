import { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

type BaseInputType = {
  onChangeText: (s: string) => void;
  placeholder: string;
  value: string;
};

export const BaseInput: FC<BaseInputType> = (props) => {
  const { onChangeText, placeholder, value } = props;
  return (
    <>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      ></TextInput>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
  },
});
