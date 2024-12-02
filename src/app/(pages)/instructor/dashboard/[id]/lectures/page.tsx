import LectureBoxComponent from "@/components/dashboard/LectureBoxComponent";

import { getDocuments } from "@/lib/actions/room.actions";
import { getFireStoreRefData } from "@/lib/utils/fireBaseUtils";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Your Lectures",
};

const Lectures = async ({ params }: { params: { id: string } }) => {
  const data = await getFireStoreRefData(params.id, "instructors");

  if (!data) {
    return <p className="text-center text-red-500">Instructor not found.</p>;
  }
  const { id, email, subscribedUsers } = data;
  const roomDocuments = await getDocuments(email, 100);
  return (
    <LectureBoxComponent
      headerText="All lectures"
      roomDocuments={roomDocuments}
      email={email}
      id={id}
      subscribedUsers={subscribedUsers}
    />
  );
};

export default Lectures;
