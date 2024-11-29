import { convertTimestampToDate } from "@/lib/utils/helpers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoIosMore } from "react-icons/io";
import Image from "next/image";
import { getFirestoreDocs } from "@/lib/utils/fireBaseUtils";
// import { Button } from "@/components/ui/button";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const UserTable = async ({ dataList }: { dataList: string | null }) => {
  if (dataList === null) {
    return;
  }
  const data = await getFirestoreDocs(dataList);
  if (!data) {
    return;
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-gray-500 text-left text-sm">
        <thead className="border font-heading text-gray-700 text-xs uppercase">
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
            <th scope="col" className="px-6 py-3">
              Registered On
            </th>
            <th scope="col" className="text-right px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {data.map((user) => (
            <tr key={user.id} className="border-b font-text">
              <td className="px-6 py-4">
                <Image
                  src={user.profileImageUrl || "/default-profile.png"}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="rounded-full w-10 h-10 object-cover"
                  height={100}
                  width={100}
                />
              </td>
              <td className="px-6 py-4">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                {convertTimestampToDate(user.createdAt)}
              </td>
              <td className="text-right px-6 py-4">
                <Sheet>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button aria-label="More actions">
                        <IoIosMore size={20} />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />

                      <SheetTrigger asChild>
                        <DropdownMenuItem>View full details</DropdownMenuItem>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>{`${user.firstName} ${user.lastName}`}</SheetTitle>
                          <SheetDescription>
                            View full user profile details here.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col gap-5 mt-4">
                          <p>
                            <strong>Email:</strong> {user.email}
                          </p>
                          <p>
                            <strong>Language:</strong> {user.preferred_language}
                          </p>
                          <p>
                            <strong>Gender:</strong> {user.gender}
                          </p>
                          <p>
                            <strong>Phone:</strong> {user.phoneNumber}
                          </p>
                          <div>
                            <p>Profile Image:</p>
                            <Image
                              className="pt-5 rounded-sm w-full h-[20rem] object-cover"
                              src={user.profileImageUrl}
                              alt="profile_image"
                              height={500}
                              width={500}
                            />
                          </div>

                          {user?.teachingCertificateUrl && (
                            <div className="flex flex-col gap-5">
                              <p>
                                <strong>Bio:</strong> {user.bio}
                              </p>
                              <p>
                                <strong>Degree:</strong> {user.degree}
                              </p>
                              <p>
                                <strong>Employment history:</strong> {user.employment_history}
                              </p>
                              <p>
                                <strong>Major:</strong> {user.major}
                              </p>
                              <p>
                                <strong>Lecture days:</strong> {user.selectedDays}
                              </p>
                              <p>
                                <strong>University of study:</strong> {user.university}
                              </p>
                              <p>
                                <strong>Number of subscribed students:</strong>{" "}
                                {user.subscribedUsers &&
                                  user.subscribedUsers?.length &&
                                  user.subscribedUsers?.length}
                              </p>
                              <div className="flex flex-col gap-5">
                                <p>Teaching Certificate:</p>
                                <Image
                                  className="pt-5 rounded-sm w-full h-[20rem] object-cover"
                                  src={user.teachingCertificateUrl}
                                  alt="profile_image"
                                  height={500}
                                  width={500}
                                />
                              </div>
                              <div className="flex flex-col gap-5">
                                <p>ID Verification:</p>
                                <Image
                                  className="pt-5 rounded-sm w-full h-[20rem] object-cover"
                                  src={user.idVerificationUrl}
                                  alt="profile_image"
                                  height={500}
                                  width={500}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </SheetContent>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Sheet>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
