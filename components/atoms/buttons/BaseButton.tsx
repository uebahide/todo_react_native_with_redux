import { FC, memo, useState } from "react";
import { Pressable, Text, View, StyleSheet, ViewStyle } from "react-native";

type BaseButtonPropsType = {
  children: string;
  baseBG: ViewStyle;
  pressedBG: ViewStyle;
  onPressed: () => void;
};

export const BaseButton: FC<BaseButtonPropsType> = memo((props) => {
  const { children, baseBG, pressedBG, onPressed } = props;

  const [pressed, setPressed] = useState(false);
  const onPressIn = () => {
    setPressed(true);
  };
  const onPressOut = () => {
    setPressed(false);
    onPressed();
  };

  return (
    <View>
      <Pressable
        style={[styles.button, pressed ? pressedBG : baseBG]}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});
