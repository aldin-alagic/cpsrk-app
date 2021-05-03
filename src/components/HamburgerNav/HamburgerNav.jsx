import { HamburgerNavWrapper, NavItem } from "./HamburgerNavStyles";

const HamburgerNav = ({ onClick, opened }) => {
  return (
    <HamburgerNavWrapper opened={opened}>
      <NavItem onClick={onClick} to="/">Home</NavItem>
      <NavItem onClick={onClick} to="/events">Events</NavItem>
    </HamburgerNavWrapper>
  );
};

export default HamburgerNav;
