
import heroMain from "@/assets/hero-main.jpg";

export const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-background mt-[4.5rem] md:mt-[5.5rem] px-2 md:px-4">
      {/* Main Hero Image */}
      <img 
        src={heroMain} 
        alt="Asociación Cántabra de Radioaficionados - Estación EA1RBM"
        className="w-full max-w-[62rem] h-auto object-contain"
      />
    </div>
  );
};
