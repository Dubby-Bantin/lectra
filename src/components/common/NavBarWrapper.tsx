"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const NavbarWrapper = () => {
  const pathname = usePathname();
  if (
    pathname !== "/" &&
    pathname !== "/about" &&
    pathname !== "/contact" &&
    pathname !== "/instructors"
  ) {
    return null;
  }
  return <NavBar />;
};

export default NavbarWrapper;
