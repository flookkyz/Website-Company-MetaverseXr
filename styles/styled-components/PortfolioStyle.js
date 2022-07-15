import styled from "styled-components";

// Portfolio //

export const Ht1 = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-top: -25px;
  margin-bottom: 50px;
  color: white;
  @media screen and (max-width: 1440px) {
    margin: 0;
    margin-bottom: 50px;
    padding-top: 50px;
  }
`;

export const Ht2 = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-top: 65px;
  text-transform: uppercase;
  color: white;
  /* margin-top: 60px;
    margin-bottom: 60px; */
`;
export const Sliderborder = styled.div`
  height: 460px;
  width: 370px;
  border-radius: 7px;
  border: 3px solid rgba(223, 69, 224, 0.7);
  box-shadow: 0px 0px 9.05307px rgba(223, 69, 224, 0.7);
  margin: 0;
  @media screen and (max-width: 820px) {
    width: 366px;
    height: 457px;
    margin: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 346px;
    height: 387px;
    margin: 50px;
  }
  @media screen and (max-width: 428px) {
    width: 246px;
    height: 287px;
    margin: 50px;
  }
`;

export const Slidermap = styled.div`
@media screen and (max-width: 950px) {
  width: 550px;
    height: 550px;
    text-align: center;
  }
@media screen and (max-width: 768px) {
    width: 450px;
    height: 550px;
    text-align: center;
  }
  @media screen and (max-width: 428px) {
    width: 300px;
    height: 350px;
    text-align: center;
  }
`;
export const Container = styled.footer`
  background: linear-gradient(180deg, #160151 0%, #010101 100%);
  height: 1690px;
  padding: 100px;
  @media screen and (max-width: 1440px) {
    margin: 0;
    padding: 0;
    padding-top: 50px;
    height: 1600px;
  }
  @media screen and (max-width: 820px) {
    margin: 0;
    padding: 0;
    height: 1950px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
    height: 1650px;
  }
  @media screen and (max-width: 428px) {
    margin: 0;
    padding: 0;
    height: 1450px;
    
  }
`;

export const Boxslider = styled.div`
  width: 1150px;
  text-align: center;
  @media screen and (max-width: 900px) {
    width: 450px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    width: 450px;
    text-align: center;
  }
  @media screen and (max-width: 428px) {
    width: 350px;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 320px;
  height: 230px;
  object-fit: cover;
  align-items: center;
  margin: 20px;
  @media screen and (max-width: 768px) {
    width: 310px;
    height: 247px;
    margin: 15px;
  }
  @media screen and (max-width: 428px) {
    width: 210px;
    height: 147px;
  }
`;

export const SliderTittle = styled.h6`
  margin: 0;
  margin-top: 30px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    line-height: 1.2;
    font-size: 12px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const Button1 = styled.button`
  cursor: pointer;
  width: 160px;
  height: 50px;
  background-image: linear-gradient(270deg, #8d0dbc -1.69%, #160151 102.03%);
  border-radius: 5px;
  border: none;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: white;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100px;
    height: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 120px;
    height: 40px;
  }
  @media screen and (max-width: 428px) {
    font-size: 12px;
    width: 100px;
    height: 30px;
  }
`;
export const Button2 = styled.button`
  cursor: pointer;
  width: 114px;
  height: 53px;
  background-image: linear-gradient(270deg, #8d0dbc -1.69%, #160151 102.03%);
  border-radius: 5px;
  border: none;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: white;

  margin-left: 340px;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-left: 205px;
    margin-top: 20px;
  }
  @media screen and (max-width: 428px) {
    margin-top: 0px;
    margin-left: 170px;
  }
  @media screen and (max-width: 414px) {
    margin-top: 20px;
    margin-left: 230px;
  }
  @media screen and (max-width: 375px) {
    margin-top: 0;
    margin-left: 170px;
  }
  
`;

export const Input = styled.input`
  background-color: transparent;
  width: 450px;
  border: none;
  border-bottom: 2px solid #ffffff;
  color: #ffffff;
  margin-bottom: 50px;

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 820px) {
    width: 400px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 375px) {
    width: 270px;
    margin-bottom: 10px;
  }
`;

// Contact Style //

export const Contact = styled.footer``;

export const ContactBar = styled.div`
  margin: 0;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Menu1 = styled.div`
  margin-bottom: 30px;
  height: 690px;
  width: 620px;
  background: #1e1832;
  padding-top: 100px;
  padding-left: 88px;
  @media screen and (max-width: 820px) {
    margin: 0;
    width: 500px;
    height: 500px;
    padding-top: 30px;
    padding-left: 30px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 388px;
    height: 371px;
    padding-top: 30px;
    padding-left: 30px;
  }
  @media screen and (max-width: 428px) {
    margin: 0;
    width: 388px;
    height: 350px;
    padding-top: 30px;
    padding-left: 30px;
  }
  @media screen and (max-width: 375px) {
    margin: 0;
    width: 330px;
    height: 321px;
    padding-top: 30px;
    padding-left: 30px;
  }
`;
export const Menu2 = styled.div`
  margin-bottom: 30px;
  width: 620px;
  height: 690px;
  background: #171717;
  padding-top: 100px;
  padding-left: 88px;
  @media screen and (max-width: 820px) {
    margin: 0;
    width: 500px;
    height: 500px;
    padding-top: 30px;
    padding-left: 30px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 388px;
    height: 371px;
    padding-top: 30px;
    padding-left: 30px;
  }
  @media screen and (max-width: 428px) {
    margin: 0;
    width: 388px;
    height: 350px;
    padding-top: 30px;
    padding-left: 30px;
  }
  @media screen and (max-width: 375px) {
    margin: 0;
    width: 330px;
    height: 321px;
    padding-top: 30px;
    padding-left: 30px;
  }
`;

export const ContactTittleL = styled.h6`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  text-align: start;
  margin: 0;
  margin-bottom: 20px;
  display: inline-block;
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 300px;
  }
  @media screen and (max-width: 428px) {
    margin: 0;
    width: 200px;
  }
`;
export const ContactTittleR = styled.h6`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  text-align: start;
  margin: 0;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const ImgContacttop = styled.img`
  width: 20px;
  height: 20px;
  margin: 0;
  margin-right: 22px;
  margin-bottom: 60px;
  display: inline-block;
  position: relative;
  top: 10px;
  @media screen and (max-width: 768px) {
    top: -20px;
  }
  @media screen and (max-width: 428px) {
    margin-bottom: 85px;
  }
`;

export const ImgContact = styled.img`
  width: 20px;
  height: 20px;
  margin: 0;
  margin-right: 22px;
  display: inline-block;
  position: relative;
  top: 5px;
`;

// Popup //

// export const Name = styled.Tag`

// `;

export const Boxpopup = styled.div`
  width: 900px;
  height: 600px;
  background: #120b24;
  border-radius: 6px;
`;

export const Imgpopup = styled.img`
  width: 600px;
  height: 360px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 600px;
    height: 350px;
  }
  @media screen and (max-width: 428px) {
    width: 300px;
    height: 250px;
  }
`;

export const Popuph4 = styled.h4`
  color: #43e6fc;

  @media screen and (max-width: 428px) {
    font-size: 24px;
  }
`;

export const Popuph6 = styled.h6`
  color: white;

  @media screen and (max-width: 428px) {
    font-size: 12px;
  }
`;

export const Closebtn = styled.button`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  border: none;
  border-radius: 18px;

  background: white;
  color: black;
`;
