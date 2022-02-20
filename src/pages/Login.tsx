import { Button, Checkbox, Form, Input, Carousel, Switch } from "antd";
import React, { useState } from "react";
import SliderItem from "../component/atoms/Login/SliderItem";
import slide1 from "../assest/images/LoginSliderImage/Slide-1.png";
import slide2 from "../assest/images/LoginSliderImage/Slide-2.png";
import slide3 from "../assest/images/LoginSliderImage/Slide-3.png";
import {
  StyledLoginBox,
  StyledLoginBoxBody,
  StyledLoginBoxFooter,
  StyledLoginBoxHeader,
  StyledLoginMainContent,
  StyledLoginSliderContainer,
  StyledMainLayout,
  StyleFooterTitle,
  StyleLoginMainTitle,
  StyleLoginSubMainTitle,
} from "../style-component/Login";
import Logo from "../component/atoms/Login/Logo";
import { Typography } from "antd";
import { useHistory } from "react-router";
import CustomRow from "../component/atoms/Grid/CustomRow";
import CustomCol from "../component/atoms/Grid/CustomCol";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { UPDATETHEME } from "../store/ActionTypes/Theme/ThemeActionType";
import { ThemeActionCreator } from "../store/type";
import { SwitchChangeEventHandler } from "antd/lib/switch";
import { log } from "console";
import {
  DarkBlueTheme,
  LightBlueTheme,
} from "../store/ActionTypes/Theme/Theme";
const { Title, Text } = Typography;

interface loginProps {}

const Login = (props: loginProps) => {
  const [Loading, setLoading] = useState(false);
  let history = useHistory();

  const onLoginHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // ShowSuccessMessage({ key: "msg1", content: "Login successful" });
      history.push("/Home");
    }, 3000);
  };

  // const dispatch: Dispatch<ThemeActionCreator> = useDispatch();
  const dispatch = useDispatch();

  const onThemeChange = (checked: boolean) => {
    console.log(checked);
    if (checked) {
      dispatch({
        type: UPDATETHEME,
        themeKey: DarkBlueTheme,
      });
    } else {
      dispatch({
        type: UPDATETHEME,
        themeKey: LightBlueTheme,
      });
    }
  };

  return (
    <React.Fragment>
      <StyledLoginMainContent>
        <StyledLoginSliderContainer>
          <Carousel style={{ maxWidth: "500px" }}>
            <SliderItem
              imageSrc={slide1}
              title="Aruti Payroll and Human Resource Management System"
              content="Aruti Payroll and Human Resource Management System consist of various sub-module which are simlessley integrated to each other"
            ></SliderItem>

            <SliderItem
              imageSrc={slide2}
              title="Aruti Payroll and Human Resource Management System"
              content="Aruti Payroll and Human Resource Management System consist of various sub-module which are simlessley integrated to each other"
            ></SliderItem>

            <SliderItem
              imageSrc={slide3}
              title="Aruti Payroll and Human Resource Management System"
              content="Aruti Payroll and Human Resource Management System consist of various sub-module which are simlessley integrated to each other"
            ></SliderItem>
          </Carousel>
        </StyledLoginSliderContainer>

        <StyledLoginBox>
          <StyledLoginBoxHeader>
            <Logo width={20} height={100}></Logo>
            <Switch onChange={(checked, eve) => onThemeChange(checked)} />
          </StyledLoginBoxHeader>
          <StyledLoginBoxBody>
            <StyleLoginMainTitle
              key="lblLoginHeader"
              level={2}
              className="LoginBoxTitle"
            >
              Welcome To{" "}
              <StyleLoginSubMainTitle key="lblLoginHeader2">
                Aruti
              </StyleLoginSubMainTitle>
            </StyleLoginMainTitle>

            <Form
              name="basic"
              layout="vertical"
              size="large"
              onFinish={(val) => onLoginHandler()}
              className="login-form"
            >
              <CustomRow key="rw1" xxl={8} lg={8}>
                <CustomCol
                  key="rw1.1"
                  xxl={24}
                  xl={24}
                  lg={24}
                  md={24}
                  sm={24}
                  xs={24}
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter Username" />
                  </Form.Item>
                </CustomCol>

                <CustomCol
                  key="rw1.2"
                  xxl={24}
                  xl={24}
                  lg={24}
                  md={24}
                  sm={24}
                  xs={24}
                >
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Enter Password" />
                  </Form.Item>
                </CustomCol>
              </CustomRow>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <CustomRow key="rw2" xxl={8} lg={8}>
                <CustomCol
                  key="rw1.1"
                  xxl={12}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <Button type="link" className="p-l-0">
                    Forgot Password
                  </Button>
                </CustomCol>
                <CustomCol
                  key="rw1.3"
                  xxl={12}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  classname="text-right "
                >
                  <Button type="primary" htmlType="submit" loading={Loading}>
                    Login
                  </Button>
                </CustomCol>
              </CustomRow>
            </Form>
          </StyledLoginBoxBody>

          <StyledLoginBoxFooter>
            <StyleFooterTitle key="lblFooterText" strong>
              © 2021-2022 Aruti
            </StyleFooterTitle>
          </StyledLoginBoxFooter>
        </StyledLoginBox>
      </StyledLoginMainContent>
    </React.Fragment>
  );
};
export default Login;
