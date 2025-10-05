import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface IntroPhaseProps {
  onContinue: () => void;
}

const IntroPhase = ({ onContinue }: IntroPhaseProps) => {
  const [step, setStep] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const messages = [
    "Hello Madam Jiii",
    "It's Your Special Day Yeyey!",
    "So, i had to make something special for you cause you are special to me!",
    "Do you wanna see what I made??"
  ];

  useEffect(() => {
    if (step < 3) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 2500);
      return () => clearTimeout(timer);
    } else if (step === 3) {
      setTimeout(() => setShowButtons(true), 500);
    }
  }, [step]);

  const handleNo = () => {
    alert("Oh come on! Let me show you anyway! 🎉");
    onContinue();
  };

  return (
    <div className="relative min-h-screen bg-soft-pink flex items-center justify-center overflow-hidden">
      {/* Floating confetti background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${20 + Math.random() * 20}px`,
            }}
          >
            {["🎈", "💕", "✨", "🎉", "🎊"][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4">
        {messages.map((message, index) => (
          <p
            key={index}
            className={`text-4xl md:text-6xl font-bold text-white mb-8 transition-all duration-1000 ${
              step === index ? "opacity-100 animate-fade-in" : "opacity-0 absolute"
            }`}
          >
            {message}
          </p>
        ))}

        {showButtons && (
          <div className="flex gap-6 justify-center mt-12 animate-fade-in">
            <Button
              onClick={onContinue}
              size="lg"
              className="bg-white text-primary hover:bg-primary hover:text-white text-xl px-8 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
            >
              Yes! 🎉
            </Button>
            <Button
              onClick={handleNo}
              size="lg"
              variant="outline"
              className="bg-transparent border-4 border-white text-white hover:bg-white hover:text-primary text-xl px-8 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
            >
              No 😢
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroPhase;
