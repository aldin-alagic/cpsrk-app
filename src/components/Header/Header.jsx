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

  const handleHamburgerClick = () => {
    setHamburgerNavOpened(!hamburgerNavOpened);
  }

  return (
    <HeaderWrapper>
      <Inner>
        <LogoContainer to="/" exact>
          <Logo src={LogoImage} alt="FOI logo" />
        </LogoContainer>
        <Hamburger onClick={handleHamburgerClick}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </Hamburger>
        <Nav>
          <NavItem to="/" exact>Home</NavItem>
          <NavItem to="/events">Events</NavItem>
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/register">Register</NavItem>
          <NavItem  to="/admin">Admin</NavItem>
        </Nav>
      </Inner>
      <HamburgerNav onClick={handleHamburgerClick} opened={hamburgerNavOpened} />
    </HeaderWrapper>
  );
};

export default Header;
