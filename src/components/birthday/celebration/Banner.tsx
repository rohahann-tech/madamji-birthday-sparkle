const Banner = () => {
  return (
    <div className="absolute top-16 md:top-20 left-0 right-0 z-10 animate-slide-down">
      <div className="flex justify-center items-center gap-2 md:gap-4">
        {["🎈", "H", "A", "P", "P", "Y", " ", "B", "I", "R", "T", "H", "D", "A", "Y", "🎈"].map(
          (char, i) => (
            <div
              key={i}
              className={`${
                char === " "
                  ? "w-4"
                  : char === "🎈"
                  ? "text-3xl md:text-5xl"
                  : "bg-gradient-to-br from-primary via-party-purple to-party-blue text-white font-bold text-2xl md:text-4xl px-3 md:px-4 py-2 md:py-3 rounded-lg shadow-xl"
              } transform hover:scale-110 transition-transform`}
              style={{
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {char}
            </div>
          )
        )}
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent"
            style={{
              borderTopColor: ["#FF69B4", "#9B59B6", "#3498DB", "#F39C12", "#E74C3C"][i % 5],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
