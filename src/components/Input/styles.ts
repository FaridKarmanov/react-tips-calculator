import styled from "styled-components";
import { Color } from "../ui/colors";
import { Media } from "../ui/media";

const StyledInput = styled.input`
  width: 100%;
  padding: 21px 0px;
  margin-bottom: 33px;
  text-align: center;
  font-size: 18px;
  font-family: inherit;
  border-radius: 30px;
  border: none;
  color: ${Color.black};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ${Media.MD} {
    margin-bottom: 17px;
  }
  ${Media.SM} {
    margin-bottom: 15px;
  }
`;

export { StyledInput };
