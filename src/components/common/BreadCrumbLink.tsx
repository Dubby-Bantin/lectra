"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BreadcrumbLink, BreadcrumbPage } from "../ui/breadcrumb";
import { capitalizeFirstLetter } from "@/lib/utils";

const BreadCrumbLink = ({ id, pathName }: { id: string; pathName: string }) => {
  const path = usePathname();

  return path.includes(pathName) ? (
    <BreadcrumbPage>
      <Link href={`/instructor/dashboard/${id}/${pathName}`}>
        {capitalizeFirstLetter(pathName)}
      </Link>
    </BreadcrumbPage>
  ) : (
    <BreadcrumbLink asChild>
      <Link href={`/instructor/dashboard/${id}/${pathName}`}>
        {capitalizeFirstLetter(pathName)}
      </Link>
    </BreadcrumbLink>
  );
};

export default BreadCrumbLink;
