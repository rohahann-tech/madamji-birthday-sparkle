const Cake = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 animate-scale-in">
      <div className="text-center">
        {/* Candle */}
        <div className="flex justify-center mb-2">
          <div className="w-2 h-12 bg-gradient-to-b from-party-yellow to-party-orange rounded-t-full relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-party-orange rounded-full opacity-80 animate-pulse-glow blur-sm" />
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-party-yellow rounded-full animate-pulse" />
          </div>
        </div>

        {/* Cake */}
        <div className="relative">
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

        {/* Plate */}
        <div className="w-64 md:w-80 h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-lg -mt-1" />
      </div>
    </div>
  );
};

export default Cake;
