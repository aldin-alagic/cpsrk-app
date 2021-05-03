import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors, breakpoints, transitionEase } from "../../lib/style/theme";

export const HamburgerNavWrapper = styled.nav`
  width: 100%;
  position: fixed;
  background: ${colors.white};
  -webkit-transform: translateY(-150%);
  transform: translateY(-150%);
  z-index: 1;

  ${(props) =>
    props.opened && `
      transition: ${transitionEase};
      -webkit-transform: translateY(0);
      transform: translateY(0);
  `};

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${colors.black};
  font-weight: 600;
  font-size: 20px;
  transition: ${transitionEase};
  padding: 20px 0px;
  text-align: center;

  &.active {
    color: ${colors.red};
  }

  &:hover {
    color: ${colors.red};
  }

  &:last-child {
    padding-bottom: 40px;
  }

`;
