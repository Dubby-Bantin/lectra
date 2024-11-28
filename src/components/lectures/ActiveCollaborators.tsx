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
      <DialogContent className="max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Active students</DialogTitle>
        </DialogHeader>

        <ul className="flex flex-wrap justify-center items-center gap-4 overflow-y-auto">
          {collaborators.length ? (
            collaborators.map(({ id, name, avatar, color }) => (
              <li
                key={id}
                className="flex flex-col justify-center items-center dark:bg-slate-900 shadow-md p-2 rounded-sm w-48 h-48"
              >
                <Image
                  src={avatar}
                  alt={name}
                  width={80}
                  height={80}
                  className="rounded-full ring-2 w-20 h-20 object-cover"
                  style={{ border: `3px solid ${color}` }}
                />
                <p className="py-5 font-semibold text-center text-gray-800 text-sm dark:text-gray-200">
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
