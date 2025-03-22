import { FC, memo } from "react";
import { BaseButton } from "./BaseButton";

type PrimaryButtonPropsType = {
  children: string;
  onPressed: () => void;
};

export const PrimaryButton: FC<PrimaryButtonPropsType> = memo((props) => {
  const { children, onPressed } = props;
  return (
    <BaseButton
      pressedBG={{ backgroundColor: "#00BFFF" }}
      baseBG={{ backgroundColor: "#1E90FF" }}
      onPressed={onPressed}
    >
      {children}
    </BaseButton>
  );
});
