import { StyledInput } from "./styles";
import { IInput } from "../../types";

export const Input = ({ value, onChange, type, placeholder }: IInput) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};
