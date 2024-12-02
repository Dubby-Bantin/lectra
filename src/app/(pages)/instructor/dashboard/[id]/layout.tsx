import { Home, Users2 } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PanelLeft } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/context/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import TipLink from "@/components/common/TipLink";
import BreadCrumbLink from "@/components/common/BreadCrumbLink";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { getFireStoreRefData } from "@/lib/utils/fireBaseUtils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogOutButton from "@/components/auth/LogOutButton";
import { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const instructorData = await getFireStoreRefData(id, "instructors");
  return {
    title: { default: "Dashboard", template: `%s | ${instructorData?.firstName}` },
  };
}
const layout = async ({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  const data = await getFireStoreRefData(id, "instructors");
  if (!data) {
    return;
  }
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    redirect("/signup");
  }

  if (userId !== id) {
    redirect("/signup");
  }
  const { firstName, lastName } = data;
  return (
    <div className="flex flex-col bg-background w-full min-h-screen">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="top-0 z-30 sm:static sticky flex items-center gap-4 sm:border-0 bg-transparent sm:bg-transparent backdrop-blur-lg px-4 sm:px-6 border-b h-14 sm:h-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="gap-6 grid font-medium text-lg">
                <Link
                  href="/"
                  className="flex justify-center items-center gap-2 bg-primary rounded-full w-10 h-10 font-semibold text-lg text-primary-foreground md:text-base group shrink-0"
                >
                  <Home className="group-hover:scale-110 w-5 h-5 transition-all" />
                  <span className="sr-only">Lectra Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <MdOutlineDashboardCustomize className="w-5 h-5" />
                  Dashboard
                </Link>
                <Link
                  href={`/instructor/dashboard/${id}/lectures`}
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <PiChalkboardTeacherLight className="w-5 h-5" />
                  Lectures
                </Link>
                <Link
                  href={`/instructor/dashboard/${id}/students`}
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <Users2 className="w-5 h-5" />
                  Students
                </Link>
                <div className="flex items-center gap-4 px-2.5 text-foreground">
                  <ModeToggle />
                  Theme
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Breadcrumb className="md:flex hidden">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <Link href={`/instructor/dashboard/${id}`}>Dashboard</Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadCrumbLink id={id} pathName={"lectures"} />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadCrumbLink id={id} pathName={"students"} />
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="relative flex-1 ml-auto grow-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full overflow-hidden"
                >
                  {firstName?.charAt(0) + lastName?.charAt(0)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutButton userId={userId} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <aside className="left-0 z-10 fixed inset-y-0 sm:flex flex-col hidden bg-background border-r w-14">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
            <Link
              href="/"
              className="flex justify-center items-center gap-2 bg-primary rounded-full w-9 md:w-8 h-9 md:h-8 font-semibold text-lg text-primary-foreground md:text-base group shrink-0"
            >
              <Home className="group-hover:scale-110 w-4 h-4 transition-all" />
              <span className="sr-only">Acme Inc</span>
            </Link>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={`/instructor/dashboard/${id}`}
                    className="flex justify-center items-center bg-muted rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground text-white hover:text-foreground transition-colors"
                  >
                    <MdOutlineDashboardCustomize className="w-5 h-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>
              <TipLink id={id} pathName="lectures">
                <PiChalkboardTeacherLight className="w-5 h-5" />
              </TipLink>
              <TipLink id={id} pathName="students">
                <Users2 className="w-5 h-5" />
              </TipLink>
            </TooltipProvider>
          </nav>
          <nav className="flex flex-col items-center gap-4 mt-auto px-2 sm:py-4">
            <ModeToggle />
          </nav>
        </aside>
        {children}
      </div>
    </div>
  );
};
export default layout;
