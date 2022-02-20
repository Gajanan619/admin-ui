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
  Tag,
  Space,
} from "antd";
import {
  SearchOutlined,
  PoweroffOutlined,
  SyncOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  CloseCircleOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  CheckCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router";
import CustomCol from "../component/atoms/Grid/CustomCol";
import CustomRow from "../component/atoms/Grid/CustomRow";
import { StyledButton, StyledCard } from "../style-component/CommonControls";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { NavLink } from "react-router-dom";

type OtherUtilitiesProps = {};

const OtherUtilities: React.FC<OtherUtilitiesProps> = (props) => {
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

  function formatter(value: any) {
    return `${value}%`;
  }

  const [reverse, setreverse] = useState(false);
  const handleReverseChange = () => {
    setreverse(!reverse);
  };

  const style = {
    display: "inline-block",
    height: 300,
    marginLeft: 70,
  };

  //Rating
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [ratingVal, setratingVal] = useState(3);

  const handleChange = (val: number) => {
    setratingVal(val);
  };

  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

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
            <Breadcrumb>
              <Breadcrumb.Item>
                <NavLink to="/Home">Home</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/">Application Center</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/">Application List</NavLink>
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

      <Divider>Slider</Divider>

      <CustomRow key="rw3">
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
            <Slider tipFormatter={formatter} defaultValue={30} />
            <br />
            <Slider defaultValue={30} disabled />
            <br />
            <Slider range defaultValue={[20, 50]} />
            <br />
            <Slider defaultValue={30} reverse={reverse} />
            <br />
            Reversed:{" "}
            <Switch
              size="small"
              checked={reverse}
              onChange={handleReverseChange}
            />
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
            <div style={style}>
              <Slider vertical defaultValue={30} />
            </div>
            <div style={style}>
              <Slider vertical range step={10} defaultValue={[20, 50]} />
            </div>
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <Divider>Rating</Divider>

      <CustomRow key="rw4">
        <CustomCol
          key="HeaderR1.2"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="Basic" bordered={false}>
            <Rate />
            <br />
            <br />
            <Rate allowHalf defaultValue={2.5} />
            <br />
            <br />
            <Rate disabled value={2} />
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
          <StyledCard title="Show copywriting" bordered={false}>
            <Rate
              tooltips={desc}
              onChange={(val) => handleChange(val)}
              value={ratingVal}
            />
            {ratingVal ? (
              <span className="ant-rate-text">{desc[ratingVal - 1]}</span>
            ) : (
              ""
            )}{" "}
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <Divider>Progressbar</Divider>

      <CustomRow key="rw5">
        <CustomCol
          key="HeaderR1.2"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="Basic" bordered={false}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
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
          <StyledCard title="Show copywriting" bordered={false}>
            <Space direction="horizontal">
              <Progress type="circle" percent={70} status="exception" />
              <Progress type="circle" percent={100} />
              <Progress type="dashboard" percent={75} />
              <Progress type="dashboard" percent={75} gapDegree={30} />
            </Space>
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <CustomRow key="rw6">
        <CustomCol
          key="HeaderR1.2"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="Basic" bordered={false}>
            <Progress percent={30} size="small" />
            <Progress percent={50} size="small" status="active" />
            <Progress percent={70} size="small" status="exception" />
            <Progress percent={100} size="small" />
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
          <StyledCard title="Show copywriting" bordered={false}>
            <Space direction="horizontal" >
              <Progress type="circle" percent={30} width={80} />
              <Progress
                type="circle"
                percent={70}
                width={80}
                status="exception"
              />
              <Progress type="circle" percent={100} width={80} />
              <Progress type="dashboard" percent={75} width={80} />
              <Progress
                type="dashboard"
                percent={75}
                gapDegree={30}
                width={80}
              />
            </Space>
          </StyledCard>
        </CustomCol>
      </CustomRow>

      <Divider>Tags</Divider>

      <CustomRow key="rw7">
        <CustomCol
          key="HeaderR7.1"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="Basic Without icon" bordered={false}>
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="default">default</Tag>
          </StyledCard>
        </CustomCol>

        <CustomCol
          key="HeaderR7.2"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <StyledCard title="With icon" bordered={false}>
            <Tag icon={<CheckCircleOutlined />} color="success">
              success
            </Tag>
            <Tag icon={<SyncOutlined spin />} color="processing">
              processing
            </Tag>
            <Tag icon={<CloseCircleOutlined />} color="error">
              error
            </Tag>
            <Tag icon={<ExclamationCircleOutlined />} color="warning">
              warning
            </Tag>
            <Tag icon={<ClockCircleOutlined />} color="default">
              waiting
            </Tag>
            <Tag icon={<MinusCircleOutlined />} color="default">
              stop
            </Tag>
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default OtherUtilities;
