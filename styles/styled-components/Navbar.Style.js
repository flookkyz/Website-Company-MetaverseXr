import styled from "styled-components";
import { Link as LinkR } from "styled-components";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav
      ? "linear-gradient(180deg, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)"
      : "#0E0135"};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Prompt", sans-serif;
  font-size: 20px;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 100px 0 91px;

  @media screen and (max-width: 768px) {
    padding: 0 100px 0 100px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 20px 0 20px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    padding-right: 50px;
    display: block;
    align-items: center;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavUl = styled.ul`
  list-style: none;
  padding: 0 153px 0 0;

  @media screen and (max-width: 1145px) {
    display: none;
  }
`;

export const NavLi = styled.li`
  display: inline-block;
  padding-left: 88px;
  transition: all 0.3s ease 0s;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: aqua;
  }

  @media screen and (max-width: 1310px) {
    font-weight: 400;
    padding-left: 50px;
    &:hover {
      color: purple;
    }
  }
`;

export const NavBtn = styled.button`
  cursor: pointer;
  font-style: normal;
  font-family: "Prompt", sans-serif;
  font-size: 20px;
  width: 132px;
  height: 37px;
  box-shadow: 0px 0px 8.82609px rgba(67, 230, 252, 0.5);
  border-radius: 5px;
  background-color: transparent;
  border: 3px solid #8df1ff;
  color: #8df1ff;
  text-shadow: 0px 0px 23.0376px #8df1ff,
    0px 0px 89.1858px rgba(67, 230, 252, 0.5);

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 25px;
    border: 2px solid;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
  }

  @media screen and (max-width: 600px) {
    width: 74.92px;
    height: 21px;
    border: 2px solid;
    font-weight: 500;
    font-size: 11.3514px;
    line-height: 120%;
  }
`;

export const NavLogo = styled.div`

  @media screen and (max-width: 600px) {
    width: 146px;
    height: 40px;
  }
`;
