import React from "react";
import { Col } from "antd";
import { CustomColProps } from "../../../store/Types/ControlProps";

export default function CustomCol(props: CustomColProps) {
  return (
    <>
      <Col
        xs={props.xs}
        sm={props.sm}
        md={props.md}
        lg={props.lg}
        xl={props.xl}
        xxl={props.xxl}
        className={props.classname ? props.classname : ""}
      >
        {props.children}
      </Col>
    </>
  );
}
