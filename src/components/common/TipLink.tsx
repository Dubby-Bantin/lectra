"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { capitalizeFirstLetter } from "@/lib/utils";
const TipLink = ({
  id,
  children,
  pathName,
}: {
  id: string;
  pathName: string;
  children: React.ReactNode;
}) => {
  const path = usePathname();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={`/instructor/dashboard/${id}/${pathName}`}
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
              path.includes(pathName) && "bg-muted text-white"
            }`}
          >
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">
          {capitalizeFirstLetter(pathName)}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TipLink;
