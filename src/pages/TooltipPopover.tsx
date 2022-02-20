import React, { useState } from "react";
import {
  Breadcrumb,
  Menu,
  Tooltip,
  Radio,
  Space,
  RadioChangeEvent,
  Popover,
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
import { RootState } from "../store/Reducer";
import { theme } from "../store/ActionTypes/Theme/Theme";
import { useSelector } from "react-redux";

type TooltipPopoverProps = {};

const TooltipPopover: React.FC<TooltipPopoverProps> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();

  const text = <span>prompt text</span>;

  const popoverContent = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const [trigger, settrigger] = useState("hover");
  const [triggerPopover, settriggerPopover] = useState("hover");

  const handletriggerChange = (e: RadioChangeEvent) => {
    settrigger(e.target.value);
  };

  const handlePopovertriggerChange = (e: RadioChangeEvent) => {
    settriggerPopover(e.target.value);
  };
  const currentTheme: theme = useSelector(
    (state: RootState) => state.theme.Theme
  );
  return (
    <React.Fragment>
      <CustomRow key="rw2">
        <CustomCol
          key="HeaderR1.1"
          xxl={24}
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
        >
          <StyledCard title="Tooltip">
            <Space direction="vertical">
              <Radio.Group
                value={trigger}
                onChange={(e: RadioChangeEvent) => handletriggerChange(e)}
              >
                <Radio value="hover">Hover</Radio>
                <Radio value="click">Click</Radio>
              </Radio.Group>
              <br />
              <Space direction="horizontal" wrap>
                <Tooltip
                  placement="topRight"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Top Right</StyledButton>
                </Tooltip>
                <Tooltip
                  placement="top"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Top</StyledButton>
                </Tooltip>
                <Tooltip
                  placement="topLeft"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Top Left</StyledButton>
                </Tooltip>

                <Tooltip
                  placement="bottom"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Bottom</StyledButton>
                </Tooltip>
                <Tooltip
                  placement="bottomRight"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Bottom Right</StyledButton>
                </Tooltip>
                <Tooltip
                  placement="bottomLeft"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Bottom Left</StyledButton>
                </Tooltip>
              </Space>
              <Space direction="horizontal">
                <Tooltip
                  placement="left"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Left</StyledButton>
                </Tooltip>
                <Tooltip
                  placement="leftTop"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Left Top</StyledButton>
                </Tooltip>
                <Tooltip
                  placement="leftBottom"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Left Bottom</StyledButton>
                </Tooltip>

                <Tooltip
                  placement="right"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Right</StyledButton>
                </Tooltip>
                <Tooltip
                  placement="rightTop"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Right Top</StyledButton>
                </Tooltip>
                <Tooltip
                  placement="rightBottom"
                  title={text}
                  trigger={trigger}
                  overlayClassName={currentTheme.themestyle}
                >
                  <StyledButton>Right Bottom</StyledButton>
                </Tooltip>
              </Space>
            </Space>
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <CustomRow key="rw2">
        <CustomCol
          key="HeaderR1.1"
          xxl={24}
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
        >
          <StyledCard title="Popover" bordered={false}>
            <Space direction="vertical">
              <Radio.Group
                value={triggerPopover}
                onChange={(e: RadioChangeEvent) =>
                  handlePopovertriggerChange(e)
                }
              >
                <Radio value="hover">Hover</Radio>
                <Radio value="click">Click</Radio>
              </Radio.Group>
              <br />
              <Space direction="horizontal" wrap>
                <Popover
                  placement="topRight"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Top Right</StyledButton>
                </Popover>
                <Popover
                  placement="top"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Top</StyledButton>
                </Popover>
                <Popover
                  placement="topLeft"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Top Left</StyledButton>
                </Popover>

                <Popover
                  placement="bottom"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Bottom</StyledButton>
                </Popover>
                <Popover
                  placement="bottomRight"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Bottom Right</StyledButton>
                </Popover>
                <Popover
                  placement="bottomLeft"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Bottom Left</StyledButton>
                </Popover>
              </Space>
              <Space direction="horizontal">
                <Popover
                  placement="left"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Left</StyledButton>
                </Popover>
                <Popover
                  placement="leftTop"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Left Top</StyledButton>
                </Popover>
                <Popover
                  placement="leftBottom"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Left Bottom</StyledButton>
                </Popover>

                <Popover
                  placement="right"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Right</StyledButton>
                </Popover>
                <Popover
                  placement="rightTop"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Right Top</StyledButton>
                </Popover>
                <Popover
                  placement="rightBottom"
                  title="Title"
                  trigger={triggerPopover}
                  overlayClassName={currentTheme.themestyle}
                  content={popoverContent}
                >
                  <StyledButton>Right Bottom</StyledButton>
                </Popover>
              </Space>
            </Space>
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default TooltipPopover;
