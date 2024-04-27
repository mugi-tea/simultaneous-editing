import { ClientSideSuspense } from "@liveblocks/react";
import React from "react";
import { RoomProvider } from "../../liveblocks.config";
import { Presence } from "../../liveblocks.config";

type Props = {
  children: React.ReactNode;
  roomId: string;
};

export const LiveBlocksWrapper = ({ children, roomId }: Props) => {
  const getInitialPresence = (roomId: string): Presence => {
    // roomIdに対応する初期Presenceを返す
    return { cursor: null }; // 適切な初期値を返す
  };
  return (
    <RoomProvider id={roomId} initialPresence={getInitialPresence}>
      <ClientSideSuspense fallback="Loading…">
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
