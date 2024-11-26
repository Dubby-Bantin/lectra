import { convertTimestampToDate } from "@/lib/utils/helpers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoIosMore } from "react-icons/io";
import Image from "next/image";
import { getFirestoreDocs } from "@/lib/utils/fireBaseUtils";

const UserTable = async () => {
  const data = await getFirestoreDocs("instructors");
  if (!data) {
    return;
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 font-heading">
          <tr>
            <th scope="col" className="px-6 py-3">
              Profile Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Registered On
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              Actions
            </th> */}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data?.map((data) => (
            <tr key={data.id} className="bg-white border-b font-text">
              <td className="px-6 py-4">
                <Image
                  src={data.profileImageUrl}
                  alt={data.firstName}
                  className="w-10 h-10 rounded-full object-cover"
                  height={100}
                  width={100}
                />
              </td>
              <td className="px-6 py-4">{data.firstName}</td>
              <td className="px-6 py-4">{data.email}</td>
              {/* <td className="px-6 py-4">{data.role}</td> */}
              {/* <td className="px-6 py-4">{data.status}</td> */}
              <td className="px-6 py-4">
                {" "}
                {convertTimestampToDate(data.createdAt)}
              </td>
              <td className="px-6 py-4 text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <IoIosMore size={20} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* <DropdownMenuItem onClick={() => handleEditClick(user)}>
                    Edit
                  </DropdownMenuItem> */}
                    {/* <AlertDialogComponent
                    deleteData={deleteData}
                    collectionRef={"users"}
                    data={user}
                  /> */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
