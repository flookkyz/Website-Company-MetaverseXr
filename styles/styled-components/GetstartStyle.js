import styled from "styled-components";

export const Container = styled.div`
  background: #010101;
  height: 345px;
  padding: 60px;
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
    padding: 30px;
    height: 227px;
  }
`;

export const Ht1 = styled.h1`
  color: white;
  font-size: 36px;
  text-align: center;
  margin: 0px;
  @media screen and (max-width: 960px) {
    font-size: 24px;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  width: 225px;
  height: 60px;
  box-shadow: 0px 0px 8.82609px rgba(67, 230, 252, 0.5);
  border-radius: 6px;
  padding: 0;
  margin-top: 50px;
  background-color: transparent;
  border: 3px solid #8df1ff;
  color: #8df1ff;
  font-size: 20px;
  text-shadow: 0px 0px 23.0376px #8df1ff,
    0px 0px 89.1858px rgba(67, 230, 252, 0.5);

  @media screen and (max-width: 960px) {
    width: 140px;
    height: 35px;
    margin-top: 27px;
    font-size: 12px;
  }
`;
