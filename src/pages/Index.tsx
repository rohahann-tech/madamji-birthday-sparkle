import { useState } from "react";
import IntroPhase from "@/components/birthday/IntroPhase";
import CelebrationPhase from "@/components/birthday/CelebrationPhase";
import MessagePhase from "@/components/birthday/MessagePhase";

const Index = () => {
  const [phase, setPhase] = useState<"intro" | "celebration" | "message">("intro");

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {phase === "intro" && <IntroPhase onContinue={() => setPhase("celebration")} />}
      {phase === "celebration" && <CelebrationPhase onShowMessage={() => setPhase("message")} />}
      {phase === "message" && <MessagePhase onBack={() => setPhase("celebration")} />}
    </div>
  );
};

export default Index;
