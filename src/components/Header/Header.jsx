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

const Header = ({ onLogout, isLoggedIn, isAdmin }) => {
  const [isHamburgerNavOpened, setIsHamburgerNavOpened] = useState(false);

  const handleHamburgerClick = (isLogout = false) => {
    setIsHamburgerNavOpened(!isHamburgerNavOpened);

    if (isLogout) {
      onLogout();
    }
  };

  return (
    <HeaderWrapper>
      <Inner>
        <LogoContainer to="/">
          <Logo src={LogoImage} alt="FOI logo" />
        </LogoContainer>
        <Hamburger onClick={() => handleHamburgerClick()}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </Hamburger>

        <Nav>
          <NavItem to="/" exact>
            Home
          </NavItem>
          <NavItem to="/events">Events</NavItem>
          {isAdmin && <NavItem to="/admin">Admin</NavItem>}
          {isLoggedIn ? (
            <NavItem to="/logout" onClick={() => onLogout()}>
              Logout
            </NavItem>
          ) : (
            <>
              <NavItem to="/register">Register</NavItem>
              <NavItem to="/login">Login</NavItem>
            </>
          )}
        </Nav>

        <HamburgerNav opened={isHamburgerNavOpened}>
          <HamburgerNavItem to="/" exact onClick={() => handleHamburgerClick()}>
            Home
          </HamburgerNavItem>
          <HamburgerNavItem to="/events" onClick={() => handleHamburgerClick()}>
            Events
          </HamburgerNavItem>
          {isAdmin && (
            <HamburgerNavItem
              to="/admin"
              onClick={() => handleHamburgerClick()}
            >
              Admin
            </HamburgerNavItem>
          )}
          {isLoggedIn ? (
            <HamburgerNavItem
              to="/logout"
              onClick={() => handleHamburgerClick(true)}
            >
              Logout
            </HamburgerNavItem>
          ) : (
            <>
              <HamburgerNavItem
                to="/register"
                onClick={() => handleHamburgerClick()}
              >
                Register
              </HamburgerNavItem>
              <HamburgerNavItem
                to="/login"
                onClick={() => handleHamburgerClick()}
              >
                Login
              </HamburgerNavItem>
            </>
          )}
        </HamburgerNav>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;
