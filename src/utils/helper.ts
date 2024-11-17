import { getDocuments } from "@/lib/actions/room.actions";

const getRoomDocumentsLength = async (email: string): Promise<number> => {
  try {
    const roomDocuments = await getDocuments(email, 100);
    return roomDocuments.data.length;
  } catch (e) {
    console.error("Error fetching room documents:", e);
    return 0;
  }
};
export { getRoomDocumentsLength };
