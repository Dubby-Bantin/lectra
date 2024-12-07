import LiveBlockRooms from "@/components/dashboard/LiveBlockRooms";
import LectureScheduleBtn from "@/components/lectures/LectureScheduleBtn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LiveBlockRoomsProps } from "@/types";
import ZegoLectureBtn from "../lectures/calls/ZegoLectureBtn";
const LectureBoxComponent = ({
  roomDocuments,
  email,
  id,
  headerText,
  subscribedUsers,
}: LiveBlockRoomsProps) => {
  return (
    <section className="md:p-6">
      <p className="py-5 font-poppins text-lg">{headerText}</p>
      <Card>
        <CardHeader>
          <CardTitle>Host Lecture</CardTitle>
          <CardDescription className="py-2">
            Host or Schedule lectures in one-click.
          </CardDescription>
          <div className="flex justify-between">
            {subscribedUsers && subscribedUsers?.length > 0 && (
              <div className="flex justify-between items-center w-full">
                <LectureScheduleBtn userId={id} email={email} />
                <ZegoLectureBtn id={id} />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center items-center w-full h-full">
            {subscribedUsers && subscribedUsers?.length > 0 ? (
              roomDocuments?.data?.length > 0 ? (
                <LiveBlockRooms roomDocuments={roomDocuments} email="" />
              ) : (
                <div className="text-center">
                  <h1 className="mb-2 font-bold text-xl">
                    You haven&apos;t hosted any lectures yet, but students are
                    subscribed to your lectures.
                  </h1>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Get started by clicking the &#34;Schedule Lecture&#34;
                    button to host your first lecture.
                  </p>
                </div>
              )
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-400">
                It seems there are no students subscribed to your lectures at
                the moment. Students need to subscribe to your lectures before
                you can schedule or host them.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LectureBoxComponent;
