import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";

const ActiveCollaborators = () => {
  const others = useOthers();
  const collaborators = others.map((other) => other.info);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>See everyone</Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[80rem] w-[20rem]">
        <DialogHeader>
          <DialogTitle>Active students</DialogTitle>
        </DialogHeader>

        <ul className="flex flex-wrap items-center justify-center gap-4">
          {collaborators.length ? (
            collaborators.map(({ id, name, avatar, color }) => (
              <li
                key={id}
                className="flex flex-col items-center justify-center dark:bg-slate-900 p-2 rounded-sm shadow-md w-48 h-48"
              >
                <Image
                  src={avatar}
                  alt={name}
                  width={80}
                  height={80}
                  className="rounded-full ring-2 object-cover w-20 h-20"
                  style={{ border: `3px solid ${color}` }}
                />
                <p className="py-5 text-center text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {name}
                </p>
              </li>
            ))
          ) : (
            <h1 className="">No active students yet</h1>
          )}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default ActiveCollaborators;
