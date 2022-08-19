import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    background: ${Color.backgroundColorBody};
    font-family: "Noto sans", Arial, Helvetica, sans-serif;
    color: ${Color.textBasic};
}
li{
    list-style-type: none;
}
button {
    font-size: inherit;
}
::-webkit-input-placeholder {
    color: ${Color.textBasicLight};
}  
::-moz-placeholder { 
    color: ${Color.textBasicLight};
}
:-ms-input-placeholder {
    color: ${Color.textBasicLight};
}
     
:-moz-placeholder { 
    color: ${Color.textBasicLight};
}
`;
