import styled from "styled-components";

export const SvContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-color: transparent;
  height: 762px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  position: relative;
  bottom: 13vh;

  @media screen and (max-width: 768px) {
    height: 291px;
    width: auto;
    position: relative;
    bottom: 5vh;
  }

  @media screen and (max-width: 428px) {
    height: 291px;
    width: auto;
    position: relative;
    bottom: 7.2vh;
  }
`;

export const SvLogo = styled.div`
  position: relative;
  top: 175px;
  text-align: center;
  @media screen and (max-width: 768px) {
    top: 48px;
  }
  @media screen and (max-width: 428px) {
    top: 48px;
    
    
  }
`;

export const SvTitle = styled.h6`
  position: relative;
  top: 100px;
  text-align: center;
  font-size: 24px;
  @media screen and (max-width: 768px) {
    top: 0px;
    display: none;
  }
`;

export const SvWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  top: 100px;
  @media screen and (max-width: 768px) {
    top: 40px;
  }
  @media screen and (max-width: 428px) {
    top: 40px;
  }
`;

export const SvInfoCard = styled.div`
  margin: 0 2rem;
  line-height: 2px;
  width: 300px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
  @media screen and (max-width: 428px) {
    width: 60px;
  }
  @media screen and (max-width: 360px) {
    width: 50px;
  }
`;

export const SvInfoImage = styled.img`
  height: 90px;
  width: 67.5px;
  display: block;
  margin: auto;
  @media screen and (max-width: 428px) {
    width: 60px;
  }
`;

export const SvInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  
`;

export const SvTitleInfo = styled.h6`
  font-size: 20px;
  margin: 0;
  @media screen and (max-width: 428px) {
    font-size: 12px;
  }
`;

export const SvDescInfo = styled.h6`
  font-size: 20px;
  margin: 1rem 0 0 0;
  @media screen and (max-width: 428px) {
    font-size: 12px;
    margin: 0;
  }
`;

export const SvButton = styled.button`
  width: 132px;
  height: 40px;
  box-shadow: 0px 0px 8.82609px rgba(67, 230, 252, 0.5);
  border-radius: 6px;
  margin-top: 50px;
  background-color: transparent;
  border: 3px solid #8df1ff;
  color: #8df1ff;
  font-size: 20px;
  text-shadow: 0px 0px 23.0376px #8df1ff,
    0px 0px 89.1858px rgba(67, 230, 252, 0.5);
    @media screen and (max-width: 428px) {
    width: 72px;
    height: 27px;
    font-size: 10px;
    margin-top: 10px;
  }
`;

export const ImgSV = styled.img`
  width: 365px;
  height: 100px;
  margin: 0;
  @media screen and (max-width: 768px) {
    width: 156px;
    height: 42px;
    
  }
`;