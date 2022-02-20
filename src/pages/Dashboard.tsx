import React, { FunctionComponent } from "react";
import { useHistory, useRouteMatch } from "react-router";
import CustomCol from "../component/atoms/Grid/CustomCol";
import CustomRow from "../component/atoms/Grid/CustomRow";
import { StyledCard } from "../style-component/CommonControls";
import {
  StyledWelcomeCard,
  StyledWelcomeCardContainer,
} from "../style-component/Home";
import ColumnChart from "./Chart/ColumnChart";
import DonutChart from "./Chart/DonutChart";
import PieChart from "./Chart/PieChart";
import { ReactComponent as Welcomeimg } from "../assest/images/Welcome.svg";
import { Typography } from "antd";
import SplineChart from "./Chart/SplineChart";
const { Title, Text } = Typography;

const Dashboard: React.FC<{}> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <>
      <CustomRow key="rw2">
        <CustomCol
          key="HeaderR1.1"
          xxl={16}
          xl={16}
          lg={16}
          md={24}
          sm={24}
          xs={24}
        >
          <StyledWelcomeCard className="welcomecard">
            <StyledWelcomeCardContainer>
              <div>
                <Title level={4}>Welcome back, Gajanan</Title>
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything
                </p>
              </div>

              <Welcomeimg width="360" height="250" />
            </StyledWelcomeCardContainer>
            {/*  */}
          </StyledWelcomeCard>
        </CustomCol>

        <CustomCol
          key="HeaderR1.2"
          xxl={8}
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
        >
          <StyledWelcomeCard>
            <DonutChart />
          </StyledWelcomeCard>
        </CustomCol>
      </CustomRow>

      <CustomRow key="rw3">
        <CustomCol
          key="HeaderR1.1"
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
        >
          <StyledCard bordered={false}>
            <ColumnChart />
          </StyledCard>
        </CustomCol>
        <CustomCol
          key="HeaderR1.2"
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
        >
          <StyledCard bordered={false}>
            <SplineChart />
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </>
  );
};

export default Dashboard;
