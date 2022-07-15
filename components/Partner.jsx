import React from "react";
import {
  Ht1,
  Imgpartner,
  Container,
} from "../styles/styled-components/PartnerStyle";

export default function Partner() {
  return (
    <Container >
      <Ht1>Our partner</Ht1>
      <center>
        <Imgpartner src="\images\partner.png"></Imgpartner>
        <Imgpartner src="\images\partner.png"></Imgpartner>
        <Imgpartner src="\images\partner.png"></Imgpartner>
        <Imgpartner src="\images\partner.png"></Imgpartner>
        <Imgpartner src="\images\partner.png"></Imgpartner>
        <Imgpartner src="\images\partner.png"></Imgpartner>
      </center>
    </Container>
  );
}
