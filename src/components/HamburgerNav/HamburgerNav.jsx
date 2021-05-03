import { HamburgerNavWrapper, NavItem } from "./HamburgerNavStyles";

const HamburgerNav = ({ opened }) => {
  return (
    <HamburgerNavWrapper opened={opened}>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/events">Events</NavItem>
    </HamburgerNavWrapper>
  );
};

export default HamburgerNav;
