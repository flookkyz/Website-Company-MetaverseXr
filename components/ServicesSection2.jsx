import React from "react";
import {
  Sv2Container,
  Sv2Row,
  Sv2Title,
  Sv2ColumnL,
  Sv2ColumnR,
  FrameImage,
  BtnSv2,
  Sv2P1,
  Sv2TitleP,
  Sv2P2,
} from "../styles/styled-components/servicesSection2";
import Image from "next/image";

const ServicesSection2 = () => {
  return (
    <Sv2Container>
      <Sv2Row>
        <Sv2ColumnL>
          <Sv2Title>From idea to the world of virtual reality</Sv2Title>
          <Sv2P1>
            Our company foundation starts from the idea that no one can make
            great content and real adrenaline stimulate VR Esport game until we
            notice that if we can make a great game from scratch, we can do
            anything on VR. That makes us expand to Augmented Game and VR Studio
            finally.
          </Sv2P1>
          <Sv2TitleP>What next?</Sv2TitleP>
          <Sv2P2>
            Start from making VR game, we expect to expand beyond any area of AR
            and VR from commercial use, Government project and all VR/AR
            customize.
          </Sv2P2>
          <BtnSv2>Get Started Now</BtnSv2>
        </Sv2ColumnL>
        <Sv2ColumnR>
          <FrameImage>
            <Image
              src="/images/Frame.png"
              width="363"
              height="440"
              quality="100%"
            />
          </FrameImage>
        </Sv2ColumnR>
      </Sv2Row>
    </Sv2Container>
  );
};

export default ServicesSection2;
