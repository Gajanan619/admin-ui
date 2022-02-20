import { Typography } from "antd";
import styled from "styled-components";
const { Title, Text } = Typography;

export const StyledMainLayout = styled.div`
  display: flex;
  flex: auto;
  min-height: 100%;
`;
export const StyledLoginMainContent = styled.div`
  background-color: ${(props) => props.theme.extracolor1};
  display: flex;
  padding: 3rem;
  flex: auto;
`;

export const StyledLoginSliderContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledLoginBox = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.extracolor2};
`;

export const StyledSliderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
  }
`;
export const StyledSliderImage = styled.img`
  width: 100%;
`;

export const StyledSliderTitleText = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.6rem 0px;
  /* color: rgb(255, 255, 255); */
  line-height: 1.8rem;
  color: rgb(255, 255, 255);
  line-height: 1.8rem;
`;

export const StyledSliderContentText = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin: 0.5rem 0px;
  color: rgb(255, 255, 255);
  line-height: 1.8rem;
`;

export const StyledLoginBoxHeader = styled.div`
  display: flex;
  height: 6rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLoginBoxBody = styled.div`
  padding: 0px 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const StyledLoginBoxFooter = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  align-items: center;
  padding: 1rem;
  margin-top: 15%;
  text-align: center;
  justify-content: center;
`;

export const StyleLoginMainTitle = styled(Title)`
  color: ${(props) => props.theme.primary_text} !important;
`;
export const StyleLoginSubMainTitle = styled(Text)`
  color: ${(props) => props.theme.primary};
`;

export const StyleFooterTitle = styled(Text)`
  color: ${(props) => props.theme.primary_text} !important;
`;
