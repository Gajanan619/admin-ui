import { Button, Card } from "antd";
import styled from "styled-components";
import * as Theme from "../store/ActionTypes/Theme/Theme";

export const StyledCard = styled(Card)`
  border-radius: ${Theme.borderRadiusVal};
  box-shadow: 0px 1px 4px
    rgba(
      ${(props) =>
        props.theme.themestyle === "light"
          ? Theme.light_shadow_color
          : Theme.dark_shadow_color},
      0.5
    );
  background-color: ${(props) => props.theme.extracolor2};
  margin-bottom: 1.6rem;
  border: none;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 0.8rem;
  margin-right: 0.8rem;
`;
