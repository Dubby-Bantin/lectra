import Link from "next/link";
import { SiGoogleclassroom } from "react-icons/si";
import { dateConverter } from "@/lib/utils";
import { LiveBlockRoomsProps } from "@/types";
import DeleteLectureBtn from "./DeleteLectureBtn";

const LiveBlockRooms = async ({ roomDocuments }: LiveBlockRoomsProps) => {
  return (
    <section className="py-6 rounded-lg w-full">
      <ul className={`w-full grid md:${roomDocuments.data.length === 1 ? "grid-cols-1" : "grid-cols-2"} grid-cols-1 items-center justify-center gap-3`}>
        {roomDocuments.data.map(({ id, metadata: { title }, createdAt }) => (
          <li
            key={id}
            className="rounded-lg border p-4 dark:shadow-md hover:shadow-lg transition-all duration-300 border-input w-full flex items-center justify-between"
          >
            <Link href={`/lecture/${id}`} className="flex items-center gap-4">
              <div className="flex gap-4 items-center">
                <div className="rounded-md border dark:border-blue-500 p-3 shadow-lg">
                  <SiGoogleclassroom size={24} />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-lg font-medium line-clamp-1">
                    {title || "Untitled"}
                  </p>
                  <p className="text-sm font-light dark:text-gray-200 text-gray-500">
                    Created {dateConverter(createdAt)}
                  </p>
                </div>
              </div>
            </Link>
            <DeleteLectureBtn id={id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LiveBlockRooms;
