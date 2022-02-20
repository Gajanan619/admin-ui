import React, { FunctionComponent, useState } from "react";
import { Button, Tooltip, Radio, RadioChangeEvent } from "antd";
import { SearchOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router";
import CustomCol from "../component/atoms/Grid/CustomCol";
import CustomRow from "../component/atoms/Grid/CustomRow";
import { StyledButton, StyledCard } from "../style-component/CommonControls";
import { SizeType } from "antd/lib/config-provider/SizeContext";

type ButtonProps = {};

const Buttons: React.FC<ButtonProps> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();

  const [size, setSize] = useState<SizeType>("middle");

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const [Loading, setLoading] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    try {
      const newLoading = [...Loading];
      newLoading[index] = true;
      setLoading(newLoading);

      setTimeout(() => {
        const newLoading = [...Loading];
        newLoading[index] = false;
        setLoading(newLoading);
      }, 6000);
    } catch (error) {
      console.log(error);
    }
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
          <StyledCard title="Button Types">
            <StyledButton disabled type="primary">
              Primary Button
            </StyledButton>
            <StyledButton disabled>Default Button</StyledButton>
            <StyledButton type="dashed">Dashed Button</StyledButton>
            <br />
            <StyledButton type="text">Text Button</StyledButton>
            <StyledButton type="link">Link Button</StyledButton>
            <br />

            <br />

            <StyledButton type="primary" danger>
              Primary
            </StyledButton>
            <StyledButton danger>Default</StyledButton>
            <StyledButton type="dashed" danger>
              Dashed
            </StyledButton>
            <br />
            <StyledButton type="text" danger>
              Text
            </StyledButton>
            <StyledButton type="link" danger>
              Link
            </StyledButton>

            <StyledButton type="primary" block>
              Primary
            </StyledButton>
            <StyledButton block>Default</StyledButton>
            <StyledButton type="dashed" block>
              Dashed
            </StyledButton>
            <StyledButton type="link" block>
              Link
            </StyledButton>
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
          <StyledCard title="Button Size" bordered={false}>
            <Radio.Group onChange={(e) => handleSizeChange(e)} value={size}>
              <Radio value="large">Large</Radio>
              <Radio value="middle" checked>
                Default
              </Radio>
              <Radio value="small">Small</Radio>
            </Radio.Group>

            <br />
            <br />
            <StyledButton type="primary" size={size}>
              Primary
            </StyledButton>
            <StyledButton size={size}>Default</StyledButton>
            <StyledButton type="dashed" size={size}>
              Dashed
            </StyledButton>
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
          <StyledCard title="Button With Icon" bordered={false}>
            <Tooltip title="search">
              <StyledButton
                type="primary"
                shape="circle"
                icon={<SearchOutlined />}
                size="large"
              />
            </Tooltip>

            <StyledButton icon={<SearchOutlined />} size="large">
              Search
            </StyledButton>
            <Tooltip title="search">
              <StyledButton
                type="dashed"
                shape="circle"
                icon={<SearchOutlined />}
                size="large"
              />
            </Tooltip>
            <StyledButton type="dashed" icon={<SearchOutlined />} size="large">
              Search
            </StyledButton>
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
          <StyledCard title="Button With Loading" bordered={false}>
            <StyledButton
              type="primary"
              loading={Loading[0]}
              onClick={() => enterLoading(0)}
            >
              Click me!
            </StyledButton>
            <StyledButton
              type="primary"
              icon={<PoweroffOutlined />}
              loading={Loading[1]}
              onClick={() => enterLoading(1)}
            >
              Click me!
            </StyledButton>
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default Buttons;
