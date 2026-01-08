import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
  isPage?: boolean;
  path?: string;
}

const navItems: NavItem[] = [
  { id: "inicio", label: "Inicio", isPage: true, path: "/" },
  { id: "sobre-nosotros", label: "Sobre Nosotros" },
  { id: "actividades", label: "Actividades" },
  { id: "reuniones", label: "Reuniones" },
  { id: "equipos", label: "Equipos" },
  { id: "sobre-radio", label: "Sobre la Radio" },
  { id: "examenes", label: "Exámenes" },
  { id: "galeria", label: "Galería" },
  { id: "tips", label: "Tips Principiantes", isPage: true, path: "/tips-principiantes" },
  { id: "contacto", label: "Contáctanos" },
];

interface NavigationProps {
  currentPage?: string;
}

export const Navigation = ({ currentPage }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [cameFromOtherPage, setCameFromOtherPage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const prevPathnameRef = useRef(location.pathname);

  // Detectar cuando el usuario viene de otra página
  useEffect(() => {
    if (location.pathname === "/equipos") {
      setActiveItem("equipos");
      setCameFromOtherPage(false);
      prevPathnameRef.current = location.pathname;
    } else if (location.pathname === "/galeria") {
      setActiveItem("galeria");
      setCameFromOtherPage(false);
      prevPathnameRef.current = location.pathname;
    } else if (location.pathname === "/tips-principiantes") {
      setActiveItem("tips");
      setCameFromOtherPage(false);
      prevPathnameRef.current = location.pathname;
    } else if (location.pathname === "/" && prevPathnameRef.current !== "/") {
      setCameFromOtherPage(true);
      setActiveItem("inicio");
      prevPathnameRef.current = location.pathname;
    } else if (prevPathnameRef.current !== location.pathname) {
      const currentItem = navItems.find(item => item.path === location.pathname);
      if (currentItem) {
        setActiveItem(currentItem.id);
      }
      setCameFromOtherPage(false);
      prevPathnameRef.current = location.pathname;
    }
  }, [location.pathname]);

  // Detectar qué sección está visible cuando estamos en la página de inicio
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = navItems
        .filter(item => !item.isPage)
        .map(item => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter(section => section.element !== null);

      // Encontrar la sección que está más cerca del top del viewport
      const navHeight = 96; // altura aproximada de la navegación
      let activeSection: string | null = null;
      let closestDistance = Infinity;

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top - navHeight);
          
          // Si la sección está visible en el viewport (con un margen para la navegación)
          if (rect.top <= navHeight + 150 && rect.bottom >= navHeight - 50) {
            if (distanceFromTop < closestDistance) {
              closestDistance = distanceFromTop;
              activeSection = section.id;
            }
          }
        }
      }

      // Si encontramos una sección activa, activarla y desactivar "inicio"
      if (activeSection) {
        setActiveItem(activeSection);
        setCameFromOtherPage(false);
      } else if (cameFromOtherPage && window.scrollY < 100) {
        // Solo activar "inicio" si estamos en el top de la página Y venimos de otra página
        setActiveItem("inicio");
      }
      // Si no hay sección activa y no venimos de otra página, no cambiar el estado
    };

    // Ejecutar al cargar para detectar hash
    const hash = location.hash.replace("#", "");
    if (hash && navItems.find(item => item.id === hash)) {
      setActiveItem(hash);
      setCameFromOtherPage(false);
    } else if (!cameFromOtherPage) {
      // Si no hay hash y no venimos de otra página, detectar sección visible
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, location.hash, cameFromOtherPage]);

  const handleNavClick = (item: NavItem) => {
    setActiveItem(item.id);
    if (item.isPage && item.path) {
      if (item.path === "/" && location.pathname === "/") {
        // Si estamos en inicio y hacemos clic en inicio, hacer scroll al top
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCameFromOtherPage(true);
        setActiveItem("inicio");
      } else {
        navigate(item.path);
        if (item.path === "/") {
          setCameFromOtherPage(true);
        }
      }
      setIsOpen(false);
    } else {
      // Si estamos en una subpágina, navegar a inicio y luego hacer scroll
      if (location.pathname !== "/") {
        navigate("/");
        setCameFromOtherPage(false);
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        setCameFromOtherPage(false);
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsOpen(false);
    }
  };

  const isActive = (item: NavItem) => {
    // Solo usar activeItem para determinar qué está activo
    // Esto asegura que solo un item esté activo a la vez
    return activeItem === item.id;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-24">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-3">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item)}
                className={`text-white hover:text-white transition-all font-sans text-[1.15rem] px-1.5 py-1 nav-glow font-bold rounded-md ${
                  isActive(item) ? "bg-purple-600/80 hover:bg-purple-600/90" : "hover:bg-purple-600/40"
                }`}
              >
                {item.label}
              </Button>
            ))}
            <style>{`
              .nav-glow {
                text-shadow: 0 0 15px rgba(255, 255, 255, 1),
                             0 0 30px rgba(255, 255, 255, 1),
                             0 0 50px rgba(255, 255, 255, 1),
                             0 0 80px rgba(255, 255, 255, 0.9),
                             0 0 120px rgba(255, 255, 255, 0.8),
                             0 0 160px rgba(255, 255, 255, 0.6);
              }
              .nav-glow:hover {
                text-shadow: 0 0 20px rgba(255, 255, 255, 1),
                             0 0 40px rgba(255, 255, 255, 1),
                             0 0 70px rgba(255, 255, 255, 1),
                             0 0 100px rgba(255, 255, 255, 1),
                             0 0 150px rgba(255, 255, 255, 0.9),
                             0 0 200px rgba(255, 255, 255, 0.7);
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
                onClick={() => handleNavClick(item)}
                className={`w-full justify-center text-foreground hover:text-primary transition-colors font-sans text-lg rounded-md ${
                  isActive(item) ? "bg-purple-600/80 text-white hover:bg-purple-600/90" : "hover:bg-purple-600/40"
                }`}
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
