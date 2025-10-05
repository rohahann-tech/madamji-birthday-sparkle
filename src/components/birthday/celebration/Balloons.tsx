const Balloons = () => {
  const balloonColors = ["primary", "party-purple", "party-blue", "party-yellow", "party-orange"];

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-around pointer-events-none">
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="animate-rise"
          style={{
            animationDuration: `${4 + Math.random() * 2}s`,
            animationDelay: `${i * 0.2}s`,
          }}
        >
          <div className="relative">
            <div
              className={`w-16 h-20 md:w-20 md:h-24 bg-${
                balloonColors[i % balloonColors.length]
              } rounded-full shadow-xl`}
            >
              <div className="absolute inset-0 bg-white opacity-30 rounded-full w-6 h-8 top-2 left-2" />
            </div>
            <div
              className="absolute bottom-0 left-1/2 w-0.5 h-12 bg-gray-400"
              style={{ transform: "translateX(-50%)" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Balloons;
