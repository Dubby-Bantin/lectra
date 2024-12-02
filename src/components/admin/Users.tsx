"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { capitalizeFirstLetter } from "@/lib/utils/helpers";
import UserTable from "./UserTable";
import { useEffect, useState } from "react";

const Users = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [dataList, setDataList] = useState<string | null>("instructors");

  useEffect(() => {
    const table = searchParams?.get("table");
    setDataList(table ?? "instructors");
  }, [searchParams]);

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("table", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="w-full">
      <h1 className="mb-5 font-bold text-3xl text-gray-700">User Management</h1>
      <div className="mb-10 w-40">
        <Select onValueChange={handleChange} value={dataList ?? "instructors"}>
          <SelectTrigger>
            <SelectValue
              placeholder={capitalizeFirstLetter(dataList ?? "instructors")}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="instructors">Instructors</SelectItem>
            <SelectItem value="students">Students</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <UserTable dataList={dataList} />
    </div>
  );
};

export default Users;
