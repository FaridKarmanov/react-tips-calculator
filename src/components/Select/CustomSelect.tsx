import Select, { SingleValue } from "react-select";
import { ISelect } from "../../types";
import { CustomStyles } from "./styles";

export const options: ISelect[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

interface IProps {
  onChange: any;
  value: string | ISelect | undefined;
}

export const CustomSelect = ({ onChange, value }: IProps) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      styles={CustomStyles}
      value={value}
    />
  );
};
