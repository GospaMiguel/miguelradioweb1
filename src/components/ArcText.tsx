interface ArcTextProps {
  text: string;
  className?: string;
}

export const ArcText = ({ text, className = "" }: ArcTextProps) => {
  return (
    <div className={`relative ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center relative" style={{ color: 'rgb(128, 0, 32)' }}>
        <span className="inline-block transform hover:scale-110 transition-all duration-500 glow-text-granate">
          {text}
        </span>
      </h2>
      <style>{`
        @keyframes glow-pulse-granate {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(128, 0, 32, 0.9),
                         0 0 40px rgba(128, 0, 32, 0.7),
                         0 0 60px rgba(128, 0, 32, 0.5),
                         0 0 80px rgba(128, 0, 32, 0.3);
          }
          50% { 
            text-shadow: 0 0 30px rgba(128, 0, 32, 1),
                         0 0 60px rgba(128, 0, 32, 0.9),
                         0 0 90px rgba(128, 0, 32, 0.7),
                         0 0 120px rgba(128, 0, 32, 0.5);
          }
        }
        
        .glow-text-granate {
          animation: glow-pulse-granate 3s ease-in-out infinite;
          text-shadow: 0 0 20px rgba(128, 0, 32, 0.9),
                       0 0 40px rgba(128, 0, 32, 0.7),
                       0 0 60px rgba(128, 0, 32, 0.5),
                       0 0 10px rgba(128, 0, 32, 1);
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};
