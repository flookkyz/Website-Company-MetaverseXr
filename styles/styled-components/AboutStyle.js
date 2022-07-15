import styled from "styled-components";

export const Container = styled.div`
  height: 640px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: contain;
  margin: 0px;
  padding-top: 172px;
  @media screen and (max-width: 1280px) {
    height: 400px;
    padding-top: 80px;
  }
  @media screen and (max-width: 960px) {
    height: 290px;
    padding-top: 45px;
  }
`;

export const Ht1 = styled.h1`
  color: white;
  font-size: 56px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;
  text-shadow: 1px 1px 18.2712px rgba(67, 230, 252, 0.7);
  @media screen and (max-width: 960px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

export const Tiitle = styled.h5`
  font-size: 24px;
  width: 800px;
  color: white;
  text-align: center;
  margin: 0px;
  
  @media screen and (max-width: 768px) {
    width: 500px;
    font-size: 14px;
    margin: 0;
  }
  @media screen and (max-width: 428px) {
    width: 350px;
    font-size: 14px;
    margin: 0;
  }
`;
