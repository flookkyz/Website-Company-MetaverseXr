import styled from "styled-components";

export const Container = styled.div`
  background: #060016;
  height: 360px;
  padding: 50px;
  @media screen and (max-width: 768px) {
    transition: 0.8 all ease;
    padding: 0px;
    padding-top: 32px;
    height: 320px;
  }
  @media screen and (max-width: 428px) {
    transition: 0.8 all ease;
    padding: 0px;
    padding-top: 32px;
    height: 185px;
  }
`;

export const Ht1 = styled.h1`
  color: white;
  font-size: 36px;
  text-align: center;
  margin: 0px;
  @media screen and (max-width: 768px) {
    transition: 0.8 all ease;
    font-size: 36px;
    margin-top: 0px;
    margin-bottom: 23px;
  }
  @media screen and (max-width: 428px) {
    transition: 0.8 all ease;
    font-size: 25px;
    margin-top: 0px;
    margin-bottom: 23px;
  }
`;

export const Tiitle = styled.p`
  font-size: 24px;
  color: white;
  text-align: center;
`;

export const Imgpartner = styled.img`
  width: 170px;
  height: 170px;
  align-items: center;
  margin: 20px;
  margin-bottom: 65px;
  @media screen and (max-width: 1280px) {
    transition: 0.8 all ease;
    width: 150px;
    height: 150px;
    margin: 0;
    margin-right: 13px;
  }
  @media screen and (max-width: 820px) {
    transition: 0.8 all ease;
    width: 100px;
    height: 100px;
    margin: 0;
    margin-right: 13px;
  }

  @media screen and (max-width: 768px) {
    transition: 0.8 all ease;
    width: 100px;
    height: 100px;
    margin: 0;
    margin-right: 13px;
  }
  @media screen and (max-width: 428px) {
    transition: 0.8 all ease;
    width: 45px;
    height: 45px;
    margin: 0;
    margin-right: 13px;
  }
`;
