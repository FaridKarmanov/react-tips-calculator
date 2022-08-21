import Select, { SingleValue } from "react-select";
import { ISelect } from "../../types";
import { CustomStyles } from "./styles";

export const options: ISelect[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

interface IProps {
  tips: number;
  setTips: (value: number) => void;
}

export const CustomSelect = ({ tips, setTips }: IProps) => {
  const getValue = () => {
    return tips ? options.find((option) => option.value === tips) : options[0];
  };

  const handleTips = (option: SingleValue<ISelect>): void => {
    if (option) setTips(option.value);
  };

  return (
    <Select
      isSearchable={false}
      isMulti={false}
      options={options}
      onChange={handleTips}
      value={getValue()}
      styles={CustomStyles}
    />
  );
};
