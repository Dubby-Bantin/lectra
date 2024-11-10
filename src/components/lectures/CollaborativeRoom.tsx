"use client";
import { Editor } from "@/components/editor/Editor";
import LectureHeader from "@/components/lectures/LectureHeader";
import { CollaborativeRoomProps } from "@/types";
import Loader from "@/utils/Loader";
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { updateDocumentTitle } from "@/lib/actions/room.actions";
import ActiveCollaborators from "./ActiveCollaborators";
import Image from "next/image";
import logo from "@/public/images/logo (2).png";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const currentUserType = "editor";

  const updateTitleHandler = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      setLoading(true);

      try {
        if (documentTitle !== roomMetadata.title) {
          const updatedRoom = await updateDocumentTitle({
            roomId: roomId,
            title: inputRef.current?.value,
            creatorId: roomMetadata.creatorId,
          });

          if (updatedRoom) {
            setEditing(false);
          }
        }
      } catch (error) {
        const e =
          error instanceof Error
            ? error.message
            : "Something went wrong while trying to update title";
        toast.error(e);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room w-full">
          <div className="relative w-full">
            {/* Flex container for logo, title, and collaborators */}
            <div
              ref={containerRef}
              className="flex items-center justify-between w-full px-4"
            >
              {/* Left: Logo */}
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className="bg-dark rounded-sm"
              />

              {/* Center: Title or Input */}
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

              {/* Right: Active Collaborators */}
              <div className="flex-shrink-0">
                <ActiveCollaborators />
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
