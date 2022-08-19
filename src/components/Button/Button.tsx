import { StyledButton } from "./styles";
import { IButton } from "../../types";

export const Button = ({ type, disabled }: IButton) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
