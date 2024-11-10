"use client";
import React from "react";
import { Button } from "../ui/button";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { createDocument } from "@/lib/actions/room.actions";
import { redirect, useRouter } from "next/navigation";
import { AddDocumentBtnProps } from "@/types";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      if (!userId) return;
      const room = await createDocument({ userId, email });
      if (room) {
        router.push(`/instructor/dashboard/${userId}/lectures/${room.id}`);
      } else {
        redirect(`/instructor/dashboard/${userId}/lectures`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button type="submit" onClick={addDocumentHandler} variant={"outline"}>
      Start a Lecture
      <PiChalkboardTeacherLight className="mx-2" />
    </Button>
  );
};

export default AddDocumentBtn;
