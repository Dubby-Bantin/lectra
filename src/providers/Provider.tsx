"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/lib/utils/Loader";
// import { getDocumentUsers } from "@/lib/actions/users.actions";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider
      authEndpoint={"/api/liveblocks-auth"}
      //   resolveMentionSuggestions={async ({ text, roomId }) => {
      //     return await getDocumentUsers({
      //       roomId,
      //       currentUser: "gig@gmail.com"!,
      //       text,
      //     });
      //   }
      // }
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
