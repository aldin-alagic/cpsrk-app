import React from "react";

import {
  HeaderWrapper,
  Inner,
  Logo,
  LogoContainer,
  Nav,
  NavItem,
  Hamburger,
  HamburgerLine,
} from "./HeaderStyle";
import LogoImage from "../../assets/images/logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Inner>
        <LogoContainer to="/">
          <Logo src={LogoImage} alt="FOI logo" />
        </LogoContainer>
        <Hamburger>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </Hamburger>
        <Nav>
          <NavItem to="/" >
            Home
          </NavItem>
          <NavItem to="/events">
            Events
          </NavItem>
        </Nav>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;
