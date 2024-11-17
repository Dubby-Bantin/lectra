"use client";

import Image from "next/image";
import editIcon from "@/public/icons/edit.svg";
import { Dispatch, SetStateAction } from "react";

const LectureHeader = ({
  title,
  currentUserType,
  editing,
  setEditing,
  loading,
  instructorId,
}: {
  title: string;
  currentUserType: string;
  editing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  instructorId: string | null;
}) => {
  return (
    <div className="flex items-center justify-center dark:text-[#B4C6EE] text-xl font-semibold">
      {title}
      {instructorId && currentUserType === "editor" && !editing && (
        <Image
          src={editIcon}
          alt="edit"
          width={24}
          height={24}
          onClick={() => setEditing(true)}
          className="cursor-pointer ml-2"
        />
      )}
      {loading && <p className="text-sm text-gray-400 ml-2">saving...</p>}
    </div>
  );
};

export default LectureHeader;
