
import heroMain from "@/assets/hero-main-new.png";

export const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-background mt-[5rem] md:mt-[6rem] px-4 md:px-8">
      {/* Main Hero Image */}
      <img 
        src={heroMain} 
        alt="Asociación Cántabra de Radioaficionados - Estación EA1RBM"
        className="w-full max-w-[70rem] h-auto object-contain mx-auto"
      />
    </div>
  );
};
