import React from "react";
import { Ht1, Tiitle, Container } from "../styles/styled-components/AboutStyle";
import banner from "../public/images/about.png";

export default function About() {
    return (
        <Container image={banner.src} id = 'about'>
            <Ht1>What We Do?</Ht1>
            <center>
            <Tiitle>We Are The World Emerging VR Game Developer And Thailand
            Prospected Leading VR Studio. The Area We Will Cover Is
            VR Game Developer, Mobile Game & Apps, Augmented Reality Creator,<br />
            VR For Ads And All Commercial VR Modeling.</Tiitle>
            </center>
        </Container>
    )
}
