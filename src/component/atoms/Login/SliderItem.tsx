import React from "react";
import {
  StyledSliderContent,
  StyledSliderContentText,
  StyledSliderImage,
  StyledSliderTitleText,
} from "../../../style-component/Login";

interface props {
  imageSrc: string;
  title: string;
  content: string;
}

const SliderItem = (props: props) => {
  return (
    <StyledSliderContent>
      <StyledSliderImage
        src={props.imageSrc}
        alt="Slider Image"
      ></StyledSliderImage>
      <StyledSliderTitleText>{props.title}</StyledSliderTitleText>
      <StyledSliderContentText>{props.content}</StyledSliderContentText>
    </StyledSliderContent>
  );
};

export default SliderItem;
