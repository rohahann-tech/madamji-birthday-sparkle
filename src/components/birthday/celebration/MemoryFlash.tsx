import { useState, useEffect } from "react";

interface MemoryFlashProps {
  images: string[];
  onComplete: () => void;
}

const MemoryFlash = ({ images, onComplete }: MemoryFlashProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < images.length) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setIsVisible(true);
        }, 300);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 500);
    }
  }, [currentIndex, images.length, onComplete]);

  if (currentIndex >= images.length) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        className={`transition-all duration-300 transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Placeholder for actual images - will show text for now */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl">
          <div className="text-center">
            <div className="text-8xl mb-4">📸</div>
            <p className="text-4xl font-bold text-primary mb-4">Memory {currentIndex + 1}</p>
            <p className="text-xl text-gray-600">
              Upload your cake cutting photos to see them here!
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Image path: {images[currentIndex]}
            </p>
          </div>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryFlash;
