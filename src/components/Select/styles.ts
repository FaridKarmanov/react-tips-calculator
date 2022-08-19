import { StylesConfig } from "react-select";
import { Color } from "../ui/colors";

export const CustomStyles: StylesConfig<{}> = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    display: "flex",
    alignItems: "center",
    background: Color.white,
    borderRadius: "30px",
    marginBottom: "45px",
    padding: "15px",
    border: "none ",
  }),

  indicatorSeparator: (styles) => ({
    ...styles,
    width: "0px",
  }),
};
