import { heroLogo } from "../../data/heroData";
import { Logo, NavbarWrapper } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo src={heroLogo} />
    </NavbarWrapper>
  );
};

export default Navbar;
