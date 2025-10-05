import { useState } from "react";
import { Button } from "@/components/ui/button";
import Confetti from "./celebration/Confetti";
import Lights from "./celebration/Lights";
import Banner from "./celebration/Banner";
import Balloons from "./celebration/Balloons";
import Cake from "./celebration/Cake";
import MemoryFlash from "./celebration/MemoryFlash";

interface CelebrationPhaseProps {
  onShowMessage: () => void;
}

const CelebrationPhase = ({ onShowMessage }: CelebrationPhaseProps) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [showLights, setShowLights] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [memoryImages, setMemoryImages] = useState<string[]>([]);
  const [showMemories, setShowMemories] = useState(false);

  return (
    <div
      className={`relative min-h-screen transition-all duration-1000 flex flex-col items-center justify-center overflow-hidden ${
        lightsOn ? "bg-gradient-to-br from-soft-pink via-white to-primary" : "bg-navy-dark"
      }`}
    >
      {/* Confetti effect */}
      {lightsOn && <Confetti />}

      {/* Decorative lights */}
      {showLights && <Lights />}

      {/* Birthday banner */}
      {showBanner && <Banner />}

      {/* Floating balloons */}
      {showBalloons && <Balloons />}

      {/* Cake */}
      {showCake && <Cake onCakeCut={(images) => {
        setMemoryImages(images);
        setShowMemories(true);
      }} />}

      {/* Memory flash */}
      {showMemories && (
        <MemoryFlash
          images={memoryImages}
          onComplete={() => setShowMemories(false)}
        />
      )}

      {/* Control buttons */}
      <div className="z-20 flex flex-wrap gap-4 justify-center px-4 mb-8">
        {!lightsOn && (
          <Button
            onClick={() => setLightsOn(true)}
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 text-lg px-6 py-4 rounded-full shadow-xl animate-pulse-glow"
          >
            💡 Lights On
          </Button>
        )}

        {lightsOn && !showLights && (
          <Button
            onClick={() => setShowLights(true)}
            size="lg"
            className="bg-party-purple text-white hover:bg-party-purple/90 text-lg px-6 py-4 rounded-full shadow-xl"
          >
            🎵 Play Music
          </Button>
        )}

        {showLights && !showBanner && (
          <Button
            onClick={() => setShowBanner(true)}
            size="lg"
            className="bg-party-blue text-white hover:bg-party-blue/90 text-lg px-6 py-4 rounded-full shadow-xl"
          >
            🎊 Decorate
          </Button>
        )}

        {showBanner && !showBalloons && (
          <Button
            onClick={() => setShowBalloons(true)}
            size="lg"
            className="bg-party-yellow text-navy-dark hover:bg-party-yellow/90 text-lg px-6 py-4 rounded-full shadow-xl"
          >
            🎈 Fly the Balloons
          </Button>
        )}

        {showBalloons && !showCake && (
          <Button
            onClick={() => setShowCake(true)}
            size="lg"
            className="bg-party-orange text-white hover:bg-party-orange/90 text-lg px-6 py-4 rounded-full shadow-xl"
          >
            🎂 Let's Cut the Cake Madam Ji
          </Button>
        )}

        {showCake && (
          <Button
            onClick={onShowMessage}
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 text-xl px-8 py-6 rounded-full shadow-2xl animate-pulse-glow font-bold"
          >
            💌 Well, I Have a Message for You Madam Ji
          </Button>
        )}
      </div>
    </div>
  );
};

export default CelebrationPhase;
