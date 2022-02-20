import React, { useState } from "react";
import {
  Breadcrumb,
  Menu,
  Tooltip,
  Radio,
  Divider,
  Slider,
  Switch,
  Rate,
  RateProps,
  Progress,
  DatePicker,
  Space,
  RadioChangeEvent,
  TimePicker,
} from "antd";
import {
  SearchOutlined,
  PoweroffOutlined,
  HomeOutlined,
  UserOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router";
import CustomCol from "../component/atoms/Grid/CustomCol";
import CustomRow from "../component/atoms/Grid/CustomRow";
import { StyledButton, StyledCard } from "../style-component/CommonControls";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import moment from "moment";
import { useSelector } from "react-redux";
import { RootState } from "../store/Reducer";
const { RangePicker } = DatePicker;
type PickerProps = {};

const Pickers: React.FC<PickerProps> = (props) => {
  const [size, setsize] = useState<SizeType>("middle");
  const currentTheme = useSelector((state: RootState) => state.theme.Theme);

  const handleSizeChange = (e: RadioChangeEvent) => {
    setsize(e.target.value);
  };

  function range(start: number, end: number) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  function disabledDate(current: any) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }

  function disabledRangeTime(_: any, type: any) {
    if (type === "start") {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  }

  return (
    <React.Fragment>
      <CustomRow key="rw1">
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
            <Space direction="vertical">
              <Space direction="horizontal">
                <DatePicker
                  dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                />
                <DatePicker
                  picker="week"
                  dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                />
                <DatePicker
                  picker="month"
                  dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                />
              </Space>
              <Space direction="horizontal">
                <DatePicker
                  picker="quarter"
                  dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                />
                <DatePicker
                  picker="year"
                  dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                />
              </Space>
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
          <StyledCard title="Range Picker">
            <Space direction="vertical">
              <Space direction="horizontal">
                <RangePicker
                  dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                />
                <RangePicker
                  showTime
                  dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                />
              </Space>

              <Space direction="horizontal">
                <RangePicker
                  picker="week"
                  dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                />
                <RangePicker
                  picker="month"
                  dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                />
              </Space>

              <Space direction="horizontal">
                <RangePicker
                  picker="year"
                  dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                />
              </Space>
            </Space>
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
          <StyledCard title="Disabled Date & Time">
            <Space direction="vertical" size={12}>
              <DatePicker
                format="YYYY-MM-DD" dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
                disabledDate={(current: any) => disabledDate(current)}
              />
              <DatePicker picker="month" disabledDate={disabledDate} dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}/>
              <RangePicker disabledDate={disabledDate} dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}/>
              <RangePicker
                disabledDate={disabledDate}
                disabledTime={disabledRangeTime}
                showTime={{
                  hideDisabledOptions: true,
                  defaultValue: [
                    moment("00:00:00", "HH:mm:ss"),
                    moment("11:59:59", "HH:mm:ss"),
                  ],
                }}
                format="YYYY-MM-DD HH:mm:ss" dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
              />
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
          <StyledCard title="Size">
            <Space direction="vertical">
              <Radio.Group value={size} onChange={handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <DatePicker size={size} dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}/>
              <DatePicker size={size} picker="month" dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}/>
              <RangePicker size={size} dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}/>
              <DatePicker size={size} picker="week" dropdownClassName={`${currentTheme.themestyle} ${currentTheme.themecolor} `}/>
            </Space>
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <Divider>Time Picker</Divider>

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
          <StyledCard title="Basic Usage">
            <Space direction="horizontal">
              <TimePicker defaultOpenValue={moment("00:00:00", "HH:mm:ss")} />
              <TimePicker
                defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                disabled
              />
            </Space>
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
          <StyledCard title="Size">
            <Space direction="horizontal">
              <TimePicker
                defaultValue={moment("12:08:23", "HH:mm:ss")}
                size="large"
              />
              <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} />
              <TimePicker
                defaultValue={moment("12:08:23", "HH:mm:ss")}
                size="small"
              />
            </Space>
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <CustomRow key="rw4">
        <CustomCol
          key="HeaderR4.1"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="Interval Option & 12-Hour Format">
            <Space direction="vertical">
              <TimePicker minuteStep={15} secondStep={10} hourStep={2} />
              <Space direction="horizontal">
                <TimePicker use12Hours />
                <TimePicker use12Hours format="h:mm:ss A" />
                <TimePicker use12Hours format="h:mm a" />
              </Space>
            </Space>
          </StyledCard>
        </CustomCol>

        <CustomCol
          key="HeaderR4.2"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="Size">
            <TimePicker.RangePicker />
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default Pickers;
