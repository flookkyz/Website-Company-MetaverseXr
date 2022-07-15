import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLogo,
  NavUl,
  NavLi,
  NavBtn,
  MobileIcon,
} from "../styles/styled-components/Navbar.Style";
import Image from "next/image";
import { Link as RLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [scrollNav, setscrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavLogo>
        <Image src="/images/logo.svg" width="220" height="60" />
      </NavLogo>
      <NavUl>
        <NavLi >
          <RLink
            to="home"
            spy={true}
            smooth="true"
            offset={-100}
            duration={500}
          >
            Home
          </RLink>
        </NavLi>
        <NavLi>
          <RLink
            to="services"
            spy={true}
            smooth="true"
            offset={50}
            duration={500}
          >
            Services
          </RLink>
        </NavLi>
        <NavLi>
          <RLink
            to="about"
            spy={true}
            smooth="true"
            offset={-100}
            duration={500}
          >
            About
          </RLink>
        </NavLi>
        <NavLi>
          <RLink
            to="work"
            spy={true}
            smooth="true"
            offset={-100}
            duration={500}
          >
            Work
          </RLink>
        </NavLi>
      </NavUl>
      <NavBtn>
        <RLink
          to="contacts"
          spy={true}
          smooth="true"
          offset={-100}
          duration={500}
        >
          Contact
        </RLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
