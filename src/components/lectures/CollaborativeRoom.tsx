"use client";
import React, { useEffect, useRef, useState } from "react";
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { updateDocumentTitle } from "@/lib/actions/room.actions";
import { getFireStoreRefData } from "@/lib/utils";
import { CollaborativeRoomProps } from "@/types";
import LectureHeader from "@/components/lectures/LectureHeader";
import ActiveCollaborators from "./ActiveCollaborators";
import EndLectureBtn from "./EndLectureBtn";
import Loader from "@/utils/Loader";
import { Editor } from "@/components/editor/Editor";
import Image from "next/image";
import logo from "@/public/images/logo (2).png";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
  userId,
}: CollaborativeRoomProps) => {
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [instructorId, setInstructorId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const currentUserType = "editor";

  useEffect(() => {
    const fetchInstructor = async () => {
      const data = await getFireStoreRefData(userId, "instructors");
      if (data && data.id) {
        setInstructorId(data.id);
      }
    };
    fetchInstructor();
  }, [userId]);

  const updateTitleHandler = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      setLoading(true);

      try {
        if (documentTitle !== roomMetadata.title) {
          const updatedRoom = await updateDocumentTitle({
            roomId,
            title: documentTitle,
            creatorId: roomMetadata.creatorId,
          });

          if (updatedRoom) {
            setEditing(false);
          }
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Error updating title";
        toast.error(errorMessage);
      }

      setLoading(false);
    }
  };

  // Close title editing on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Auto-focus title input when editing is enabled
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room w-full p-5">
          <div className="relative w-full">
            <div
              ref={containerRef}
              className="flex flex-wrap items-center justify-between w-full px-4 py-5"
            >
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className="bg-dark rounded-sm"
              />

              {/* Title/Input Centered */}
              <div className="flex-grow flex justify-center max-w-80">
                {editing && !loading ? (
                  <Input
                    type="text"
                    value={documentTitle}
                    ref={inputRef}
                    placeholder="Enter Title"
                    onChange={(e) => setDocumentTitle(e.target.value)}
                    onKeyDown={updateTitleHandler}
                    disabled={!editing}
                    className="document-title-input"
                  />
                ) : (
                  <LectureHeader
                    title={documentTitle}
                    currentUserType={currentUserType}
                    editing={editing}
                    setEditing={setEditing}
                    loading={loading}
                  />
                )}
              </div>

              {/* Right Section */}
              <div className="flex-shrink-0 flex gap-5 items-center">
                <ActiveCollaborators />
                {instructorId && <EndLectureBtn userId={instructorId} />}
              </div>
            </div>

            <Editor />
          </div>
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
