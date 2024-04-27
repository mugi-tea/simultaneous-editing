import { LiveBlocksWrapper } from "@/components/LiveBlocksWrapper";
import { CursorSyncWrapper } from "@/components/CursorSyncWrapper";
import { Editor } from "@/components/Editor";

export default function Page() {
  return (
    <LiveBlocksWrapper>
      <CursorSyncWrapper>
        <Editor />
      </CursorSyncWrapper>
    </LiveBlocksWrapper>
  );
}
