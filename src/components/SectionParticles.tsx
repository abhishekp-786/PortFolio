interface SectionParticlesProps {
  count?: number;
}

const SectionParticles = ({ count = 15 }: SectionParticlesProps) => {
  const particles = Array.from({ length: count }, (_, i) => i);
  
  const colors = [
    "bg-pink-400/50",
    "bg-purple-400/50",
    "bg-blue-400/50",
    "bg-cyan-400/50",
    "bg-green-400/50",
    "bg-yellow-400/50",
    "bg-indigo-400/50",
    "bg-fuchsia-400/50",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomSize = Math.random() * 12 + 6;
        
        return (
          <div
            key={particle}
            className={`absolute rounded-full ${randomColor}`}
            style={{
              width: randomSize,
              height: randomSize,
              boxShadow: `0 0 ${randomSize * 2}px rgba(255, 100, 200, 0.5)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SectionParticles;
