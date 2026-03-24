const BackgroundParticles = () => {
  const particles = Array.from({ length: 40 }, (_, i) => i);
  
  const colors = [
    "bg-pink-400/50",
    "bg-purple-400/50",
    "bg-blue-400/50",
    "bg-cyan-400/50",
    "bg-green-400/50",
    "bg-yellow-400/50",
    "bg-indigo-400/50",
    "bg-rose-400/50",
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomSize = Math.random() * 16 + 12;
        
        return (
          <div
            key={particle}
            className={`absolute rounded-full ${randomColor}`}
            style={{
              width: randomSize,
              height: randomSize,
              boxShadow: `0 0 ${randomSize * 3}px rgba(255, 100, 200, 0.6)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundParticles;