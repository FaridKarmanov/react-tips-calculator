import React, { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { CustomSelect, options } from "../Select/CustomSelect";
import { StyledForm, Title, SubTitle, Total } from "./styles";

export const Form = () => {
  const bill = useInput();
  const persons = useInput();

  const [tips, setTips] = useState<number>(options[0].value);
  const [valueButton, setButtonValue] = useState<boolean>(true);
  const [valueForm, setValueForm] = useState<number>(0);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setValueForm(((+bill.value / +persons.value) * (100 + tips)) / 100);
  };

  useEffect((): void => {
    if (bill.value === "" || persons.value === "") {
      setButtonValue(true);
    } else if (bill.value !== "" && persons.value !== "") {
      setButtonValue(false);
    }
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <SubTitle>Let’s go calculate your tips</SubTitle>
      <Input {...bill} type="number" placeholder="Enter the bill" />
      <Input {...persons} type="number" placeholder="Enter persons" />
      <CustomSelect tips={tips} setTips={setTips} />
      <Total>Total: {valueForm.toFixed(2)} $</Total>
      <Button type="submit" disabled={valueButton}></Button>
    </StyledForm>
  );
};
