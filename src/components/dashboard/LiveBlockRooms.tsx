import AddDocumentBtn from "../lectures/AddDocumentBtn";
import Link from "next/link";
import { SiGoogleclassroom } from "react-icons/si";
import { RiDeleteBin5Line } from "react-icons/ri";
import { dateConverter } from "@/lib/utils";
import { Button } from "../ui/button";

type RoomDocument = {
  id: string;
  metadata: { title?: string };
  createdAt: string;
};

type LiveBlockRoomsProps = {
  email: string;
  userId?: string;
  text: string;
  roomDocuments: { data: RoomDocument[] };
};

const LiveBlockRooms = async ({
  email,
  userId,
  roomDocuments,
  text,
}: LiveBlockRoomsProps) => {
  return (
    <section className="px-4 py-6 rounded-lg">
      {roomDocuments.data.length > 0 ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {text} Hosted Lectures
            </h3>
            <AddDocumentBtn userId={userId} email={email} />
          </div>
          <ul className="space-y-4">
            {roomDocuments.data.map(
              ({ id, metadata: { title }, createdAt }) => (
                <li
                  key={id}
                  className="rounded-lg border p-4 dark:shadow-md hover:shadow-lg transition-all duration-300 border-input"
                >
                  <Link
                    href={`/lecture/${id}`}
                    className="flex items-center gap-4"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex gap-4 items-center">
                        <div className="rounded-md border dark:border-blue-500 p-3 shadow-lg">
                          <SiGoogleclassroom size={24} />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-lg font-medium line-clamp-1">
                            {title}
                          </p>
                          <p className="text-sm font-light dark:text-gray-200 text-gray-500">
                            Created {dateConverter(createdAt)}
                          </p>
                        </div>
                      </div>
                      <Button
                        className="text-red-800 dark:text-red-500 transition-colors duration-200"
                        variant={"outline"}
                      >
                        <RiDeleteBin5Line className="text-[1.5rem]" />
                      </Button>
                    </div>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400">
          No hosted lectures available.
        </div>
      )}
    </section>
  );
};

export default LiveBlockRooms;
