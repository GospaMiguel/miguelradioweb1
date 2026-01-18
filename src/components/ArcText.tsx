interface ArcTextProps {
  text: string;
  className?: string;
}

export const ArcText = ({ text, className = "" }: ArcTextProps) => {
  return (
    <div className={`relative ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center relative notranslate" translate="no">
        <span className="inline-block transform hover:scale-110 transition-all duration-500 glow-text">
          {text}
        </span>
      </h2>
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { 
            text-shadow: 0 0 25px rgba(128, 0, 32, 0.9),
                         0 0 50px rgba(128, 0, 32, 0.6),
                         0 0 80px rgba(128, 0, 32, 0.3);
          }
          50% { 
            text-shadow: 0 0 35px rgba(128, 0, 32, 1),
                         0 0 70px rgba(128, 0, 32, 0.8),
                         0 0 110px rgba(128, 0, 32, 0.5);
          }
        }
        
        .glow-text {
          animation: glow-pulse 3s ease-in-out infinite;
          text-shadow: 0 0 25px rgba(128, 0, 32, 0.9),
                       0 0 50px rgba(128, 0, 32, 0.6),
                       0 0 80px rgba(128, 0, 32, 0.3);
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};
