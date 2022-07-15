import React from "react";
import {
  SvContainer,
  SvCard,
  SvTitle,
  SvLogo,
  SvWrapper,
  SvInfoCard,
  SvInfoImage,
  SvInfo,
  SvTitleInfo,
  SvDescInfo,
  SvButton,
  ImgSV,
} from "../styles/styled-components/ServicesSection";
import service from "../public/images/bg.png";
import Image from "next/image";
import vrimage from "../public/images/vr.svg";
import arimage from "../public/images/ar.svg";
import vtimage from "../public/images/Frame.svg";

export const ServicesData = [
  {
    img: vrimage.src,
    name: "Virtual Reality",
    desc: "VR",
    button: "read more",
  },
  {
    img: arimage.src,
    name: "Argument Reality",
    desc: "AR",
    button: "read more",
  },
  {
    img: vtimage.src,
    name: "Virtual Tour",
    desc: "360",
    button: "read more",
  },
];

const ServicesSection = ({ data }) => {
  return (
    <SvContainer image={service.src} id='services' >
      <SvLogo >
        <ImgSV src="\images\logo.svg"/>
      </SvLogo>
      <SvTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</SvTitle>
      <SvWrapper >
          {ServicesData.map((service,index)=>{
              return(
                <SvInfoCard key={index}>
                <SvInfoImage src={service.img}/>
                <SvInfo>
                    <SvTitleInfo>{service.name}</SvTitleInfo>
                    <SvDescInfo>{service.desc}</SvDescInfo>
                    <SvButton>{service.button}</SvButton>
                </SvInfo>
            </SvInfoCard>
          );
        })}
      </SvWrapper>
    </SvContainer>

  );
};

export default ServicesSection;
