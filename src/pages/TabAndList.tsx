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
import { Radio, RadioChangeEvent, Space, Tabs } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { TabsPosition } from "antd/lib/tabs";

const { TabPane } = Tabs;

type TabAndListProps = {};

const TabAndList: React.FC<TabAndListProps> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();

  const [tabSize, settabSize] = useState<SizeType>("middle");
  const onTabSizeChange = (e: RadioChangeEvent) => {
    settabSize(e.target.value);
  };

  const [tabPosition, settabPosition] = useState<TabsPosition>("left");

  const changeTabPosition = (e: RadioChangeEvent) => {
    settabPosition(e.target.value);
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
            <Space direction="vertical" size={24}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">
                  Tab 1
                </TabPane>
                <TabPane tab="Tab 2" disabled key="2">
                  Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                  Tab 3
                </TabPane>
              </Tabs>

              <Tabs defaultActiveKey="1" type="card">
                <TabPane tab="Card Tab 1" key="1">
                  Content of card tab 1
                </TabPane>
                <TabPane tab="Card Tab 2" key="2">
                  Content of card tab 2
                </TabPane>
                <TabPane tab="Card Tab 3" key="3">
                  Content of card tab 3
                </TabPane>
              </Tabs>
            </Space>
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
            <Tabs defaultActiveKey="2">
              <TabPane
                tab={
                  <span>
                    <AppleOutlined />
                    Tab 1
                  </span>
                }
                key="1"
              >
                Tab 1
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <AndroidOutlined />
                    Tab 2
                  </span>
                }
                key="2"
              >
                Tab 2
              </TabPane>
            </Tabs>
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
          <StyledCard title="Size">
            <Space direction="vertical" size={24}>
              <Radio.Group
                value={tabSize}
                onChange={(e: RadioChangeEvent) => onTabSizeChange(e)}
              >
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="middle">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>

              <Space direction="vertical" size={24}>
                <Tabs defaultActiveKey="1" size={tabSize}>
                  <TabPane tab="Tab 1" key="1">
                    Tab 1
                  </TabPane>
                  <TabPane tab="Tab 2" disabled key="2">
                    Tab 2
                  </TabPane>
                  <TabPane tab="Tab 3" key="3">
                    Tab 3
                  </TabPane>
                </Tabs>

                <Tabs defaultActiveKey="1" type="card" size={tabSize}>
                  <TabPane tab="Card Tab 1" key="1">
                    Content of card tab 1
                  </TabPane>
                  <TabPane tab="Card Tab 2" key="2">
                    Content of card tab 2
                  </TabPane>
                  <TabPane tab="Card Tab 3" key="3">
                    Content of card tab 3
                  </TabPane>
                </Tabs>
              </Space>
            </Space>
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
          <StyledCard title="Tab Position/Direction">
            <Space style={{ marginBottom: 24 }}>
              Tab position:
              <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                <Radio.Button value="top">top</Radio.Button>
                <Radio.Button value="bottom">bottom</Radio.Button>
                <Radio.Button value="left">left</Radio.Button>
                <Radio.Button value="right">right</Radio.Button>
              </Radio.Group>
            </Space>
            <Tabs tabPosition={tabPosition}>
              <TabPane tab="Tab 1" key="1">
                Content of Tab 1
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab 3
              </TabPane>
            </Tabs>
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default TabAndList;
