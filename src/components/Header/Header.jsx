import React, { useState } from "react";

import HamburgerNav from "../HamburgerNav/HamburgerNav";

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
  const [hamburgerNavOpened, setHamburgerNavOpened] = useState(false);

  return (
    <HeaderWrapper>
      <Inner>
        <LogoContainer to="/">
          <Logo src={LogoImage} alt="FOI logo" />
        </LogoContainer>
        <Hamburger onClick={() => setHamburgerNavOpened(!hamburgerNavOpened)}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </Hamburger>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/events">Events</NavItem>
        </Nav>
      </Inner>
      <HamburgerNav opened={hamburgerNavOpened} />
    </HeaderWrapper>
  );
};

export default Header;
