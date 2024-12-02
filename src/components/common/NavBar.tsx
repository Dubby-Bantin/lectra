"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import logo from "@/public/images/logo.png"; // Ensure this path is correct
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
      className={`font-poppins border-b top-0 z-[999] sticky px-5 flex justify-between items-center p-1 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="Lectra Logo"
          height={50}
          className="bg-dark mx-2 rounded-full"
        />
        <span className="font-bold text-lg">Lectra</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="relative md:flex items-center gap-5 hidden dark:text-white">
        {navLinks.map(({ id, title }) => (
          <Link
            key={id}
            href={`/${id}`}
            className="flex items-center gap-4 px-3 py-2 rounded-xl text-sm transition-colors duration-200"
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
          <Button variant="outline" size="icon" className="md:hidden shrink-0">
            <Menu className="w-5 h-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="z-[9999] flex flex-col">
          <nav className="gap-2 grid font-medium text-lg">
            <Link
              href="#"
              className="flex items-center gap-2 bg-dark rounded-md w-[3rem] h-[3rem] font-semibold text-lg"
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
                className="flex items-center gap-4 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-xl transition-colors duration-200"
              >
                {Icon && <Icon className="w-5 h-5" />}
                {title}
              </Link>
            ))}
            <AuthNavLink />
            <div className="flex items-center gap-2">
              <ModeToggle />
              Theme
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default NavBar;
