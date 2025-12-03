import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { id: "sobre-nosotros", label: "Sobre Nosotros" },
  { id: "actividades", label: "Actividades" },
  { id: "reuniones", label: "Reuniones" },
  { id: "equipos", label: "Equipos" },
  { id: "sobre-radio", label: "Sobre la Radio" },
  { id: "examenes", label: "Exámenes" },
  { id: "galeria", label: "Galería" },
  { id: "contacto", label: "Contáctanos" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-24">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-2 flex-wrap">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-white transition-all font-sans text-lg px-4 py-2 nav-glow"
              >
                {item.label}
              </Button>
            ))}
            <style>{`
              .nav-glow {
                text-shadow: 0 0 8px rgba(255, 255, 255, 1),
                             0 0 15px rgba(255, 255, 255, 1),
                             0 0 25px rgba(255, 255, 255, 0.9),
                             0 0 40px rgba(255, 255, 255, 0.7),
                             0 0 60px rgba(255, 255, 255, 0.5);
              }
              .nav-glow:hover {
                text-shadow: 0 0 10px rgba(255, 255, 255, 1),
                             0 0 20px rgba(255, 255, 255, 1),
                             0 0 35px rgba(255, 255, 255, 1),
                             0 0 55px rgba(255, 255, 255, 0.9),
                             0 0 80px rgba(255, 255, 255, 0.7);
              }
            `}</style>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-center text-foreground hover:text-primary transition-colors font-sans text-lg"
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
