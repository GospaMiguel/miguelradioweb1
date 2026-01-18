import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface SubItem {
  id: string;
  label: string;
  path: string;
}

interface NavItem {
  id: string;
  label: string;
  isPage?: boolean;
  path?: string;
  hasDropdown?: boolean;
  subItems?: SubItem[];
  noTranslate?: boolean;
}

const navItems: NavItem[] = [
  { id: "inicio", label: "Inicio", isPage: true, path: "/" },
  { id: "sobre-nosotros", label: "Sobre Nosotros" },
  { id: "que-ofrecemos", label: "Que ofrecemos" },
  { id: "actividades", label: "Actividades" },
  { id: "reuniones", label: "Reuniones" },
  { id: "galeria", label: "Galería" },
  { 
    id: "equipamientos", 
    label: "Equipamientos", 
    hasDropdown: true,
    subItems: [
      { id: "equipos", label: "Equipos", path: "/equipos" },
      { id: "repetidores", label: "Repetidores", path: "/repetidores" }
    ]
  },
  { 
    id: "sobre-radio", 
    label: "Sobre la Radio", 
    hasDropdown: true,
    subItems: [
      { id: "sobre-radio-section", label: "Sobre la Radio", path: "/#sobre-radio" },
      { id: "examenes", label: "Exámenes", path: "/#examenes" }
    ]
  },
  { id: "tips", label: "Tips Principiantes", noTranslate: true },
  { id: "contacto", label: "Contáctanos" },
];

interface NavigationProps {
  currentPage?: string;
}

export const Navigation = ({ currentPage }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>("inicio");
  const [cameFromOtherPage, setCameFromOtherPage] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const prevPathnameRef = useRef(location.pathname);

  // Detectar cuando el usuario viene de otra página
  useEffect(() => {
    // Al cargar la página por primera vez en "/", activar "inicio"
    if (initialLoad && location.pathname === "/") {
      setActiveItem("inicio");
      setCameFromOtherPage(true);
      setInitialLoad(false);
      prevPathnameRef.current = location.pathname;
      return;
    }
    setInitialLoad(false);

    if (location.pathname === "/equipos") {
      setActiveItem("equipamientos");
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
  }, [location.pathname, initialLoad]);

  // Detectar qué sección está visible cuando estamos en la página de inicio
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      // Si estamos en el top de la página (incluyendo el hero), mantener "inicio" activo
      if (window.scrollY < 300) {
        setActiveItem("inicio");
        return;
      }

      const sections = navItems
        .filter(item => !item.isPage)
        .map(item => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter(section => section.element !== null);
      
      // También incluir la sección "equipos" y mapearla a "equipamientos"
      const equiposElement = document.getElementById("equipos");
      if (equiposElement) {
        sections.push({ id: "equipamientos", element: equiposElement });
      }

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

      // Si encontramos una sección activa, activarla
      if (activeSection) {
        setActiveItem(activeSection);
        setCameFromOtherPage(false);
      }
    };

    // Ejecutar al cargar para detectar hash
    const hash = location.hash.replace("#", "");
    if (hash) {
      // Si el hash es "equipos", activar "equipamientos" (el dropdown padre)
      if (hash === "equipos") {
        setActiveItem("equipamientos");
        setCameFromOtherPage(false);
      } else if (navItems.find(item => item.id === hash)) {
        setActiveItem(hash);
        setCameFromOtherPage(false);
      }
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

  const handleSubItemClick = (subItem: SubItem, parentId: string) => {
    setActiveItem(parentId);
    
    // Check if path is a hash link (section on homepage)
    if (subItem.path.startsWith("/#")) {
      const sectionId = subItem.path.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setCameFromOtherPage(false);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        setCameFromOtherPage(false);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(subItem.path);
    }
    setIsOpen(false);
  };

  const isActive = (item: NavItem) => {
    return activeItem === item.id;
  };

  return (
    <>
      {/* Overlay oscuro para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg w-full max-w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <div className="flex items-center justify-center h-24 relative">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-3">
            {navItems.map((item) => (
              item.hasDropdown && item.subItems ? (
                <DropdownMenu key={item.id}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`text-white hover:text-white transition-all font-sans text-base px-1.5 py-1 nav-glow font-bold rounded-md ${
                        isActive(item) ? "bg-purple-600/80 hover:bg-purple-600/90" : "hover:bg-purple-600/40"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background/95 backdrop-blur-md border-border">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.id}
                        onClick={() => handleSubItemClick(subItem, item.id)}
                        className="text-white hover:bg-purple-600/40 cursor-pointer font-sans"
                      >
                        {subItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item)}
                  className={`text-white hover:text-white transition-all font-sans text-base px-1.5 py-1 nav-glow font-bold rounded-md ${
                    isActive(item) ? "bg-purple-600/80 hover:bg-purple-600/90" : "hover:bg-purple-600/40"
                  }`}
                  {...(item.noTranslate ? { translate: "no" } : {})}
                >
                  <span className={item.noTranslate ? "notranslate" : ""}>{item.label}</span>
                </Button>
              )
            ))}
            <style>{`
              .nav-glow {
                text-shadow: 0 0 15px rgba(255, 255, 255, 0.9),
                             0 0 35px rgba(255, 255, 255, 0.6),
                             0 0 60px rgba(255, 255, 255, 0.3);
              }
              .nav-glow:hover {
                text-shadow: 0 0 20px rgba(255, 255, 255, 1),
                             0 0 45px rgba(255, 255, 255, 0.7),
                             0 0 70px rgba(255, 255, 255, 0.4);
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
          <div className="lg:hidden py-4 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
            {navItems.map((item) => (
              item.hasDropdown && item.subItems ? (
                <div key={item.id} className="space-y-1">
                  <div className="text-center text-white font-sans text-lg font-bold py-2">
                    {item.label}
                  </div>
                  {item.subItems.map((subItem) => (
                    <Button
                      key={subItem.id}
                      variant="ghost"
                      onClick={() => handleSubItemClick(subItem, item.id)}
                      className={`w-full justify-center text-foreground hover:text-primary transition-colors font-sans text-base rounded-md pl-8 ${
                        activeItem === item.id ? "bg-purple-600/60 text-white hover:bg-purple-600/70" : "hover:bg-purple-600/40"
                      }`}
                    >
                      ↳ {subItem.label}
                    </Button>
                  ))}
                </div>
              ) : (
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
              )
            ))}
          </div>
        )}
      </div>
    </nav>
    </>
  );
};
