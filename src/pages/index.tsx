import { LiveBlocksWrapper } from "@/components/LiveBlocksWrapper";
import { CursorSyncWrapper } from "@/components/CursorSyncWrapper";
import { Editor } from "@/components/Editor";

export default function Page() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            height: "100vh",
            border: "1px solid black",
            overflow: "scroll",
          }}
        >
          <LiveBlocksWrapper roomId="room1">
            <CursorSyncWrapper>
              <Editor />
            </CursorSyncWrapper>
          </LiveBlocksWrapper>
        </div>
        <div
          style={{ width: "50%", height: "100vh", border: "1px solid black" }}
        >
          <LiveBlocksWrapper roomId="room2">
            <CursorSyncWrapper>
              <Editor />
            </CursorSyncWrapper>
          </LiveBlocksWrapper>
        </div>
      </div>
    </>
  );
}
