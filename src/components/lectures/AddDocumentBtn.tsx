"use client";
import { createDocument } from "@/lib/actions/room.actions";
import { redirect, useRouter } from "next/navigation";
import { AddDocumentBtnProps } from "@/types";
import LectureBtn from "./LectureBtn";
import { revalidatePath } from "next/cache";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      if (!userId) {
        return;
      }
      const room = await createDocument({ userId, email });
      if (room) {
        router.push(`/lecture/${room.id}`);
        revalidatePath(`/instructor/dashboard/${userId}/lectures`);
      } else {
        redirect(`/instructor/dashboard/${userId}/lectures`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <LectureBtn onClick={addDocumentHandler} text={"Start a Lecture"} />;
};

export default AddDocumentBtn;
