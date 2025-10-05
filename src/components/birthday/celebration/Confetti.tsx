const Confetti = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${15 + Math.random() * 15}px`,
          }}
        >
          {["🎈", "🎉", "🎊", "✨", "💕", "🎁", "🌟"][Math.floor(Math.random() * 7)]}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
