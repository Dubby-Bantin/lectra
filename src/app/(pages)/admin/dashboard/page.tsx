// import Link from "next/link";
// import {
//   Bell,
//   CircleUser,
//   Home,
//   LineChart,
//   Menu,
//   Package,
//   ShoppingCart,
//   Users,
// } from "lucide-react";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

import Users from "@/components/admin/Users";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import logo from "@/public/images/logo.jpeg";
const Page = () => {
  return (
    <Users />
    // <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    //   <div className="hidden border-r md:block">
    //     <div className="flex h-full max-h-screen flex-col gap-2">
    //       <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-4">
    //         <Link href="/" className="flex items-center gap-5 font-semibold">
    //           <Image
    //             alt="logo"
    //             src={logo}
    //             height={50}
    //             width={50}
    //             className="rounded-full"
    //           />
    //           <span className="">Lectra</span>
    //         </Link>
    //         <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
    //           <Bell className="h-4 w-4" />
    //           <span className="sr-only">Toggle notifications</span>
    //         </Button>
    //       </div>
    //       <div className="flex-1">
    //         <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
    //           <Link
    //             href="#"
    //             className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    //           >
    //             <Home className="h-4 w-4" />
    //             Dashboard
    //           </Link>
    //           <Link
    //             href="#"
    //             className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    //           >
    //             <ShoppingCart className="h-4 w-4" />
    //             Orders
    //             <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
    //               6
    //             </Badge>
    //           </Link>
    //           <Link
    //             href="#"
    //             className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
    //           >
    //             <Package className="h-4 w-4" />
    //             Products{" "}
    //           </Link>
    //           <Link
    //             href="#"
    //             className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    //           >
    //             <Users className="h-4 w-4" />
    //             Customers
    //           </Link>
    //           <Link
    //             href="#"
    //             className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    //           >
    //             <LineChart className="h-4 w-4" />
    //             Analytics
    //           </Link>
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col">
    //     <header className="flex h-14 items-center md:justify-end justify-between gap-4 border-b px-4 lg:h-[60px] lg:px-6">
    //       <Sheet>
    //         <SheetTrigger asChild className="bg-transparent">
    //           <Button
    //             variant="outline"
    //             size="icon"
    //             className="shrink-0 md:hidden"
    //           >
    //             <Menu className="h-5 w-5" />
    //             <span className="sr-only">Toggle navigation menu</span>
    //           </Button>
    //         </SheetTrigger>
    //         <SheetContent side="left" className="flex flex-col">
    //           <nav className="grid gap-2 text-lg font-medium">
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-lg font-semibold"
    //             >
    //               <Image
    //                 alt="logo"
    //                 src={logo}
    //                 height={50}
    //                 width={50}
    //                 className="rounded-full"
    //               />
    //               <span className="sr-only">Acme Inc</span>
    //             </Link>
    //             <Link
    //               href="#"
    //               className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary"
    //             >
    //               <Home className="h-5 w-5" />
    //               Dashboard
    //             </Link>
    //             <Link
    //               href="#"
    //               className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary"
    //             >
    //               <ShoppingCart className="h-5 w-5" />
    //               Orders
    //               <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
    //                 6
    //               </Badge>
    //             </Link>
    //             <Link
    //               href="#"
    //               className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary"
    //             >
    //               <Package className="h-5 w-5" />
    //               Products
    //             </Link>
    //             <Link
    //               href="#"
    //               className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary"
    //             >
    //               <Users className="h-5 w-5" />
    //               Customers
    //             </Link>
    //             <Link
    //               href="#"
    //               className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary"
    //             >
    //               <LineChart className="h-5 w-5" />
    //               Analytics
    //             </Link>
    //           </nav>
    //         </SheetContent>
    //       </Sheet>
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button variant="outline" size="icon" className="rounded-full">
    //             <CircleUser className="h-5 w-5" />
    //             <span className="sr-only">Toggle user menu</span>
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end">
    //           <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem className=" cursor-pointer">
    //             Settings
    //           </DropdownMenuItem>
    //           <DropdownMenuItem className="cursor-pointer">
    //             Support
    //           </DropdownMenuItem>
    //           <DropdownMenuItem className="cursor-pointer">
    //             Logout
    //           </DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //     </header>
    //     <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    //       {/* {children} */}
    //     </main>
    //   </div>
    // </div>
  );
};

export default Page;
