import styled from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";
import circles from "../assets/circles.svg";

export const Wrapper = styled.div`
  background: no-repeat top left url(${circles});
  background-color: ${Color.backgroundColorApp};
  max-width: 1512px;
  margin: auto;
  padding: 203px 0 138px;
  text-align: center;
  ${Media.MD} {
    max-width: 744px;
    padding: 236px 0px 316px;
  }
  ${Media.SM} {
    max-width: 420px;
    padding: 241px 0px 91px;
  }
`;
