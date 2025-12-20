
import heroBackground from "@/assets/hero-background.jpg";
import estelaCantabra from "@/assets/estela-cantabra.jpg";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background mt-32">
      {/* Background Image - sin oscurecimiento */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
      </div>

      {/* Estela Cántabra - posicionada a la derecha y arriba */}
      <img 
        src={estelaCantabra} 
        alt="Estela Cántabra" 
        className="absolute right-8 top-8 w-32 md:w-40 lg:w-48 z-10 drop-shadow-2xl"
      />

      {/* Content removed - image already has title */}
      <div className="relative z-10"></div>
    </div>
  );
};
