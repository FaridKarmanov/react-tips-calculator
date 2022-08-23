import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const StyledForm = styled.form`
  margin: auto;
  max-width: 460px;
  ${Media.MD} {
    max-width: 331px;
  }
`;

const Title = styled.h2`
  width: 100%;
  margin-bottom: 45px;
  color: ${Color.black};
  font-weight: 400;
  font-size: 40px;
  ${Media.MD} {
    font-size: 24px;
  }
`;
const SubTitle = styled.p`
  width: 100%;
  margin-bottom: 45px;
  font-size: 32px;
  color: ${Color.textBasicLight};
  ${Media.MD} {
    font-size: 24px;
  }
`;
const Total = styled.p`
  width: 100%;
  color: ${Color.black};
  text-align: left;
  margin-bottom: 45px;
  font-weight: 500;
  font-size: 24px;
  ${Media.SM} {
    font-size: 18px;
  }
`;

export { StyledForm, Title, SubTitle, Total };
