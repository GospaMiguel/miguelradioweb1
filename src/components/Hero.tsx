
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/50"></div>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-success/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content removed - image already has title */}
      <div className="relative z-10"></div>
    </div>
  );
};
