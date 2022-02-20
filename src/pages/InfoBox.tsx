import React, { useState } from "react";
import {
  SearchOutlined,
  PoweroffOutlined,
  HomeOutlined,
  UserOutlined,
  AppleOutlined,
  AndroidOutlined,
} from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router";
import CustomCol from "../component/atoms/Grid/CustomCol";
import CustomRow from "../component/atoms/Grid/CustomRow";
import { StyledButton, StyledCard } from "../style-component/CommonControls";
import { Radio, RadioChangeEvent, Space, Tabs, Typography } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { TabsPosition } from "antd/lib/tabs";
import { StyledInfobox } from "../style-component/Infobox";
import { FiMail } from "react-icons/fi";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

type InfoBoxProps = {};

const InfoBox: React.FC<InfoBoxProps> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <React.Fragment>
      <CustomRow key="rw2">
        {/* <CustomCol
          key="HeaderR1.1"
          xxl={8}
          xl={8}
          lg={8}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledInfobox className="infobox info-1">
            <div className="icon">
              <FiMail />
            </div>
            <div className="content">
              <Title level={5}>New Order</Title>
              <Text>125</Text>
            </div>
          </StyledInfobox>
        </CustomCol> */}

        <CustomCol
          key="HeaderR1.2"
          xxl={8}
          xl={8}
          lg={8}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledInfobox className="infobox info-2">
            <div className="icon">
              <FiMail />
            </div>
            <div className="content">
              <Title level={5}>New Order</Title>
              <Text>125</Text>
            </div>
          </StyledInfobox>
        </CustomCol>

        <CustomCol
          key="HeaderR1.3"
          xxl={8}
          xl={8}
          lg={8}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledInfobox className="infobox info-3">
            <div className="icon">
              <FiMail />
            </div>
            <div className="content">
              <Title level={5}>New Order</Title>
              <Text>125</Text>
            </div>
          </StyledInfobox>
        </CustomCol>

        <CustomCol
          key="HeaderR1.3"
          xxl={8}
          xl={8}
          lg={8}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledInfobox className="infobox info-4">
            <div className="content">
              <Title level={5}>New Order</Title>
            </div>
            <div className="icon">
              <Text>125</Text>
              <FiMail />
            </div>
          </StyledInfobox>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default InfoBox;
