import React, { useState } from "react";

import {
  HeaderWrapper,
  Inner,
  Logo,
  LogoContainer,
  Nav,
  NavItem,
  Hamburger,
  HamburgerLine,
  HamburgerNav,
  HamburgerNavItem,
} from "./HeaderStyle";
import LogoImage from "../../assets/images/logo.png";

const Header = () => {
  const [isHamburgerNavOpened, setIsHamburgerNavOpened] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerNavOpened(!isHamburgerNavOpened);
  };

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
          <NavItem to="/" exact>
            Home
          </NavItem>
          <NavItem to="/events">Events</NavItem>
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/register">Register</NavItem>
          <NavItem to="/admin">Admin</NavItem>
        </Nav>
        <HamburgerNav opened={isHamburgerNavOpened}>
          <HamburgerNavItem to="/" exact onClick={() => handleHamburgerClick()}>
            Home
          </HamburgerNavItem>
          <HamburgerNavItem to="/events" onClick={() => handleHamburgerClick()}>
            Events
          </HamburgerNavItem>
          <HamburgerNavItem to="/admin" onClick={() => handleHamburgerClick()}>
            Admin
          </HamburgerNavItem>
          <HamburgerNavItem
            to="/register"
            onClick={() => handleHamburgerClick()}
          >
            Register
          </HamburgerNavItem>
          <HamburgerNavItem to="/login" onClick={() => handleHamburgerClick()}>
            Login
          </HamburgerNavItem>
        </HamburgerNav>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;
