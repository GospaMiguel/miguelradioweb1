import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { id: "sobre-nosotros", label: "Sobre Nosotros" },
  { id: "activaciones", label: "Activaciones" },
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
        <div className="flex items-center justify-between h-20">
          <div className="font-display text-xl md:text-2xl font-bold text-primary">
            ACR
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-sans"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
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
                className="w-full justify-start text-foreground hover:text-primary transition-colors font-sans"
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
