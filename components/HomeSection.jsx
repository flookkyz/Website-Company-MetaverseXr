import React from "react";
import {
  HomeSec,
  HomeRow,
  HomeColumn,
  TextWrapper,
  TitleHome,
  DescHome,
  HomeBtn,
} from "../styles/styled-components/HomeSection.Style";
import citybanner from "../public/images/citybanner.png";

const HomeSection = () => {
  return (
    <HomeSec image={citybanner.src} id = 'home'>
      <HomeRow>
        <HomeColumn>
          <TextWrapper>
            <TitleHome>Explore the Futer of the</TitleHome>
            <HomeBtn>Get App</HomeBtn>
          </TextWrapper>
        </HomeColumn>
      </HomeRow>
    </HomeSec>
  );
};

export default HomeSection;
