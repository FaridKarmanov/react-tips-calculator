import React from "react";
import { StyledButton } from "./styles";

export interface IButton {
  type: "button" | "submit" | "reset";
  isDisabled: boolean;
}

export const Button = ({ type, isDisabled }: IButton) => {
  return (
    <StyledButton type={type} disabled={isDisabled}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
