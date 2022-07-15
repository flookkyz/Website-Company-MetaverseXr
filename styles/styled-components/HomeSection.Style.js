import styled from "styled-components";

export const HomeSec = styled.div`
  padding: 100px 0;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  top: 0;

  @media screen and (max-width: 768px) {
    height: 50vh;
    background-size: cover;
    /* border-bottom-left-radius: 40% 60px;
    border-bottom-right-radius: 40% 60px; */
  }
  @media screen and (max-width: 428px) {
    height: 50vh;
    background-size: cover;
    padding: 30px 0;
  }
`;

export const HomeRow = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;

  @media screen and (max-width: 1440px) {
    width: 100vw;
  }

  @media screen and (max-width: 1280px) {
    width: 100vw;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
  @media screen and (max-width: 428px) {
    width: 100vw;
  }
`;

export const HomeColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 216px;
  padding-bottom: 40px;
  padding-left: 100px;

  @media screen and (max-width: 768px) {
    padding-top: 76px;
    padding-bottom: 30px;
    padding-left: 50px;
    max-width: 300px;
  }
  @media screen and (max-width: 428px) {
    padding-top: 76px;
    padding-bottom: 30px;
    padding-left: 50px;
    max-width: 150px;
  }

  @media screen and (max-width: 600px) {
    padding-top: 38px;
    padding-bottom: 15px;
    padding-left: 25px;
    max-width: 200px;
  }
`;

export const TitleHome = styled.h1`
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 44px;
    line-height: 120%;
  }

  @media screen and (max-width: 600px) {
    font-weight: 400;
    font-size: 28px;
    line-height: 120%;
  }
`;

export const DescHome = styled.h5``;

export const HomeBtn = styled.button`
  font-weight: 400;
  font-size: 24px;
  line-height: 94%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 148px;
  height: 53px;
  background: linear-gradient(270deg, #8d0dbc -1.69%, #160151 61.49%);
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 128px;
    height: 42px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    width: 89px;
    height: 32px;
  }
`;
