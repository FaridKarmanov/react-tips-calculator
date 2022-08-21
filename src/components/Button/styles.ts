import styled from "styled-components";
import { Color } from "../UI/colors";
import { Media } from "../UI/media";

const StyledButton = styled.button`
  color: white;
  font-size: 24px;
  padding: 13px 0px;
  width: 100%;
  background: ${Color.backgroundColorBody};
  border: none;
  &:hover {
    cursor: pointer;
    background: ${Color.buttonHover};
  }
  &:active {
    background: ${Color.buttonActive};
  }
  &:disabled {
    background: ${Color.backgroundColorBody};
    opacity: 0.5;
    cursor: default;
  }
  transition: all 0.3s;

  ${Media.MD} {
    width: 321px;
  }
`;

export { StyledButton };
