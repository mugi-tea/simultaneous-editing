import { ClientSideSuspense } from "@liveblocks/react";
import React from "react";
import { RoomProvider } from "../../liveblocks.config";
import { Presence } from "../../liveblocks.config";

export const LiveBlocksWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getInitialPresence = (roomId: string): Presence => {
    // roomIdに対応する初期Presenceを返す
    return { cursor: null }; // 適切な初期値を返す
  };
  return (
    <RoomProvider id="my-room" initialPresence={getInitialPresence}>
      <ClientSideSuspense fallback="Loading…">
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
