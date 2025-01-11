"use client";

import { useMutation, useQuery } from "convex/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { api } from "../../convex/_generated/api";
import Cookies from "js-cookie";
import { getFireStoreRefData } from "@/lib/utils/fireBaseUtils";
import { useEffect, useState } from "react";
import { timeAgo } from "@/lib/utils/helpers";
import Link from "next/link";

const Notifications = () => {
  const [studentId, setStudentId] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const userId = Cookies.get("userId");
      if (userId) {
        const student = await getFireStoreRefData(userId, "students");
        if (!student || !student.id) {
          return;
        }
        setStudentId(student.id);
      }
    };
    fetchStudent();
  }, []);

  const notifications = useQuery(api.notifications.getNotifications, {
    userId: studentId,
  });

  const markAsRead = useMutation(api.notifications.markNotificationAsRead);
  const markAllAsRead = useMutation(
    api.notifications.markAllNotificationsAsRead
  );

  const hasNewNotifications = !!notifications?.length;

  return (
    studentId && (
      <div className="flex justify-end p-5">
        <Popover>
          <PopoverTrigger asChild className="relative right-0">
            <Button variant="outline" size="icon" className="relative p-2">
              <Bell width={16} />
              {hasNewNotifications && (
                <div className="-top-0 -right-1 absolute flex justify-center items-center bg-blue-500 rounded-full w-4 h-4 text-white text-xs">
                  {notifications.length}
                </div>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px]">
            <div className="flex p-4">
              <h3 className="font-medium text-lg">Notifications</h3>
            </div>
            <Separator />
            <ScrollArea className="max-h-[400px]">
              <div className="space-y-4 p-4">
                {!hasNewNotifications && (
                  <p>You have no unread notifications.</p>
                )}

                {hasNewNotifications &&
                  notifications?.map(({ _id, text, roomId, _creationTime }) => (
                    <div
                      key={_id}
                      className="items-start gap-4 grid grid-cols-[1fr_auto] w-full"
                    >
                      <div className="space-y-1 w-full">
                        <p className="font-medium text-sm">{text}</p>
                        <div className="flex justify-between items-center w-full">
                          <p className="text-muted-foreground text-xs">
                            {" "}
                            {timeAgo(_creationTime)}
                          </p>
                          <Link href={`/video_lecture/${roomId}`}>
                            <Button variant={"outline"} size={"sm"}>
                              Join Lecture
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <Button
                        onClick={() => markAsRead({ id: _id })}
                        variant="ghost"
                        size="icon"
                      >
                        <CheckIcon className="w-5 h-5" />
                      </Button>
                    </div>
                  ))}
              </div>
            </ScrollArea>
            {hasNewNotifications && (
              <>
                <Separator />
                <div className="p-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => markAllAsRead({ userId: studentId })}
                  >
                    Mark all as read
                  </Button>
                </div>
              </>
            )}
          </PopoverContent>
        </Popover>
      </div>
    )
  );
};

export default Notifications;
