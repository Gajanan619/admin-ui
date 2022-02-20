import React, { useState } from "react";
import {
  Breadcrumb,
  Menu,
  Tooltip,
  Radio,
  Space,
  Divider,
  Drawer,
  DrawerProps,
  RadioChangeEvent,
  Modal,
} from "antd";
import {
  SearchOutlined,
  PoweroffOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router";
import CustomCol from "../component/atoms/Grid/CustomCol";
import CustomRow from "../component/atoms/Grid/CustomRow";
import { StyledButton, StyledCard } from "../style-component/CommonControls";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { theme } from "../store/ActionTypes/Theme/Theme";
import { useSelector } from "react-redux";
import { RootState } from "../store/Reducer";

type DrawerModalProps = {};

const DrawerModal: React.FC<DrawerModalProps> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();
  const currentTheme: theme = useSelector(
    (state: RootState) => state.theme.Theme
  );

  const [showDrawer1, setShowDrawer1] = useState(false);

  const onShowDrawer1 = () => {
    setShowDrawer1(true);
  };
  const onDrawerClose1 = () => {
    setShowDrawer1(false);
  };

  const [showDrawer2, setShowDrawer2] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const onShowDrawer2 = () => {
    setShowDrawer2(true);
  };
  const onDrawerClose2 = () => {
    setShowDrawer2(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  //Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //2

  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

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
          <StyledCard title="Basic Usage">
            <StyledButton type="primary" onClick={onShowDrawer1}>
              Open
            </StyledButton>
            <Drawer
              title="Basic Drawer"
              placement="right"
              onClose={onDrawerClose1}
              visible={showDrawer1}
              className={currentTheme.themestyle}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
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
          <StyledCard title="Custom Placement" bordered={false}>
            <Space direction="horizontal">
              <Radio.Group value={placement} onChange={(e) => onChange(e)}>
                <Radio value="top">top</Radio>
                <Radio value="right">right</Radio>
                <Radio value="bottom">bottom</Radio>
                <Radio value="left">left</Radio>
              </Radio.Group>

              <StyledButton type="primary" onClick={onShowDrawer2}>
                Open
              </StyledButton>
            </Space>

            <Drawer
              title="Basic Drawer"
              placement={placement}
              onClose={onDrawerClose2}
              className={currentTheme.themestyle}
              visible={showDrawer2}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </StyledCard>
        </CustomCol>
      </CustomRow>
      <Divider>Modal</Divider>

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
          <StyledCard title="Modal">
            <StyledButton type="primary" onClick={showModal}>
              Open Modal
            </StyledButton>
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              className={`${currentTheme.themestyle} ${currentTheme.themecolor}`}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
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
          <StyledCard title="Modal with customized footer">
            <StyledButton type="primary" onClick={showModal2}>
              Open Modal with customized footer
            </StyledButton>
            <Modal
              visible={isModalVisible2}
              title="Title"
              onOk={handleOk2}
              onCancel={handleCancel2}
              className={`${currentTheme.themestyle} ${currentTheme.themecolor}`}
              footer={[
                <StyledButton key="back" onClick={handleCancel2}>
                  Return
                </StyledButton>,
                <StyledButton key="submit" type="primary" onClick={handleOk2}>
                  Submit
                </StyledButton>,
                <StyledButton key="link" type="primary" onClick={handleOk2}>
                  Search on Google
                </StyledButton>,
              ]}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default DrawerModal;
