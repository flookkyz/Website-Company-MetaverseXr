import styled from "styled-components";

export const Sv2Container = styled.div`
  background: linear-gradient(360deg, #030029 0%, #010101 100%);
  height: 684px;
  padding-left: 100px;
  @media screen and (max-width: 768px) {
    padding: 20px;
    height: 750px;
  }
  @media screen and (max-width: 428px) {
    padding: 20px;
    height: 830px;
  }
`;

export const Sv2Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 50px 0;
  }
  @media screen and (max-width: 428px) {
    flex-direction: column-reverse;
    margin: 10px 0;
  }
`;
export const Sv2ColumnL = styled.div`
  flex-basis: 40%;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-basis: 30%;
  }
`;
export const Sv2ColumnR = styled.div`
  position: relative;
  flex-basis: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Sv2Title = styled.h4`
  text-shadow: 1px 1px 18.2712px rgba(67, 230, 252, 0.7);
`;

export const BtnSv2 = styled.button`
  width: 179px;
  height: 46px;
  box-shadow: 0px 0px 8.82609px rgba(67, 230, 252, 0.5);
  border-radius: 6px;
  margin-top: 50px;
  background-color: transparent;
  border: 3px solid #8df1ff;
  color: #8df1ff;
  font-size: 16px;
  text-shadow: 0px 0px 23.0376px #8df1ff,
    0px 0px 89.1858px rgba(67, 230, 252, 0.5);
`;

export const FrameImage = styled.div`
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Sv2P1 = styled.p`
  font-size: 16;
  font-family: "Prompt", sans-serif;
`;
export const Sv2TitleP = styled.p`
  margin: 32px 0 0 0;
  font-size: 16px;
  font-weight: bold;
  font-family: "Prompt", sans-serif;
`;
export const Sv2P2 = styled.p`
  margin: 0;
  font-size: 16;
  font-family: "Prompt", sans-serif;
`;
