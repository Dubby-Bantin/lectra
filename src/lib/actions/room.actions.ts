"use server";

import { nanoid } from "nanoid";
import { liveblocks } from "../liveblocks";
import { parseStringify } from "../utils";
import { CreateDocumentParams, RoomAccesses } from "@/types";

const createDocument = async ({ userId, email }: CreateDocumentParams) => {
  const roomId = nanoid();

  try {
    const metadata = {
      creatorId: userId,
      email,
      title: "Untitled",
    };
    const usersAccesses: RoomAccesses = {
      [email]: ["room:write"],
    };

    const room = await liveblocks.createRoom(roomId, {
      metadata,
      usersAccesses,
      defaultAccesses: ["room:write"],
    });

    return parseStringify(room);
  } catch (error) {
    console.log(`Error creating document ${error}`);
  }
};

const getDocument = async ({
  roomId,
  userId,
}: {
  roomId: string;
  userId: string;
}) => {
  try {
    const room = await liveblocks.getRoom(roomId);
    const hasAccess = Object.keys(room.usersAccesses).includes(userId);
    if (!hasAccess) {
      throw new Error("You do not have access to this lecture room.");
    }
    return parseStringify(room);
  } catch (error) {
    console.log(
      `An error occurred while trying to access this lecture room ${error}`
    );
  }
};
const getDocuments = async (email: string, limit: number) => {
  try {
    const rooms = await liveblocks.getRooms({ userId: email, limit: limit });
    console.log(rooms);
    return parseStringify(rooms);
  } catch (error) {
    console.log(`An error occurred while trying to get rooms ${error}`);
  }
};

const updateDocumentTitle = async ({
  roomId,
  title,
}: {
  roomId: string;
  title?: string;
  creatorId: string;
}) => {
  try {
    if (!title) {
      return;
    }
    const updatedRoom = await liveblocks.updateRoom(roomId, {
      metadata: {
        title,
      },
    });

    return parseStringify(updatedRoom);
  } catch (error) {
    console.log(`Error happened while updating a room ${error}`);
  }
};

export { createDocument, getDocument, updateDocumentTitle, getDocuments };
