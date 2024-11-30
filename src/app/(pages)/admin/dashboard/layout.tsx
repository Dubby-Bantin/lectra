import Link from "next/link";
import { CircleUser, Home, Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/public/images/logo.png";
import React from "react";
import { ModeToggle } from "@/context/ThemeSwitcher";
import { MdOutlineDashboardCustomize } from "react-icons/md";
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] w-full min-h-screen">
      <div className="md:block hidden border-r">
        <div className="flex flex-col gap-2 h-full max-h-screen">
          <div className="flex items-center px-4 lg:px-4 border-b h-14 lg:h-[60px]">
            <Link href="/" className="flex items-center gap-5 font-semibold">
              <Image
                src={logo}
                alt="Lectra Logo"
                height={50}
                className="bg-dark mx-2 rounded-sm"
              />
              <span className="">Lectra</span>
            </Link>
            <div className="ml-auto">
              <ModeToggle />
            </div>
          </div>
          <div className="flex-1">
            <nav className="flex flex-col items-start gap-3 px-2 lg:px-4 font-medium text-sm">
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-primary transition-all"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>

              <Link
                href="/admin/dashboard?table=instructors"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <MdOutlineDashboardCustomize className="w-5 h-5" />
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex justify-between md:justify-end items-center gap-4 px-4 lg:px-6 border-b h-14 lg:h-[60px]">
          <Sheet>
            <SheetTrigger asChild className="bg-transparent">
              <Button
                variant="outline"
                size="icon"
                className="md:hidden shrink-0"
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="gap-2 grid font-medium text-lg">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold text-lg"
                >
                  <Image
                    src={logo}
                    alt="Lectra Logo"
                    height={50}
                    className="bg-dark mx-2 rounded-sm"
                  />
                  <span className="sr-only">Lectra Inc</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-4 mx-[-0.65rem] px-3 py-2 rounded-xl text-muted-foreground hover:text-primary"
                >
                  <Home className="w-5 h-5" />
                  Home
                </Link>
                <Link
                  href="/admin/dashboard?table=instructors"
                  className="flex items-center gap-4 mx-[-0.65rem] px-3 py-2 rounded-xl text-muted-foreground hover:text-primary"
                >
                  <Home className="w-5 h-5" />
                  Dashboard
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <CircleUser className="w-5 h-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Support
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-col flex-1 gap-4 lg:gap-6 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
