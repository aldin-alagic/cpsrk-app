import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-Inner">
        <Link to="/home" className="Header-LogoContainer">
          <img src={Logo} alt="FOI logo" className="Header-Logo" />
        </Link>
        <div className="Header-NavHamburger">
          <div className="Header-NavHamburgerLine"></div>
          <div className="Header-NavHamburgerLine"></div>
          <div className="Header-NavHamburgerLine"></div>
        </div>
        <nav className="Header-Nav">
          <NavLink className="Header-NavItem" activeClassName="Header-NavItem_active" to="/home" >
            Home
          </NavLink>
          <NavLink className="Header-NavItem" activeClassName="Header-NavItem_active" to="/events">
            Events
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
