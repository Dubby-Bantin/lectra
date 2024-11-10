"use client"; // Mark this component as a client component

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  // Adjust this list of paths as needed
  if (pathname !== "/" && pathname !== "/about" && pathname !== "/contact") {
    return null;
  }
  return <NavBar />;
};

export default NavbarWrapper;
