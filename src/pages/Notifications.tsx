import React, { useState } from "react";
import {
  Breadcrumb,
  Menu,
  Tooltip,
  Radio,
  Alert,
  Space,
  Divider,
  message,
  notification,
  Popconfirm,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router";
import CustomCol from "../component/atoms/Grid/CustomCol";
import CustomRow from "../component/atoms/Grid/CustomRow";
import { StyledButton, StyledCard } from "../style-component/CommonControls";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import useMessage from "../hooks/useMessage";
import useNotification from "../hooks/useNotification";
import { useSelector } from "react-redux";
import { RootState } from "../store/Reducer";

type NotificationProps = {};

const Notifications: React.FC<NotificationProps> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();

  const msg = useMessage();
  const notify = useNotification();
  const currentTheme = useSelector((state: RootState) => state.theme.Theme);

  const success = () => {
    msg.ShowSuccessMessage("This is a success message");
  };

  const error = () => {
    msg.ShowErrorMessage("This is an error message");
  };

  const warning = () => {
    msg.ShowWarningMessage("This is a warning message");
  };

  const info = () => {
    msg.ShowInfoMessage("This is a warning message");
  };

  const load = () => {
    message.loading("Action in progress..");
  };

  //NOtification
  const successNotification = () => {
    notify.ShowSuccessNotification(
      "Notification Title",
      "This is the content of the notification. This is the content of the notification. This is the content of the notification."
    );
  };

  const errorNotification = () => {
    notify.ShowErrorNotification(
      "Notification Title",
      "This is the content of the notification. This is the content of the notification. This is the content of the notification."
    );
  };

  const warningNotification = () => {
    notify.ShowWarningNotification(
      "Notification Title",
      "This is the content of the notification. This is the content of the notification. This is the content of the notification."
    );
  };

  const infoNotification = () => {
    notify.ShowInfoNotification(
      "Notification Title",
      "This is the content of the notification. This is the content of the notification. This is the content of the notification."
    );
  };

  //Confirm
  function confirm() {
    msg.ShowSuccessMessage("Click on Yes");
  }

  function cancel() {
    msg.ShowErrorMessage("Click on No");
  }

  return (
    <React.Fragment>
      <CustomRow key="rw2">
        <CustomCol
          key="HeaderR1.1"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="Basic Alert">
            <Alert message="Success Text" type="success" />
            <Alert message="Info Text" type="info" />
            <Alert message="Warning Text" type="warning" />
            <Alert message="Error Text" type="error" />
          </StyledCard>
        </CustomCol>

        <CustomCol
          key="HeaderR1.1"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard
            title="With an Icon, Closable And Custom Action"
            bordered={false}
          >
            <Alert message="Success Tips" type="success" showIcon />
            <Alert message="Informational Notes" type="info" showIcon />
            <Alert message="Warning" type="warning" showIcon closable />
            <Alert message="Error" type="error" showIcon />
            <Alert
              message="Success Tips"
              description="Detailed description and advice about successful copywriting."
              type="success"
              showIcon
              closable
            />
            <Alert
              message="Error Text"
              showIcon
              description="Error Description Error Description Error Description Error Description"
              type="error"
              action={
                <StyledButton size="small" danger>
                  Detail
                </StyledButton>
              }
            />
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <Divider>Message & Notification</Divider>

      <CustomRow key="rw2">
        <CustomCol
          key="HeaderR1.2"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="Message">
            <StyledButton onClick={info}>Info</StyledButton>
            <StyledButton onClick={success}>Success</StyledButton>
            <StyledButton onClick={error}>Error</StyledButton>
            <StyledButton onClick={warning}>Warning</StyledButton>
            <StyledButton onClick={load}>Loading</StyledButton>
          </StyledCard>
        </CustomCol>

        <CustomCol
          key="HeaderR1.2"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="Notification" bordered={false}>
            <StyledButton onClick={() => successNotification()}>
              Success
            </StyledButton>
            <StyledButton onClick={() => infoNotification()}>Info</StyledButton>
            <StyledButton onClick={() => warningNotification()}>
              Warning
            </StyledButton>
            <StyledButton onClick={() => errorNotification()}>
              Error
            </StyledButton>
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <Divider>Popconfirm</Divider>

      <CustomRow key="rw3">
        <CustomCol
          key="HeaderR3.1"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="Simple Usage">
            <Popconfirm
              title="Are you sure"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
              overlayClassName={`${currentTheme.themestyle} ${currentTheme.themecolor}`}
            >
              <a href="#">Delete</a>
            </Popconfirm>
          </StyledCard>
        </CustomCol>

        <CustomCol
          key="HeaderR3.2"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="With Custom Button & Icon" bordered={false}>
            <Popconfirm
              title="Are you sure？"
              okText="Yes"
              cancelText="No"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              overlayClassName={`${currentTheme.themestyle} ${currentTheme.themecolor}`}
            >
              <a href="#">Delete</a>
            </Popconfirm>
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default Notifications;
