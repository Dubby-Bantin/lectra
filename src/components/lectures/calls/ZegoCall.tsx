"use client";
import { randomID } from "@/lib/utils/helpers";
import React, { useRef, useEffect } from "react";
import "@/styles/calls.css";
const ZegoCall = ({ id }: { id: string }) => {
  const element = useRef(null);

  useEffect(() => {
    const setupZegoCall = async () => {
      const { ZegoUIKitPrebuilt } = await import(
        "@zegocloud/zego-uikit-prebuilt"
      );
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        122180952,
        "ddf60931e3a7b84b81b756de077983fb",
        id,
        randomID(5),
        randomID(5)
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element.current,
        sharedLinks: [
          {
            name: "Personal link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              id,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });
    };

    setupZegoCall();
  }, [id]);

  return (
    <div
      className="flex justify-center items-center bg-background myCallContainer"
      ref={element}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default ZegoCall;
