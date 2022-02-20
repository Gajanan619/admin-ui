import React, { useState } from "react";
import { Breadcrumb, Menu, Tooltip, Radio } from "antd";
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

type BreadcrumbProps = {};

const Breadcrumbs: React.FC<BreadcrumbProps> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          General
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Layout
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Navigation
        </a>
      </Menu.Item>
    </Menu>
  );

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
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application Center</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application List</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
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
          <StyledCard title="With an Icon" bordered={false}>
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <UserOutlined />
                <span>Application List</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
          </StyledCard>
        </CustomCol>
      </CustomRow>

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
          <StyledCard title="Bread crumbs with drop down menu" bordered={false}>
            <Breadcrumb>
              <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Component</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item overlay={menu}>
                <a href="">General</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Button</Breadcrumb.Item>
            </Breadcrumb>
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
          <StyledCard title="Configuring the Separator" bordered={false}>
            <Breadcrumb separator=">">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
              <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default Breadcrumbs;
