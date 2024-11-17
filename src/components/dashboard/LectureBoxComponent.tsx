import LiveBlockRooms from "@/components/dashboard/LiveBlockRooms";
import AddDocumentBtn from "@/components/lectures/AddDocumentBtn";
import LectureScheduleBtn from "@/components/lectures/LectureScheduleBtn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LiveBlockRoomsProps } from "@/types";
const LectureBoxComponent = ({
  roomDocuments,
  email,
  id,
}: LiveBlockRoomsProps) => {
  return (
    <section className="p-6">
      <p className="text-lg py-5 font-poppins">Lectures</p>
      <Card>
        <CardHeader>
          <CardTitle>Host Lecture</CardTitle>
          <CardDescription className="py-2">
            Host or Schedule lectures in one-click.
          </CardDescription>
          <div className="flex justify-between">
            <AddDocumentBtn userId={id} email={email} />
            <LectureScheduleBtn userId={id} email={email} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full flex flex-col items-center justify-center h-full ">
            {roomDocuments.data && roomDocuments.data.length > 0 ? (
              <LiveBlockRooms roomDocuments={roomDocuments} email="" />
            ) : (
              <div className="text-center">
                <h1 className="text-xl font-bold mb-2">
                  You haven&apos;t hosted any lectures yet
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4 ">
                  Seems like you haven&apos;t hosted any lectures start by
                  clicking one of the buttons
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LectureBoxComponent;
