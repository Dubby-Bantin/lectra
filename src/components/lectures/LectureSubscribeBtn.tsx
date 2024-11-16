"use client";
import { getFireStoreRefData, handleUpdate } from "@/lib/utils";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const LectureSubscribeBtn = ({
  userId,
  instructorId,
}: {
  userId?: string;
  instructorId: string;
}) => {
  const [subscribedUsersState, setSubscribedUsersState] = useState<string[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSubscribedUsers = async () => {
      try {
        const data = await getFireStoreRefData(instructorId, "instructors");
        if (data?.subscribedUsers) {
          setSubscribedUsersState(data.subscribedUsers);
        }
      } catch (error) {
        console.error("Error fetching subscribed users:", error);
        toast.error("Failed to load subscription data.");
      }
    };
    fetchSubscribedUsers();
  }, [instructorId]);

  const addStudentIdToInstructorList = async () => {
    if (!userId) {
      toast.info("You need to create an account before you can subscribe.");
      return;
    }

    if (subscribedUsersState.includes(userId)) {
      toast.info("You are already subscribed.");
      return;
    }

    setLoading(true);

    try {
      const updatedUsers = [...subscribedUsersState, userId];
      await handleUpdate("instructors", instructorId, {
        subscribedUsers: updatedUsers,
      });
      setSubscribedUsersState(updatedUsers);
      toast.success("Successfully subscribed!");
    } catch (error) {
      console.error("Error subscribing user:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={addStudentIdToInstructorList}
      variant={"outline"}
      disabled={loading || subscribedUsersState.includes(userId || "")}
    >
      {loading
        ? "Subscribing..."
        : subscribedUsersState.includes(userId || "")
        ? "Subscribed"
        : "Subscribe"}
    </Button>
  );
};

export default LectureSubscribeBtn;
