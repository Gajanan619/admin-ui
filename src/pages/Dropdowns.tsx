import React, { useState } from "react";
import {
  Breadcrumb,
  Menu,
  Tooltip,
  Radio,
  Dropdown,
  Space,
  Button,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router";
import CustomCol from "../component/atoms/Grid/CustomCol";
import CustomRow from "../component/atoms/Grid/CustomRow";
import { StyledButton, StyledCard } from "../style-component/CommonControls";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { useSelector } from "react-redux";
import { RootState } from "../store/Reducer";

type DropDownProps = {};

const DropDowns: React.FC<DropDownProps> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();
  const currentTheme = useSelector((state: RootState) => state.theme.Theme);

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>
      <CustomRow key="rw2">
        <CustomCol key="HeaderR1.1" xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
          <StyledCard title="Basic Usage">
            <Space direction="horizontal">
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Hover me <DownOutlined />
                </a>
              </Dropdown>

              <Dropdown
                overlay={menu}
                trigger={["click"]}
                overlayClassName={currentTheme.themestyle}
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Click me <DownOutlined />
                </a>
              </Dropdown>
            </Space>
          </StyledCard>
        </CustomCol>

        <CustomCol
          key="HeaderR1.1"
          xxl={16}
          xl={16}
          lg={16}
          md={16}
          sm={16}
          xs={16}
        >
          <StyledCard title="Context Menu" bordered={false}>
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  overlay={menu}
                  placement="bottomLeft"
                  trigger={["click"]}
                  arrow
                  overlayClassName={currentTheme.themestyle}
                >
                  <Button>bottomLeft</Button>
                </Dropdown>
                <Dropdown
                  overlay={menu}
                  placement="bottomCenter"
                  arrow
                  overlayClassName={currentTheme.themestyle}
                >
                  <Button>bottomCenter</Button>
                </Dropdown>
                <Dropdown
                  overlay={menu}
                  placement="bottomRight"
                  arrow
                  overlayClassName={currentTheme.themestyle}
                >
                  <Button>bottomRight</Button>
                </Dropdown>

                <Dropdown
                  overlay={menu}
                  placement="topLeft"
                  trigger={["click"]}
                  arrow
                  overlayClassName={currentTheme.themestyle}
                >
                  <Button>topLeft</Button>
                </Dropdown>
                <Dropdown
                  overlay={menu}
                  placement="topCenter"
                  arrow
                  overlayClassName={currentTheme.themestyle}
                >
                  <Button>topCenter</Button>
                </Dropdown>
                <Dropdown
                  overlay={menu}
                  placement="topRight"
                  arrow
                  overlayClassName={currentTheme.themestyle}
                >
                  <Button>topRight</Button>
                </Dropdown>
              </Space>
            </Space>
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <CustomRow key="rw2">
        <CustomCol
          key="HeaderR1.2"
          xxl={24}
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
        >
          <StyledCard title="Bread crumbs with drop down menu" bordered={false}>
            <Dropdown overlay={menu} trigger={["contextMenu"]}>
              <div
                style={{
                  color: "#777",
                  background: "#f7f7f7",
                  textAlign: "center",
                  height: 200,
                  lineHeight: "200px",
                }}
              >
                Right Click on here
              </div>
            </Dropdown>
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default DropDowns;
