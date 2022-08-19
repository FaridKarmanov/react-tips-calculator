import React, { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { ISelect } from "../../types";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { CustomSelect, options } from "../Select/CustomSelect";
import { StyledForm, Title, SubTitle, Total } from "./styles";

export const Form = () => {
  const bill = useInput();
  const persons = useInput();

  const [valueButton, setButtonValue] = useState<boolean>(true);
  const [currentValue, setCurrentValue] = useState<number>(10);
  const [valueForm, setValueForm] = useState<number>(0);

  const getTipsValue = () => {
    return currentValue
      ? options.find((tips: ISelect) => {
          return tips.value === currentValue;
        })
      : "";
  };

  const handleTips = (tips: any): void => {
    setCurrentValue(tips.value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    const totalValue = (
      ((+bill.value / +persons.value) * (100 + currentValue)) /
      100
    ).toFixed(2);

    setValueForm(+totalValue);
    event.preventDefault();
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
      <CustomSelect onChange={handleTips} value={getTipsValue()} />
      <Total>Total: {valueForm} $</Total>
      <Button type="submit" disabled={valueButton}></Button>
    </StyledForm>
  );
};
