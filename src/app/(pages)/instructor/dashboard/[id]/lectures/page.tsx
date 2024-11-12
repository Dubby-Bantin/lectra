import LiveBlockRooms from "@/components/dashboard/LiveBlockRooms";
import AddDocumentBtn from "@/components/lectures/AddDocumentBtn";
import { getDocuments } from "@/lib/actions/room.actions";
import { getFireStoreRefData } from "@/lib/utils";

const Lectures = async ({ params }: { params: { id: string } }) => {
  const data = await getFireStoreRefData(params.id, "instructors");

  if (!data) {
    return <p className="text-center text-red-500">Instructor not found.</p>;
  }

  const { id, email } = data;

  const roomDocuments = await getDocuments(email,100);

  return (
    <section className="p-6">
      {roomDocuments.data && roomDocuments.data.length > 0 ? (
        <LiveBlockRooms
          email={email}
          userId={id}
          text="All"
          roomDocuments={roomDocuments}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No hosted lectures available.
          </p>
          <AddDocumentBtn userId={id} email={email} />
        </div>
      )}
    </section>
  );
};

export default Lectures;
