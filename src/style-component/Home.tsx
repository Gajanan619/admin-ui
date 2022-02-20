import { Badge, Drawer, Input, Layout } from "antd";
import { log } from "console";
import styled from "styled-components";
import * as Theme from "../store/ActionTypes/Theme/Theme";
import { StyledCard } from "./CommonControls";

const { Header, Sider, Content } = Layout;

export const StyledMainMenu = styled(Sider)`
  /* flex: 0 0 28rem !important;
  max-width: 28rem !important;
  min-width: 28rem !important;
  width: 28rem !important; */
  background-color: ${(props) =>
    props.theme.themestyle === "light"
      ? Theme.lightBg
      : Theme.darkBg} !important;
  /* box-shadow: 0px 1px 4px
    rgba(
      ${(props) =>
    props.theme.themestyle === "light"
      ? Theme.light_shadow_color
      : Theme.dark_shadow_color},
      0.5
    ); */

  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
`;

export const StyledMainMenuHeader = styled.div`
  height: 8rem;
  padding: 1rem 1.5rem 1rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMainContainer = styled(Layout)`
  background-color: #fff;
  
`;

export const StyledMainHeader = styled(Header)`
  backdrop-filter: blur(6px);
  /* box-shadow: 0 0.3px 3px rgba(0, 0, 0, 0.2); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 998;
  padding: 0 2.4rem;
  height: auto;
  min-height: 8rem;
  position: fixed;
  background-color: ${(props) =>
    props.theme.themestyle === "light"
      ? Theme.lightBg
      : Theme.darkBg} !important;
`;

export const StyledMainContentContainer = styled(Content)`
  padding: 2.4rem;
  margin-top: 8rem;
  background-color: ${(props) =>
    props.theme.themestyle === "light"
      ? Theme.lightBg
      : Theme.darkBg} !important;
`;

export const StyledHeaderNotificationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledHeaderNotificationBadge = styled(Badge)`
  color: ${(props) =>
    props.theme.themestyle === "light"
      ? Theme.common_light_extra_color_5
      : Theme.common_dark_extra_color_5};
`;

export const StyledQuickSearchInput = styled(Input)`
  border-radius: ${Theme.borderRadiusVal};
`;

export const StyledSettingDrawer = styled(Drawer)`
  border-radius: ${Theme.borderRadiusVal};
  width: 28rem;
`;

export const StyledThemeCard = styled(StyledCard)`
  border-radius: ${Theme.smallBorderRadiusVal};
  padding: 0.1rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledColorCard = styled(StyledCard)`
  border-radius: ${Theme.smallBorderRadiusVal};
  padding: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const StyledWelcomeCard = styled(StyledCard)`
  border-radius: ${Theme.smallBorderRadiusVal};
`;

export const StyledWelcomeCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
