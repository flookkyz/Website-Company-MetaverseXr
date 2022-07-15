import React from "react";
import { useState } from "react";
import styles from "../styles/Portfolio.module.css";
import styled from "styled-components";
import {
  Ht1,
  Ht2,
  Boxslider,
  Slidermap,
  Sliderborder,
  SliderTittle,
  Button1,
  Button2,
  Img,
  Container,
  Contact,
  ContactBar,
  Menu1,
  Menu2,
  ContactTittleL,
  ContactTittleR,
  ImgContact,
  ImgContacttop,
  Input,
  Boxpopup,
  Imgpopup,
  Popuph4,
  Popuph6,
  Closebtn,
} from "../styles/styled-components/PortfolioStyle";
// import carousel lib goes here //
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import popup lib goes here //
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// import images Portfolio goes here //
import Tiger from "../public/images/5 TIGERS CHINESE NEW YEAR.png";
import Openhouse from "../public/images/OPEN HOUSE IN METAVERSE.png";
import Themall from "../public/images/THE MALL GROUP.png";
import Townhall from "../public/images/TOWNHALL X METAVERSE.png";
import Virual from "../public/images/VIRTUAL TELEMEDICAL.png";
import World from "../public/images/World First jurasic Vr tour.png";

// import images popup goes here //
import Themallpopuplong from "../public/images/popup/the-mall/them-mall-long--1.jpg";
import Themallpopup1 from "../public/images/popup/the-mall/them-mall-1.jpg";
import Themallpopup2 from "../public/images/popup/the-mall/them-mall-2.jpg";

export const Portdata = [
  {
    img: Tiger.src,
    name: "5 TIGERS CHINESE NEW YEAR",
    button: "Readmore",
    alt: "Tiger",
  },
  {
    img: Openhouse.src,
    name: "OPEN HOUSE IN METAVERSE",
    button: "Readmore",
    alt: "Openhouse",
  },
  {
    img: Themall.src,
    name: "THE MALL GROUP",
    button: "Readmore",
    alt: "Themall",
    bannerimg: Themallpopuplong.src,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,delectus saepe repudiandae explicabo nemo nam libero ad,doloribus, voluptas rem alias. Vitae?",
  },
  {
    img: Townhall.src,
    name: "TOWNHALL X METAVERSE",
    button: "Readmore",
    alt: "Townhall",
  },
  {
    img: Virual.src,
    name: "VIRTUAL TELEMEDICAL",
    button: "Readmore",
    alt: "Virual",
  },
  {
    img: World.src,
    name: "World First jurasic Vr tour",
    button: "Readmore",
    alt: "World",
  },
];

const StyledPopup = styled(Popup)`
  &-content {
    width: 1440px;
    height: 800px;
    background: #120b24;
    border-radius: 6px;
    border: none;
    text-align: center;
    @media screen and (max-width: 768px) {
      width: 650px;
    }
    @media screen and (max-width: 428px) {
      width: 350px;
      height: 500px;
    }
  }
`;

export default function Portfolio() {
  const [imageIndex, setImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  var settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    arrows: false,
    centerPadding: 0,
    slidesToShow: 3,
    speed: 500,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 913,
        settings: {
          slidesToShow: 1,
          centerPadding: 20,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <Container id="work">
      <Ht1>Portfolio</Ht1>
      <center>
        <Boxslider>
          <Slider {...settings}>
            {Portdata.map((images, index) => (
              <Slidermap
                key={index}
                className={
                  index === imageIndex
                    ? styles.slide & styles.activeSlide
                    : styles.slide
                }
              >
                <br />
                <Sliderborder>
                  <Img src={images.img} alt={images} />
                  <SliderTittle>{images.name}</SliderTittle>
                  <StyledPopup
                    trigger={<Button1>{images.button}</Button1>}
                    modal
                    nested
                  >
                    {(close) => (
                      <div>
                        <Closebtn onClick={close}>&times;</Closebtn>
                        <Popuph4>{images.name}</Popuph4>
                        <Imgpopup src={images.img} alt={images} />
                        <Popuph6>{images.desc}</Popuph6>
                      </div>
                    )}
                  </StyledPopup>
                </Sliderborder>
                <br />
              </Slidermap>
            ))}
          </Slider>
        </Boxslider>
      </center>
      {/* Contact */}
      <Ht2 id="contacts">Contact</Ht2>
      <Contact>
        <ContactBar>
          <Menu1>
            <ImgContacttop src="\images\icons\location.svg" />
            <ContactTittleL>
              36 Sathorn Mansion 1 Alley,Khwaeng khlong Ton Sai <br />
              Khet Khlong San, Bangkok <br /> 10600 Thailand
            </ContactTittleL>
            <br />
            <ImgContact src="\images\icons\call.svg" />
            <ContactTittleL>Tel. 0000000</ContactTittleL>
            <br />
            <ImgContact src="\images\icons\clock.svg" />
            <ContactTittleL>เวลาทำการ 10:00 - 19:00น.</ContactTittleL>
            <br />
            <ImgContact src="\images\icons\mail.svg" />
            <ContactTittleL>Email xxx@mail.com</ContactTittleL>
            <br />
            <ImgContact src="\images\icons\line.svg" />
            <ContactTittleL>@100yhgrv</ContactTittleL>
          </Menu1>
          <Menu2>
            <ContactTittleR>Subject</ContactTittleR>
            <Input />
            <ContactTittleR>Name</ContactTittleR>
            <Input />
            <ContactTittleR>Email</ContactTittleR>
            <Input />
            <ContactTittleR>Message</ContactTittleR>
            <Input />
            <Button2>SEND</Button2>
          </Menu2>
        </ContactBar>
      </Contact>
    </Container>
  );
}
