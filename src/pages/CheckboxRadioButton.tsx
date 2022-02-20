import React, { useState } from "react";
import {
  Breadcrumb,
  Menu,
  Tooltip,
  Radio,
  Space,
  Checkbox,
  Divider,
  Switch,
} from "antd";
import {
  SearchOutlined,
  PoweroffOutlined,
  HomeOutlined,
  UserOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router";
import CustomCol from "../component/atoms/Grid/CustomCol";
import CustomRow from "../component/atoms/Grid/CustomRow";
import { StyledButton, StyledCard } from "../style-component/CommonControls";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

type Checkbox_RadiobuttonProps = {};

const CheckboxRadioButton: React.FC<Checkbox_RadiobuttonProps> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();

  const plainOptions = ["Apple", "Pear", "Orange"];

  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];

  const [checkAll, setcheckAll] = useState(false);
  const [isIndeterminate, setIndeterminate] = useState(false);
  const [checkedlist, setcheckedlist] = useState<CheckboxValueType[]>();

  const onChange = (arrcheckedValue: CheckboxValueType[]) => {
    setcheckedlist(arrcheckedValue);
    setIndeterminate(
      arrcheckedValue.length > 0 &&
        plainOptions.length !== arrcheckedValue.length
    );
    setcheckAll(plainOptions.length === arrcheckedValue.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setcheckedlist(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setcheckAll(e.target.checked);
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
            <Space direction="horizontal">
              <Checkbox>Checkbox</Checkbox>
              <Checkbox checked disabled>
                Checkbox-2
              </Checkbox>
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
          <StyledCard title="Checkox Group" bordered={false}>
            <Space direction="vertical">
              <Checkbox.Group options={plainOptions}></Checkbox.Group>
              <Checkbox.Group options={options}> </Checkbox.Group>
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
          <StyledCard title="Bread crumbs with drop down menu" bordered={false}>
            <Checkbox
              indeterminate={isIndeterminate}
              onChange={(e: CheckboxChangeEvent) => onCheckAllChange(e)}
              checked={checkAll}
            >
              Check all
            </Checkbox>
            <Divider />
            <Checkbox.Group
              options={plainOptions}
              onChange={(checkedVal) => onChange(checkedVal)}
              value={checkedlist}
            />
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <Divider>Radio Button</Divider>

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
            <Space direction="horizontal">
              <Radio>Radio Button</Radio>
              <Radio disabled checked>
                Radio Button-2
              </Radio>
              <Radio>Radio Button-3</Radio>
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
          <StyledCard title="RadionButton Group" bordered={false}>
            <Space direction="vertical">
              <Radio.Group>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Radio.Group>
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
          <StyledCard title="Radio button with solid type" bordered={false}>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>

            <Radio.Group defaultValue="c" style={{ marginTop: 16 }}>
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
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
          <StyledCard title="Size (Only available in solid)" bordered={false}>
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group defaultValue="a" style={{ marginTop: 16 }}>
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group
              defaultValue="a"
              size="small"
              style={{ marginTop: 16 }}
            >
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <Divider>Switch</Divider>

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
            <Space direction="horizontal">
              <Switch />
              <Switch disabled />
              <Switch disabled checked />
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
          <StyledCard title="Text,Icon,Loading" bordered={false}>
            <Space direction="horizontal">
              <Switch checkedChildren="1" unCheckedChildren="0" />
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
              <Switch loading defaultChecked />
            </Space>
          </StyledCard>
        </CustomCol>
      </CustomRow>

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
          <StyledCard title="Size">
            <Space direction="horizontal">
              <Switch />
              <Switch size="small" />
            </Space>
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default CheckboxRadioButton;
