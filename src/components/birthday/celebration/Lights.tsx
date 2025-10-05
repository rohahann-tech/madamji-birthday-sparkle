const Lights = () => {
  const colors = ["party-purple", "party-blue", "party-yellow", "party-orange", "primary"];

  return (
    <div className="absolute top-0 left-0 right-0 flex justify-around py-4 z-10 animate-slide-down">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 md:w-6 md:h-6 rounded-full bg-${colors[i % colors.length]} animate-pulse-glow shadow-lg`}
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Lights;
