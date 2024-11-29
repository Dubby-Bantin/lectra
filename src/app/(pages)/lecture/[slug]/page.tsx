import CollaborativeRoom from "@/components/lectures/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getFireStoreRefData } from "@/lib/utils/fireBaseUtils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const Lecture = async ({ params: { slug } }: { params: { slug: string } }) => {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;
  const instructorData = await getFireStoreRefData(userId, "instructors");
  const studentData = await getFireStoreRefData(userId, "students");

  let id;

  // Checking if the user is an instructor or student
  if (instructorData) {
    ({ id } = instructorData);
  } else if (studentData) {
    ({ id } = studentData);
  } else {
    redirect("/signup");
  }

  const room = await getDocument({ roomId: slug });
  if (!room) {
    redirect("/signup");
  }

  return (
    <CollaborativeRoom roomId={slug} roomMetadata={room.metadata} userId={id} />
  );
};

export default Lecture;
