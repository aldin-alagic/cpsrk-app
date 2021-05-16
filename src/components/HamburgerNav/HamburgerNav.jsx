import { HamburgerNavWrapper, NavItem } from "./HamburgerNavStyles";

const HamburgerNav = ({ onClick, opened }) => {
  return (
    <HamburgerNavWrapper opened={opened}>
      <NavItem onClick={onClick} to="/" exact>Home</NavItem>
      <NavItem onClick={onClick} to="/events">Events</NavItem>
      <NavItem  onClick={onClick} to="/login">Login</NavItem>
      <NavItem  onClick={onClick} to="/register">Register</NavItem>
      <NavItem  onClick={onClick} to="/admin">Admin</NavItem>
    </HamburgerNavWrapper>
  );
};

export default HamburgerNav;
