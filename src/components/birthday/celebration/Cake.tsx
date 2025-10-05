import { useState } from "react";

interface CakeProps {
  onCakeCut?: (images: string[]) => void;
}

const Cake = ({ onCakeCut }: CakeProps) => {
  const [cutProgress, setCutProgress] = useState(0);
  const [isCutting, setIsCutting] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    setIsCutting(true);
    setShowInstruction(false);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (isCutting) {
      setCutProgress((prev) => {
        const newProgress = Math.min(prev + 2, 100);
        if (newProgress === 100 && onCakeCut) {
          // Trigger image flash - these will be replaced with actual uploaded images
          onCakeCut([
            "memory1", "memory2", "memory3" // Placeholder - user will upload actual images
          ]);
        }
        return newProgress;
      });
    }
  };

  const handleTouchEnd = () => {
    setIsCutting(false);
    if (cutProgress < 100) {
      setCutProgress(0); // Reset if not fully cut
    }
  };

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center z-10 animate-scale-in select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      <div className="text-center relative">
        {/* Instruction text */}
        {showInstruction && cutProgress === 0 && (
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-pulse-glow">
            <p className="text-white text-xl md:text-2xl font-bold bg-primary/80 px-6 py-3 rounded-full shadow-xl whitespace-nowrap">
              👆 Swipe to cut the cake!
            </p>
          </div>
        )}

        {/* Cutting progress indicator */}
        {cutProgress > 0 && cutProgress < 100 && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-48">
            <div className="bg-white/30 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-party-yellow to-party-orange h-full transition-all duration-200 rounded-full"
                style={{ width: `${cutProgress}%` }}
              />
            </div>
            <p className="text-white text-sm mt-2 font-bold">Cutting... {cutProgress}%</p>
          </div>
        )}

        {/* Candle */}
        <div className="flex justify-center mb-2">
          <div className="w-2 h-12 bg-gradient-to-b from-party-yellow to-party-orange rounded-t-full relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-party-orange rounded-full opacity-80 animate-pulse-glow blur-sm" />
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-party-yellow rounded-full animate-pulse" />
          </div>
        </div>

        {/* Cake with cut effect */}
        <div className="relative" style={{ 
          clipPath: cutProgress > 0 ? `polygon(0 0, ${50 - cutProgress/4}% 0, ${50 - cutProgress/4}% 100%, 0 100%)` : 'none',
          transition: 'clip-path 0.1s linear'
        }}>
          {/* Top layer */}
          <div className="w-48 md:w-64 h-16 md:h-20 bg-gradient-to-b from-primary to-primary/80 rounded-t-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-20 rounded-t-3xl">
              <div className="absolute top-2 left-4 w-8 h-8 bg-white rounded-full opacity-40 blur-sm" />
            </div>
            {/* Frosting decoration */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-6 h-3 bg-white rounded-t-full opacity-80" />
              ))}
            </div>
          </div>

          {/* Bottom layer */}
          <div className="w-56 md:w-72 h-20 md:h-24 bg-gradient-to-b from-party-purple to-party-purple/80 rounded-b-3xl shadow-2xl -mt-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-10 rounded-b-3xl" />
            {/* Cake dots decoration */}
            <div className="absolute inset-0 flex flex-wrap gap-4 p-4 justify-center items-center">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-party-yellow rounded-full" />
              ))}
            </div>
          </div>

          {/* Dog decoration on cake */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-6xl animate-float">
            🐕
          </div>
        </div>

        {/* Right half of cake */}
        {cutProgress > 0 && (
          <div 
            className="absolute top-0 right-0" 
            style={{ 
              transform: `translateX(${cutProgress}px) rotate(${cutProgress/5}deg)`,
              transition: 'transform 0.1s linear'
            }}
          >
            <div className="relative">
              {/* Top layer - right half */}
              <div className="w-48 md:w-64 h-16 md:h-20 bg-gradient-to-b from-primary to-primary/80 rounded-t-3xl shadow-2xl relative overflow-hidden"
                style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
                <div className="absolute inset-0 bg-white opacity-20 rounded-t-3xl" />
              </div>

              {/* Bottom layer - right half */}
              <div className="w-56 md:w-72 h-20 md:h-24 bg-gradient-to-b from-party-purple to-party-purple/80 rounded-b-3xl shadow-2xl -mt-1 relative overflow-hidden"
                style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
                <div className="absolute inset-0 bg-white opacity-10 rounded-b-3xl" />
              </div>
            </div>
          </div>
        )}

        {/* Plate */}
        <div className="w-64 md:w-80 h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-lg -mt-1" />
      </div>
    </div>
  );
};

export default Cake;
