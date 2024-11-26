"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  capitalizeFirstLetter,
  // convertTimestampToDate,
} from "@/lib/utils/helpers";
import UserTable from "./UserTable";

const Users = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("table", value);
    router.push(`?${params.toString()}`);
  };

  const dataList = searchParams?.get("table");
  return (
    <div className="w-full ">
      <h1 className="text-3xl font-bold text-gray-700 mb-5">User Management</h1>
      <div className="w-40 mb-10">
        <Select onValueChange={(value) => handleChange(value)}>
          <SelectTrigger>
            <SelectValue placeholder={capitalizeFirstLetter(dataList)} />
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
