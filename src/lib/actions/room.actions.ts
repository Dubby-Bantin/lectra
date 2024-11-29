"use server";

import { nanoid } from "nanoid";
import { liveblocks } from "../liveblocks";
import { parseStringify } from "../utils/helpers";
import { CreateDocumentParams, RoomAccesses } from "@/types";
import { revalidatePath } from "next/cache";

const createDocument = async ({
  userId,
  email,
  title,
}: CreateDocumentParams) => {
  const roomId = nanoid();

  try {
    const metadata = {
      creatorId: userId,
      email,
      title,
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
}: {
  roomId: string;
}) => {
  try {
    const room = await liveblocks.getRoom(roomId);
    return parseStringify(room);
  } catch (error) {
    console.log(
      `An error occurred while trying to access this lecture room ${error}`
    );
  }
};
const getDocuments = async (email: string, limit: number) => {
  try {
    revalidatePath(`/instructor/dashboard/:path*`);
    const rooms = await liveblocks.getRooms({ userId: email, limit: limit });
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
    revalidatePath(`/instructor/dashboard/:path*`);
    return parseStringify(updatedRoom);
  } catch (error) {
    console.log(`Error happened while updating a room ${error}`);
  }
};

const deleteDocument = async (roomId: string) => {
  try {
    revalidatePath(`/instructor/dashboard/:path*`);
    return await liveblocks.deleteRoom(roomId);
  } catch (error) {
    console.error("Error deleting room:", error);
    throw new Error("Failed to delete room.");
  }
};

export {
  createDocument,
  getDocument,
  updateDocumentTitle,
  getDocuments,
  deleteDocument,
};
