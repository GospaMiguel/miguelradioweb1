import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  thumbnail: string;
  full: string;
  alt: string;
}

interface Category {
  id: string;
  name: string;
  images: GalleryImage[];
}

const categories: Category[] = [
  {
    id: "encuentro-2025-argolla",
    name: 'Encuentro 2025 "La Argolla"',
    images: [
      {
        thumbnail: "https://i.ibb.co/XG2Mpvv/IMG-20251214-145258.jpg",
        full: "https://i.ibb.co/q2yV9PP/IMG-20251214-145258.jpg",
        alt: "Encuentro 2025 La Argolla - Imagen 1",
      },
      {
        thumbnail: "https://i.ibb.co/WNCvMGdk/IMG-20251214-171524.jpg",
        full: "https://i.ibb.co/JWZjGmbv/IMG-20251214-171524.jpg",
        alt: "Encuentro 2025 La Argolla - Imagen 2",
      },
      {
        thumbnail: "https://i.ibb.co/Gfnb8HHS/IMG-20251214-171623.jpg",
        full: "https://i.ibb.co/cKk7ZYYn/IMG-20251214-171623.jpg",
        alt: "Encuentro 2025 La Argolla - Imagen 3",
      },
    ],
  },
];

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentCategory = categories.find((cat) => cat.id === selectedCategory);
  const currentImages = currentCategory?.images || [];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="galeria" />

      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Galería
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar con categorías */}
            <aside className="md:w-64 flex-shrink-0">
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Grid de imágenes */}
            <main className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {currentImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <img
                      src={image.thumbnail}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {currentImages.length === 0 && (
                <p className="text-foreground text-center py-12">
                  No hay imágenes en esta categoría.
                </p>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Botón cerrar */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </Button>

          {/* Flecha izquierda */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="h-12 w-12" />
          </Button>

          {/* Imagen */}
          <img
            src={currentImages[currentImageIndex]?.full}
            alt={currentImages[currentImageIndex]?.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Flecha derecha */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="h-12 w-12" />
          </Button>

          {/* Contador */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImageIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}

      <footer className="bg-muted border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-lg font-bold text-primary mb-2">
            Asociación Cantabra de Radioaficionados
          </p>
          <p className="text-foreground text-sm">
            © {new Date().getFullYear()} - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Galeria;
