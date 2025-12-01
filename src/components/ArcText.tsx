interface ArcTextProps {
  text: string;
  className?: string;
}

export const ArcText = ({ text, className = "" }: ArcTextProps) => {
  return (
    <div className={`relative ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center relative">
        <span className="inline-block transform hover:scale-110 transition-all duration-500 glow-text">
          {text}
        </span>
      </h2>
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                         0 0 40px rgba(255, 255, 255, 0.6),
                         0 0 60px rgba(255, 255, 255, 0.4);
          }
          50% { 
            text-shadow: 0 0 30px rgba(255, 255, 255, 1),
                         0 0 60px rgba(255, 255, 255, 0.8),
                         0 0 90px rgba(255, 255, 255, 0.6);
          }
        }
        
        .glow-text {
          animation: glow-pulse 3s ease-in-out infinite;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                       0 0 40px rgba(255, 255, 255, 0.6),
                       0 0 60px rgba(255, 255, 255, 0.4),
                       0 0 10px rgba(255, 255, 255, 1);
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};
