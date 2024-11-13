import CollaborativeRoom from "@/components/lectures/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getFireStoreRefData } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Lecture = async ({ params: { slug } }: { params: { slug: string } }) => {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;

  // Fetch instructor and student data
  const instructorData = await getFireStoreRefData(userId, "instructors");
  const studentData = await getFireStoreRefData(userId, "students");

  let id;
  let email;

  // Check if the user is an instructor or student
  if (instructorData) {
    ({ id, email } = instructorData);
  } else if (studentData) {
    ({ id, email } = studentData);
  } else {
    // Redirect if the user data is not found
    redirect("/signup");
    return null;
  }

  // Retrieve the room document based on the user's email
  const room = await getDocument({ roomId: slug, userId: email });

  // Redirect if the room does not exist
  if (!room) {
    redirect("/signup");
    return null;
  }

  // Render the CollaborativeRoom component
  return (
    <CollaborativeRoom roomId={slug} roomMetadata={room.metadata} userId={id} />
  );
};

export default Lecture;
