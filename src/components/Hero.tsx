import { Radio, Waves } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-success/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-8 space-x-6">
          <Radio className="w-16 h-16 md:w-20 md:h-20 text-primary animate-glow" />
          <Waves className="w-16 h-16 md:w-20 md:h-20 text-secondary animate-glow" style={{ animationDelay: "0.5s" }} />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Asociación Cantabra
          </span>
          <br />
          <span className="text-foreground">
            de Radioaficionados
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-sans max-w-3xl mx-auto">
          Conectando personas a través de las ondas de radio desde Cantabria
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#sobre-nosotros"
            className="px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-primary/50"
          >
            Descubre Más
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 bg-secondary text-secondary-foreground font-sans font-semibold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-secondary/50"
          >
            Únete a Nosotros
          </a>
        </div>
      </div>
    </div>
  );
};
