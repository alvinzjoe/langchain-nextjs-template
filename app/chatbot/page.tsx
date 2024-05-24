import { ChatWindowRetail } from "@/components/ChatWindowRetail";

export default function AgentsPage() {
  return (
    <ChatWindowRetail
      endpoint="api/chat/retrieval_agents"
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'Type your question...'
      }
      emoji=""
      titleText="Shop Assistant"
    />
  );
}
