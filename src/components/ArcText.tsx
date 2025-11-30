interface ArcTextProps {
  text: string;
  className?: string;
}

export const ArcText = ({ text, className = "" }: ArcTextProps) => {
  return (
    <div className={`relative ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center">
        <span className="inline-block transform hover:scale-110 transition-transform duration-300">
          {text}
        </span>
      </h2>
      <style>{`
        @keyframes arc-bounce {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-5px) scaleY(0.98); }
        }
      `}</style>
    </div>
  );
};
