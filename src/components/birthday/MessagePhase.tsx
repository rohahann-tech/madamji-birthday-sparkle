import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MessagePhaseProps {
  onBack: () => void;
}

const MessagePhase = ({ onBack }: MessagePhaseProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-pink via-primary/20 to-soft-pink flex items-center justify-center p-4 overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${20 + Math.random() * 30}px`,
              opacity: 0.6,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <Card className="max-w-3xl w-full bg-white/95 backdrop-blur-sm shadow-2xl p-8 md:p-12 rounded-3xl z-10 animate-scale-in">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            A Special Message for You 💌
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-party-purple to-party-blue mx-auto rounded-full" />
        </div>

        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
            Dear Madam Ji,
          </p>

          <p>
            Even though we have met recently, and on your special day, I wish you the happiest
            birthday. 🎉
          </p>

          <p>
            You bring such warmth and kindness wherever you go, and I feel fortunate to have
            crossed paths with you. Your smile lights up the room, and your presence makes
            everything better.
          </p>

          <p>
            May this year bring you endless joy, countless blessings, and all the happiness your
            heart can hold. You deserve nothing but the best! 🌟
          </p>

          <p>
            Here's to new adventures, wonderful memories, and a friendship that I hope continues to
            grow. Thank you for being the amazing person you are! 💖
          </p>

          <p className="text-right italic text-2xl text-primary font-semibold pt-6">
            Happy Birthday, Madam Ji! 🎂✨
          </p>
        </div>

        <div className="mt-10 text-center">
          <Button
            onClick={onBack}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-full shadow-xl"
          >
            ← Back to Celebration
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MessagePhase;
