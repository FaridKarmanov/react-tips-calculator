import { StyledInput } from "./styles";
import { ChangeEvent } from "react";
import React from "react";

export interface IInput {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

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
