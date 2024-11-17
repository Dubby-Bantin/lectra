"use client";

import { IoMdTrash } from "react-icons/io";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { deleteDocument } from "@/lib/actions/room.actions";
import { toast } from "sonner";
import { useState } from "react";

const DeleteLectureBtn = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteLecture = async () => {
    setIsLoading(true);
    try {
      await deleteDocument(id);
      toast.success("Lecture room successfully deleted", {
        position: "bottom-right",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: "bottom-right",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <IoMdTrash className="text-[1.3rem]" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-center dark:bg-red-950/35 dark:border-red-400/20 dark:border-4 text-red-500 shadow-sm rounded-full p-1 w-9 h-9">
            <IoMdTrash size={45} />
          </div>
          <AlertDialogTitle>Delete lecture</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            lecture and remove its data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-center gap-4">
          <AlertDialogCancel asChild>
            <Button
              variant="outline"
              className="px-4 py-2"
              disabled={isLoading}
            >
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant={"destructive"}
              className={`px-4 py-2 ${
                isLoading
                  ? "cursor-not-allowed opacity-70"
                  : "hover:bg-red-500 hover:text-white"
              } transition-all duration-500`}
              onClick={deleteLecture}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteLectureBtn;
