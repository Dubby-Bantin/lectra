import CollaborativeRoom from "@/components/lectures/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getFireStoreRefData } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Lecture = async ({ params: { slug } }: { params: { slug: string } }) => {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;
  const data = await getFireStoreRefData(userId, "instructors");
  if (!data) return;
  const { email } = data;
  const room = await getDocument({ roomId: slug, userId: email });
  if (!room) {
    redirect("/signup");
  }

  //TODO: Access the permissions of the user to access the document
  return (
    <>
      <CollaborativeRoom roomId={slug} roomMetadata={room.metadata} />
    </>
  );
};

export default Lecture;
