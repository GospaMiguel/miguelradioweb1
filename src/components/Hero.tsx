
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with slight overlay for text readability */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight title-glow">
          <span className="block">Asociación Cántabra</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl my-2">de</span>
          <span className="block">Radioaficionados</span>
        </h1>
        <style>{`
          .title-glow {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                         0 0 40px rgba(255, 255, 255, 0.6),
                         0 0 60px rgba(255, 255, 255, 0.4),
                         2px 2px 4px rgba(0, 0, 0, 0.8);
          }
        `}</style>
      </div>
    </div>
  );
};
