import LiveBlocksWrapper from "./LiveBlocksWrapper";
import CursorSyncWrapper from "./CursorSyncWrapper";
import Editor from "./Editor";

export default function Page() {
  return (
    <LiveBlocksWrapper>
      <CursorSyncWrapper>
        <Editor />
      </CursorSyncWrapper>
    </LiveBlocksWrapper>
  );
}
