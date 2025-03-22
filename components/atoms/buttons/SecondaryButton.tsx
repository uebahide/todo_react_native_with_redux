import { FC, memo } from "react";
import { BaseButton } from "./BaseButton";

type SecondaryButtonPropsType = {
  children: string;
  onPressed: () => void;
};

export const SecondaryButton: FC<SecondaryButtonPropsType> = memo((props) => {
  const { children, onPressed } = props;
  return (
    <BaseButton
      pressedBG={{ backgroundColor: "#E53935" }}
      baseBG={{ backgroundColor: "#C62828" }}
      onPressed={onPressed}
    >
      {children}
    </BaseButton>
  );
});
