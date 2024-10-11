"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
// import { usePathname } from "next/navigation";
import logo from "@/public/images/logo (2).png"; // Ensure this path is correct
import { navLinks } from "@/utils/constants";
import {
  Badge,
  Bell,
  Home,
  LineChart,
  Menu,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ModeToggle } from "@/context/ThemeSwitcher";

// Dummy function to simulate auth status
const useAuthStatus = () => {
  const [isAuthenticated] = useState(true); // Simulate logged-in state

  useEffect(() => {
    const checkAuth = async () => {
      // Replace with actual authentication logic
      // Example: setIsAuthenticated(await authService.isLoggedIn());
    };
    checkAuth();
  }, []);

  return { isAuthenticated };
};

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useAuthStatus(); // Get authentication status

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
      className={`top-0 z-[9999] sticky px-5 flex justify-between items-center p-2 ${
        isScrolled ? "backdrop-blur-lg" : "bg-black-100"
      }`}
    >
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="logo" height={50} className="rounded-full" />
        Lectra
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-5 dark:text-white text-sm">
        {navLinks.map(({ id, title }) => (
          <Link
            key={id}
            href={`#${id}`}
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
          >
            {/* <Icon className="h-5 w-5" /> */}
            {title}
          </Link>
        ))}
        {isAuthenticated && (
          <div className="sm:flex items-center gap-5">
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
              href="#lectures"
            >
              Lectures
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
              href="#assignments"
            >
              Assignments
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
              href="#students"
            >
              Students
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
              href="#analytics"
            >
              Analytics
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
              href="#notifications"
            >
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </Link>
            <ModeToggle />
          </div>
        )}
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium z-50">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                alt="logo"
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
                href={`#${id}`}
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
              >
                <Icon className="h-5 w-5" />
                {title}
              </Link>
            ))}
            {isAuthenticated && (
              <div className="flex flex-col gap-5">
                <Link
                  href="#dashboard"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#orders"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#products"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#customers"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#analytics"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 dark:text-muted-foreground hover:text-primary"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </div>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default NavBar;
