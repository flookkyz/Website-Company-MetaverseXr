import styled from "styled-components";

export const Img = styled.img`
  width: 220px;
  height: 60px;
  align-items: center;
  margin: 0;
  margin-left: 114px;
  margin-right: 123px;
  @media screen and (max-width: 1280px) {
    margin: 0;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    margin-top: 36px;
    margin-bottom: 16px;
  }
`;
export const Imgfooter = styled.img`
  width: 24px;
  height: 24px;
  margin: 0;
  margin-right: 18px;
`;
export const Ht1 = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 11px;
  color: white;
`;

////////////////////////////////////////////////

export const Footer = styled.footer`
  text-align: center;
  padding-left: 200px;
  padding-right: 240px;
  @media screen and (max-width: 1440px) {
    padding: 0;
    text-align: center;
  }
  

`;

export const BottomBar = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin: 0;
  width: 100vw;
  
  @media screen and (max-width: 768px) {
    text-align: center;
    flex-flow: column;
    
  }
  @media screen and (max-width: 428px) {
    text-align: center;
    flex-flow: column;
    
    margin: 0;
  }
`;

export const Menu = styled.div`
  margin-bottom: 30px;
  width: 100vw;
  @media screen and (max-width: 820px) {
    text-align: center;
    margin: 0;
    
    
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    
    margin: 0;
  }
  @media screen and (max-width: 428px) {
    text-align: center;
    
    margin: 0;
  }
`;

export const MenuHead = styled.h6`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: white;
  text-align: start;
  margin-top: 20px;
  @media screen and (max-width: 820px) {
    text-align: center;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0;
  }
`;

export const Policy = styled.div`
  font-size: 12px;
  line-height: 1.33;
  color: white;
  margin: 0;
  text-align: start;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const PolicyRow = styled.h6`
  margin: 0;
  padding: 0;
  text-align: start;
  margin-bottom: 20px;
  margin-top: 15px;
  @media screen and (max-width: 1280px) {
    text-align: start;
    margin-top: 15px;
  }
  @media screen and (max-width: 1440px) {
    text-align: start;
    margin-top: 15px;
  }
  @media screen and (max-width: 820px) {
    text-align: center;
    width: 100vw;
    margin: 0;
    margin-top: 5px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100vw;
    margin: 0;
    margin-top: 5px;
  }
  @media screen and (max-width: 428px) {
    text-align: center;
    width: 100vw;
    margin: 0;
    margin-top: 5px;
  }
`;

export const Menutitle = styled.h6`
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  margin: 0;
  margin-right: 150px;
  width: 100vw;
  @media screen and (max-width: 1440px) {
    text-align: start;
    margin: 0;
    margin-right: 90px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1280px) {
    text-align: start;
    margin: 0;
    margin-right: 90px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 820px) {
    text-align: center;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 428px) {
    text-align: center;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
