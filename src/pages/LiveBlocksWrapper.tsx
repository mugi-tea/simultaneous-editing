import { RoomProvider } from "../../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const LiveBlocksWrapper = ({ children }: Props) => {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense fallback="Loading…">
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
