import React from "react";
import {
  Footer,
  BottomBar,
  Menu,
  MenuHead,
  Policy,
  PolicyRow,
  Imgfooter,
  Menutitle,
  Img,
} from "../styles/styled-components/FootterStyle";

export default function Footers() {
  return (
    <>
      
        <Footer>
          <BottomBar>
            <Menu>
              <Img src="\images\logo.svg" />
            </Menu>
            <Menu>
              <MenuHead>Address</MenuHead>

              <Menutitle>
                236 Sathorn Mansion 1 Alley, <br />
                khwaeng Khlong Ton Sai <br />
                Khet Klong San, Bangkok <br />
                10600 Thailand
              </Menutitle>
            </Menu>
            <Menu>
              <MenuHead>Contact</MenuHead>
              <Menutitle>
                Time : 10:00 - 19:00 น. <br />
                Tel : 0000000000 <br />
                Email : <br />
                Line : @100vhgrv
              </Menutitle>
            </Menu>
            <Policy>
              <PolicyRow>follow</PolicyRow>
              <PolicyRow>
                <Imgfooter src="\images\icons\facebook.svg" />
                <Imgfooter src="\images\icons\telegram.svg" />
                <Imgfooter src="\images\icons\line.svg" />
                <Imgfooter src="\images\icons\discord.svg" />
              </PolicyRow>
              <PolicyRow>© Copyright 2022 metaverseXR</PolicyRow>
            </Policy>
          </BottomBar>
        </Footer>
      
    </>
  );
}
