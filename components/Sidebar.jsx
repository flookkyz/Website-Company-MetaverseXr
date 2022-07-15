import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "../styles/styled-components/SidebarStyle";
import { Link as RLink } from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink >
            <RLink
              to="home"
              spy={true}
              smooth="true"
              offset={-100}
              duration={500}
              onClick={toggle}
            >
              Home
            </RLink>
          </SidebarLink>
          <SidebarLink >
            <RLink
              to="services"
              spy={true}
              smooth="true"
              offset={50}
              duration={500}
              onClick={toggle}
            >
              Services
            </RLink>
          </SidebarLink >
          <SidebarLink >
            <RLink
              to="about"
              spy={true}
              smooth="true"
              offset={-100}
              duration={500}
              onClick={toggle}
            >
              About
            </RLink>
          </SidebarLink>
          <SidebarLink >
            <RLink
              to="work"
              spy={true}
              smooth="true"
              offset={-100}
              duration={500}
              onClick={toggle}
            >
              Work
            </RLink>
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
