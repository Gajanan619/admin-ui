import styled from "styled-components";
import * as Theme from "../store/ActionTypes/Theme/Theme";

export const StyledInfobox = styled.div`
  box-shadow: 0px 1px 4px
    rgba(
      ${(props) =>
        props.theme.themestyle === "light"
          ? Theme.light_shadow_color
          : Theme.dark_shadow_color},
      0.5
    );
  background-color: ${(props) => props.theme.extracolor2};
  margin-bottom: 1.6 rem;
  border: none;
  min-height: 5rem;
  border-radius: ${Theme.borderRadiusVal};
  margin-bottom: 1.6rem;
  /* padding: 2.4rem; */
`;
