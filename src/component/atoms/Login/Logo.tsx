import React from "react";
import { ReactComponent as HeaderLogo } from "../../../assest/images/MainLogo.svg";

interface LogoProps {
  width: number;
  height: number;
}

const Logo = (props: LogoProps) => {
  return (
    <>
      <HeaderLogo
        width={props.width + "%"}
        height={props.height + "%"}
      ></HeaderLogo>
    </>
  );
};

export default Logo;
