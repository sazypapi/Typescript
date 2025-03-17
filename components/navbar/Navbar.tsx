import React from "react";
import Containers from "../global/Containers";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";

function Navbar() {
  return (
    <nav className="border-b ">
      <Containers className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Containers>
    </nav>
  );
}

export default Navbar;
