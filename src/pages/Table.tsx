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
import { Radio, RadioChangeEvent, Space, Tabs, Tag, Table } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { TabsPosition } from "antd/lib/tabs";
import { FiEdit, FiTrash2 } from "react-icons/fi";

type TableProps = {};

const Tables: React.FC<TableProps> = (props) => {
  const history = useHistory();
  const match = useRouteMatch();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? "success" : "processing";
            if (tag === "loser") {
              color = "error";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space>
          <StyledButton type="link">
            <FiEdit fontSize="20" />
          </StyledButton>
          <StyledButton danger type="link">
            <FiTrash2 fontSize="20" />
          </StyledButton>
        </Space>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

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
          <StyledCard title="Basic Usage">
            <Table
              dataSource={dataSource}
              columns={columns}
              bordered
              pagination={false}
            />
          </StyledCard>
        </CustomCol>
      </CustomRow>
    </React.Fragment>
  );
};

export default Tables;
