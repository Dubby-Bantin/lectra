"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import logo from "@/public/images/logo (2).png"; // Ensure this path is correct
import { navLinks } from "@/lib/utils/constants";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ModeToggle } from "@/context/ThemeSwitcher";
import AuthNavLink from "./AuthNavLink";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`top-0 z-[999999] sticky px-5 flex justify-between items-center p-2 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="Lectra Logo"
          height={50}
          className="bg-dark rounded-sm mx-2"
        />
        <span className="text-lg font-bold">Lectra</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-5 relative dark:text-white">
        {navLinks.map(({ id, title }) => (
          <Link
            key={id}
            href={`/${id}`}
            className="text-sm flex items-center gap-4 rounded-xl px-3 py-2 transition-colors duration-200"
          >
            {title}
          </Link>
        ))}
        <AuthNavLink />
        <ModeToggle />
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col z-[9999]">
          <nav className="grid gap-2 text-lg font-medium z-50">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold w-[3rem] h-[3rem] bg-dark rounded-md"
            >
              <Image
                alt="Lectra Logo"
                src={logo}
                height={50}
                width={50}
                className="rounded-full"
              />
              <span className="sr-only">Lectra</span>
            </Link>
            {navLinks.map(({ id, title, Icon }) => (
              <Link
                key={id}
                href={`/${id}`}
                className="flex items-center gap-4 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {Icon && <Icon className="h-5 w-5" />}
                {title}
              </Link>
            ))}
            <AuthNavLink />
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default NavBar;
