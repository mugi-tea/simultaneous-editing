import { RoomProvider } from "../../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { Presence } from "../../liveblocks.config";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const LiveBlocksWrapper = ({ children }: Props) => {
  const getInitialPresence = (roomId: string): Presence => {
    // roomIdに対応する初期Presenceを返す
    return {} as Presence; // 適切な初期値を返す
  };

  return (
    <RoomProvider id="my-room" initialPresence={getInitialPresence}>
      <ClientSideSuspense fallback="Loading…">
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
