
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - sin oscurecimiento */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
      </div>

      {/* Content removed - image already has title */}
      <div className="relative z-10"></div>
    </div>
  );
};
