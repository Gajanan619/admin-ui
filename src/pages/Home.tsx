import React, { Suspense, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Drawer,
  Dropdown,
  Input,
  Layout,
  Menu,
  Space,
  Typography,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FullscreenExitOutlined,
  MailOutlined,
  SettingOutlined,
  SettingFilled,
  BellFilled,
  FullscreenOutlined,
  DownOutlined,
  HeartOutlined,
  ExportOutlined,
  SearchOutlined,
  AppstoreFilled,
  AppstoreOutlined,
} from "@ant-design/icons";
import {
  StyledColorCard,
  StyledHeaderNotificationBadge,
  StyledHeaderNotificationContainer,
  StyledMainContainer,
  StyledMainContentContainer,
  StyledMainHeader,
  StyledMainMenu,
  StyledMainMenuHeader,
  StyledQuickSearchInput,
  StyledSettingDrawer,
  StyledThemeCard,
} from "../style-component/Home";
import Logo from "../component/atoms/Login/Logo";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import CustomRow from "../component/atoms/Grid/CustomRow";
import CustomCol from "../component/atoms/Grid/CustomCol";
import Text from "antd/lib/typography/Text";
import { StyledCard } from "../style-component/CommonControls";

import {
  FiBox,
  FiHome,
  FiMail,
  FiMoon,
  FiSun,
  FiMessageSquare,
  FiCalendar,
  FiUser,
  FiFileText,
  FiSettings,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { UPDATETHEME } from "../store/ActionTypes/Theme/ThemeActionType";
import {
  DarkBlueTheme,
  DarkBrownTheme,
  DarkCyanTheme,
  DarkGreenTheme,
  DarkOrangeTheme,
  DarkPinkTheme,
  DarkPurpleTheme,
  DarkRedTheme,
  DarkTealTheme,
  LightBlueTheme,
  LightBrownTheme,
  LightCyanTheme,
  LightGreenTheme,
  LightOrangeTheme,
  LightPinkTheme,
  LightPurpleTheme,
  LightRedTheme,
  LightTealTheme,
  theme,
  ThemeColor,
  Themetype,
} from "../store/ActionTypes/Theme/Theme";
import { RootState } from "../store/Reducer";
import { Route, Switch, useLocation, useRouteMatch } from "react-router";
import Breadcrumbs from "./Breadcrumbs";
import DropDowns from "./Dropdowns";
import Checkbox_Radiobutton from "./CheckboxRadioButton";
import CheckboxRadioButton from "./CheckboxRadioButton";
import DrawerModal from "./DrawerModal";
import Notifications from "./Notifications";
import OtherUtilities from "./OtherUtilities";
import Pickers from "./Picker";
import TooltipPopover from "./TooltipPopover";
import TabAndList from "./TabAndList";
import InfoBox from "./InfoBox";
import Tables from "./Table";
import { Link } from "react-router-dom";

const Dashboard = React.lazy(() => import("./Dashboard"));
const Buttons = React.lazy(() => import("./Buttons"));
const Dividers = React.lazy(() => import("./Dividers"));

const { Title } = Typography;
const { SubMenu } = Menu;

const Home = () => {
  const menu = (
    <div className="user-info-box">
      <div className="user-info-box--header">
        <Title level={5}>Gajanan Mehta</Title>
      </div>
      <div className="user-info-box--body"></div>
      <div className="user-info-box--footer"></div>
    </div>
  );

  const match = useRouteMatch();

  const [visible, setVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const hideDrawer = () => {
    setVisible(false);
  };

  const dispatch = useDispatch();
  const currentTheme: theme = useSelector(
    (state: RootState) => state.theme.Theme
  );

  const onThemeChange = (
    themetype: typeof Themetype[number],
    color: typeof ThemeColor[number]
  ) => {
    switch (color) {
      case "brown":
        dispatch({
          type: UPDATETHEME,
          themeKey: themetype === "dark" ? DarkBrownTheme : LightBrownTheme,
        });
        break;

      case "green":
        dispatch({
          type: UPDATETHEME,
          themeKey: themetype === "dark" ? DarkGreenTheme : LightGreenTheme,
        });
        break;
      case "cyan":
        dispatch({
          type: UPDATETHEME,
          themeKey: themetype === "dark" ? DarkCyanTheme : LightCyanTheme,
        });
        break;
      case "orange":
        dispatch({
          type: UPDATETHEME,
          themeKey: themetype === "dark" ? DarkOrangeTheme : LightOrangeTheme,
        });
        break;

      case "pink":
        dispatch({
          type: UPDATETHEME,
          themeKey: themetype === "dark" ? DarkPinkTheme : LightPinkTheme,
        });
        break;

      case "purple":
        dispatch({
          type: UPDATETHEME,
          themeKey: themetype === "dark" ? DarkPurpleTheme : LightPurpleTheme,
        });
        break;
      case "red":
        dispatch({
          type: UPDATETHEME,
          themeKey: themetype === "dark" ? DarkRedTheme : LightRedTheme,
        });
        break;
      case "teal":
        dispatch({
          type: UPDATETHEME,
          themeKey: themetype === "dark" ? DarkTealTheme : LightTealTheme,
        });
        break;

      default:
        dispatch({
          type: UPDATETHEME,
          themeKey: themetype === "dark" ? DarkBlueTheme : LightBlueTheme,
        });
    }
  };

  const [isFullScreen, setisFullScreen] = useState(false);

  const onFullscreenHandler = () => {
    setisFullScreen(!isFullScreen);
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <React.Fragment>
      <StyledMainMenu
        trigger={null}
        collapsible
        collapsed={isCollapsed}
        breakpoint="md"
        onBreakpoint={(broken: boolean) => {
          if (broken) {
            setIsCollapsed(true);
          } else {
            setIsCollapsed(false);
          }
        }}
      >
        <StyledMainMenuHeader className="main-menu-header-box">
          {!isCollapsed && <Logo width={30} height={100}></Logo>}

          {isCollapsed ? (
            <MenuUnfoldOutlined
              className="menu-icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          ) : (
            <MenuFoldOutlined
              className="menu-icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          )}
        </StyledMainMenuHeader>
        <SimpleBar
          style={{ height: "calc(100vh - 8rem)", overflowX: "hidden" }}
          forceVisible="y"
          autoHide={true}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            triggerSubMenuAction="click"
          >
            <Menu.Item key="1" icon={<FiHome className="text-color-3" />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<FiMail className="text-color-6" />}>
              About Me
            </Menu.Item>

            <SubMenu
              key="sub1"
              icon={<FiBox className="text-color-4" />}
              title="Employees"
              popupClassName={`${currentTheme.themestyle} ${currentTheme.themecolor}`}
            >
              <Menu.Item key="3">Employees Dashboard</Menu.Item>
              <Menu.Item key="4">Employee Master</Menu.Item>
              <Menu.Item key="5">Shifts</Menu.Item>
              <SubMenu
                key="sub2"
                title="Employee Movements"
                popupClassName={`${currentTheme.themestyle} ${currentTheme.themecolor}`}
              >
                <Menu.Item key="6">Transfers</Menu.Item>
                <Menu.Item key="7">Salary Changes</Menu.Item>
                <Menu.Item key="8">Recategorize</Menu.Item>
                <Menu.Item key="9">Probation</Menu.Item>
                <Menu.Item key="10">Confirmation</Menu.Item>
              </SubMenu>
              <Menu.Item key="11">More</Menu.Item>
            </SubMenu>

            <Menu.Item key="12" icon={<FiFileText className="text-color-7" />}>
              Leave
            </Menu.Item>

            <Menu.Item
              key="13"
              icon={<FiMessageSquare className="text-color-5" />}
            >
              Basic Setups
            </Menu.Item>

            <Menu.Item key="14" icon={<FiCalendar className="text-color-6" />}>
              Reports
            </Menu.Item>

            <Menu.Item key="15" icon={<FiUser className="text-color-8" />}>
              Settings
            </Menu.Item>

            <SubMenu key="sub3" icon={<FiSettings />} title="Component">
              <Menu.Item key="16">
                <Link to={`${match.url}/Tables`}>Table</Link>
              </Menu.Item>
              <Menu.Item key="17">
                <Link to={`${match.url}/buttons`}>Button</Link>
              </Menu.Item>
              <Menu.Item key="18">
                <Link to={`${match.url}/dividers`}>Dividers</Link>
              </Menu.Item>
              <Menu.Item key="20">
                <Link to={`${match.url}/dropdowns`}>Dropdowns</Link>
              </Menu.Item>
              <Menu.Item key="21">
                <Link to={`${match.url}/checkboxandradio`}>Checkbox</Link>
              </Menu.Item>
              <Menu.Item key="22">
                <Link to={`${match.url}/notifications`}>Notifications</Link>
              </Menu.Item>
              <Menu.Item key="23">
                <Link to={`${match.url}/drawermodal`}>Drawer & Modal</Link>
              </Menu.Item>
              <Menu.Item key="24">
                <Link to={`${match.url}/tooltippopover`}>Tabs</Link>
              </Menu.Item>
              <Menu.Item key="19">
                <Link to={`${match.url}/OtherUtilities`}>Other Utilities</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </SimpleBar>
      </StyledMainMenu>
      <StyledMainContainer
        style={{ marginLeft: `${isCollapsed ? "8rem" : "28rem"}` }}
      >
        <StyledMainHeader
          style={{ width: `calc(100% - ${isCollapsed ? "8rem" : "28rem"})` }}
        >
          <CustomRow key="rw2" xxl={8} lg={8}>
            <CustomCol
              key="HeaderR1.1"
              xxl={10}
              xl={10}
              lg={10}
              md={24}
              sm={24}
              xs={24}
            >
              <StyledQuickSearchInput
                size="large"
                placeholder="What are you looking for? Just start typing it here..."
                prefix={<SearchOutlined />}
              />
            </CustomCol>
            <CustomCol
              key="HeaderR1.2"
              xxl={14}
              xl={14}
              lg={14}
              md={24}
              sm={24}
              xs={24}
            >
              <StyledHeaderNotificationContainer className="header-notification-container">
                <Space split={<Divider type="vertical" />}>
                  <StyledHeaderNotificationBadge count={5}>
                    <BellFilled className="icon" />
                  </StyledHeaderNotificationBadge>
                  <StyledHeaderNotificationBadge count={2}>
                    <AppstoreFilled className="icon" />
                  </StyledHeaderNotificationBadge>

                  <Dropdown
                    overlay={menu}
                    trigger={["click"]}
                    placement="bottomRight"
                    arrow
                    overlayClassName={currentTheme.themestyle}
                    className="user-info-box"
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Avatar icon={<UserOutlined />} />
                      <Text style={{ margin: "0 1rem" }}>Gajanan Mehta</Text>
                      <DownOutlined className="icon" />
                    </a>
                  </Dropdown>
                  <SettingFilled
                    onClick={() => showDrawer()}
                    className="icon"
                  />
                </Space>
              </StyledHeaderNotificationContainer>
            </CustomCol>
          </CustomRow>
        </StyledMainHeader>
        <StyledMainContentContainer className="site-layout-background">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path={match.url} exact>
                <Dashboard />
              </Route>

              <Route path={`${match.url}/buttons`} exact>
                <Buttons />
              </Route>
              <Route path={`${match.url}/dividers`} exact>
                <Dividers />
              </Route>

              <Route path={`${match.url}/OtherUtilities`} exact>
                <OtherUtilities />
              </Route>

              <Route path={`${match.url}/dropdowns`} exact>
                <DropDowns />
              </Route>

              <Route path={`${match.url}/checkboxandradio`} exact>
                <CheckboxRadioButton />
              </Route>

              <Route path={`${match.url}/notifications`} exact>
                <Notifications />
              </Route>

              <Route path={`${match.url}/drawermodal`} exact>
                <DrawerModal />
              </Route>

              <Route path={`${match.url}/tooltippopover`} exact>
                <TooltipPopover />
              </Route>

              <Route path={`${match.url}/tabsandlist`} exact>
                <TabAndList />
              </Route>

              <Route path={`${match.url}/Tables`} exact>
                <Tables />
              </Route>
              {/* Done */}

              <Route path={`${match.url}/picker`} exact>
                <Pickers />
              </Route>

              <Route path={`${match.url}/infobox`} exact>
                <InfoBox />
              </Route>
            </Switch>
          </Suspense>
        </StyledMainContentContainer>
      </StyledMainContainer>

      <Drawer
        title="Setting"
        placement="right"
        visible={visible}
        onClose={() => hideDrawer()}
        key="setting_drawer"
        width={"280px"}
        className={`${currentTheme.themestyle}`}
      >
        <CustomRow key="settingrw.1">
          <CustomCol
            key="settingcl.1"
            xxl={24}
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
          >
            <Title level={5}>Theme</Title>
          </CustomCol>
          <CustomCol
            key="settingcl.1"
            xxl={12}
            xl={12}
            lg={18}
            md={24}
            sm={24}
            xs={24}
          >
            <StyledThemeCard
              className="setting-theme-box light"
              bordered={false}
              onClick={() => onThemeChange("light", currentTheme.themecolor)}
            >
              <FiSun />
            </StyledThemeCard>
          </CustomCol>
          <CustomCol
            key="settingcl.2"
            xxl={12}
            xl={12}
            lg={18}
            md={24}
            sm={24}
            xs={24}
          >
            <StyledThemeCard
              className="setting-theme-box dark"
              bordered={false}
              onClick={() => onThemeChange("dark", currentTheme.themecolor)}
            >
              <FiMoon />
            </StyledThemeCard>
          </CustomCol>
        </CustomRow>

        <CustomRow key="settingrw.2">
          <CustomCol
            key="settingcl.1"
            xxl={24}
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
          >
            <Title level={5}>Color</Title>
          </CustomCol>
          <CustomCol
            key="settingcl.1"
            xxl={8}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={24}
          >
            <StyledColorCard
              className={`setting-color-box color-1 ${
                currentTheme.themecolor === "blue" && "active"
              }`}
              bordered={false}
              onClick={() => onThemeChange(currentTheme.themestyle, "blue")}
            >
              <div className="box"></div>
            </StyledColorCard>
          </CustomCol>
          <CustomCol
            key="settingcl.1"
            xxl={8}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={24}
          >
            <StyledColorCard
              className={`setting-color-box color-2 ${
                currentTheme.themecolor === "green" && "active"
              }`}
              bordered={false}
              onClick={() => onThemeChange(currentTheme.themestyle, "green")}
            >
              <div className="box"></div>
            </StyledColorCard>
          </CustomCol>
          <CustomCol
            key="settingcl.1"
            xxl={8}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={24}
          >
            <StyledColorCard
              className={`setting-color-box color-3 ${
                currentTheme.themecolor === "purple" && "active"
              }`}
              bordered={false}
              onClick={() => onThemeChange(currentTheme.themestyle, "purple")}
            >
              <div className="box"></div>
            </StyledColorCard>
          </CustomCol>
          <CustomCol
            key="settingcl.1"
            xxl={8}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={24}
          >
            <StyledColorCard
              className={`setting-color-box color-4 ${
                currentTheme.themecolor === "cyan" && "active"
              }`}
              bordered={false}
              onClick={() => onThemeChange(currentTheme.themestyle, "cyan")}
            >
              <div className="box"></div>
            </StyledColorCard>
          </CustomCol>
          <CustomCol
            key="settingcl.1"
            xxl={8}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={24}
          >
            <StyledColorCard
              className={`setting-color-box color-5 ${
                currentTheme.themecolor === "orange" && "active"
              }`}
              bordered={false}
              onClick={() => onThemeChange(currentTheme.themestyle, "orange")}
            >
              <div className="box"></div>
            </StyledColorCard>
          </CustomCol>
          <CustomCol
            key="settingcl.1"
            xxl={8}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={24}
          >
            <StyledColorCard
              className={`setting-color-box color-6 ${
                currentTheme.themecolor === "red" && "active"
              }`}
              bordered={false}
              onClick={() => onThemeChange(currentTheme.themestyle, "red")}
            >
              <div className="box"></div>
            </StyledColorCard>
          </CustomCol>

          <CustomCol
            key="settingcl.1"
            xxl={8}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={24}
          >
            <StyledColorCard
              className={`setting-color-box color-7 ${
                currentTheme.themecolor === "pink" && "active"
              }`}
              bordered={false}
              onClick={() => onThemeChange(currentTheme.themestyle, "pink")}
            >
              <div className="box"></div>
            </StyledColorCard>
          </CustomCol>

          <CustomCol
            key="settingcl.1"
            xxl={8}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={24}
          >
            <StyledColorCard
              className={`setting-color-box color-8 ${
                currentTheme.themecolor === "teal" && "active"
              }`}
              bordered={false}
              onClick={() => onThemeChange(currentTheme.themestyle, "teal")}
            >
              <div className="box"></div>
            </StyledColorCard>
          </CustomCol>

          <CustomCol
            key="settingcl.1"
            xxl={8}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={24}
          >
            <StyledColorCard
              className={`setting-color-box color-9 ${
                currentTheme.themecolor === "brown" && "active"
              }`}
              bordered={false}
              onClick={() => onThemeChange(currentTheme.themestyle, "brown")}
            >
              <div className="box"></div>
            </StyledColorCard>
          </CustomCol>
        </CustomRow>

        <CustomRow key="settingrw.2">
          <CustomCol
            key="settingcl.1"
            xxl={24}
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
          >
            <Button
              block
              size="large"
              icon={
                isFullScreen ? (
                  <FullscreenExitOutlined />
                ) : (
                  <FullscreenOutlined />
                )
              }
              onClick={onFullscreenHandler}
            >
              {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
            </Button>
          </CustomCol>
        </CustomRow>
      </Drawer>
    </React.Fragment>
  );
};

export default Home;
