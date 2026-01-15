import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import comida2025Grupo1 from "@/assets/galeria/comida-2025-grupo1.jpg";
import comida2025Grupo2 from "@/assets/galeria/comida-2025-grupo2.jpg";
import comida2025Mesa1 from "@/assets/galeria/comida-2025-mesa1.jpg";
import comida2025Mesa2 from "@/assets/galeria/comida-2025-mesa2.jpg";
import comida2025Mesa3 from "@/assets/galeria/comida-2025-mesa3.jpg";
import comida2025Mesa4 from "@/assets/galeria/comida-2025-mesa4.jpg";
import comida2025Mesa5 from "@/assets/galeria/comida-2025-mesa5.jpg";
import actividadAstillero2025 from "@/assets/galeria/actividad-astillero-2025.png";
import muslera2025_1 from "@/assets/galeria/muslera-2025-1.jpg";
import muslera2025_2 from "@/assets/galeria/muslera-2025-2.jpg";

export interface GalleryItem {
  thumbnail: string;
  full: string;
  alt: string;
  type: "image" | "video";
  videoId?: string;
}

export interface Category {
  id: string;
  name: string;
  items: GalleryItem[];
}

export const categories: Category[] = [
  {
    id: "muslera-2025",
    name: "Activacion Fiestas Virgen de Muslera 2025",
    items: [
      {
        thumbnail: muslera2025_1,
        full: muslera2025_1,
        alt: "Activacion Virgen de Muslera 2025 - Foto 1",
        type: "image",
      },
      {
        thumbnail: muslera2025_2,
        full: muslera2025_2,
        alt: "Activacion Virgen de Muslera 2025 - Foto 2",
        type: "image",
      },
    ],
  },
  {
    id: "actividad-astillero-2025",
    name: "Actividad estraescolares Astillero Agosto 2025",
    items: [
      {
        thumbnail: actividadAstillero2025,
        full: actividadAstillero2025,
        alt: "Actividad extraescolares Astillero 2025",
        type: "image",
      },
      {
        thumbnail: actividadAstillero2025,
        full: "",
        alt: "Video Actividad Astillero 2025",
        type: "video",
        videoId: "vkJiSSEt6WE",
      },
    ],
  },
  {
    id: "reunion-anual-2025",
    name: 'Comida anual de amigos de esta asociación de Cantabria 2025',
    items: [
      {
        thumbnail: "https://i.ibb.co/XG2Mpvv/IMG-20251214-145258.jpg",
        full: "https://i.ibb.co/q2yV9PP/IMG-20251214-145258.jpg",
        alt: "Encuentro 2025 La Argolla - Imagen 1",
        type: "image",
      },
      {
        thumbnail: "https://i.ibb.co/WNCvMGdk/IMG-20251214-171524.jpg",
        full: "https://i.ibb.co/JWZjGmbv/IMG-20251214-171524.jpg",
        alt: "Encuentro 2025 La Argolla - Imagen 2",
        type: "image",
      },
      {
        thumbnail: "https://i.ibb.co/Gfnb8HHS/IMG-20251214-171623.jpg",
        full: "https://i.ibb.co/cKk7ZYYn/IMG-20251214-171623.jpg",
        alt: "Encuentro 2025 La Argolla - Imagen 3",
        type: "image",
      },
      {
        thumbnail: comida2025Grupo1,
        full: comida2025Grupo1,
        alt: "Comida anual 2025 - Foto de grupo 1",
        type: "image",
      },
      {
        thumbnail: comida2025Grupo2,
        full: comida2025Grupo2,
        alt: "Comida anual 2025 - Foto de grupo 2",
        type: "image",
      },
      {
        thumbnail: comida2025Mesa1,
        full: comida2025Mesa1,
        alt: "Comida anual 2025 - Mesa 1",
        type: "image",
      },
      {
        thumbnail: comida2025Mesa2,
        full: comida2025Mesa2,
        alt: "Comida anual 2025 - Mesa 2",
        type: "image",
      },
      {
        thumbnail: comida2025Mesa3,
        full: comida2025Mesa3,
        alt: "Comida anual 2025 - Mesa 3",
        type: "image",
      },
      {
        thumbnail: comida2025Mesa4,
        full: comida2025Mesa4,
        alt: "Comida anual 2025 - Mesa 4",
        type: "image",
      },
      {
        thumbnail: comida2025Mesa5,
        full: comida2025Mesa5,
        alt: "Comida anual 2025 - Mesa 5",
        type: "image",
      },
      {
        thumbnail: "https://img.youtube.com/vi/PpLINZu8f9g/hqdefault.jpg",
        full: "",
        alt: "Video",
        type: "video",
        videoId: "PpLINZu8f9g",
      },
    ],
  },
];

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentMediaType, setCurrentMediaType] = useState<"image" | "video">("image");

  const currentCategory = categories.find((cat) => cat.id === selectedCategory);
  const allItems = currentCategory?.items || [];
  
  // Separar fotos y videos
  const photos = allItems.filter((item) => item.type === "image");
  const videos = allItems.filter((item) => item.type === "video");
  
  // Items actuales según el tipo seleccionado
  const currentItems = currentMediaType === "image" ? photos : videos;

  const openLightbox = (index: number) => {
    setCurrentItemIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentItemIndex((prev) => (prev === 0 ? currentItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentItemIndex((prev) => (prev === currentItems.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="galeria" />

      <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-2 md:px-4">
        <div className="container mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
            Galería
          </h1>

          {/* Selector de categorías */}
          <div className="mb-6 md:mb-8">
            <label htmlFor="category-select" className="block text-sm font-medium text-foreground mb-2">
              Seleccionar evento:
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentItemIndex(0);
              }}
              className="w-full max-w-xl px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {/* Grid de imágenes y videos */}
            <main className="flex-1 space-y-8">
              {/* Tabs para Fotos y Videos */}
              <div className="flex gap-2 md:gap-4 border-b border-border pb-3 md:pb-4">
                <button
                  onClick={() => {
                    setCurrentMediaType("image");
                    setCurrentItemIndex(0);
                  }}
                  className={`px-4 md:px-6 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base ${
                    currentMediaType === "image"
                      ? "bg-secondary text-secondary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  Fotos ({photos.length})
                </button>
                <button
                  onClick={() => {
                    setCurrentMediaType("video");
                    setCurrentItemIndex(0);
                  }}
                  className={`px-4 md:px-6 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base ${
                    currentMediaType === "video"
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  Videos ({videos.length})
                </button>
              </div>

              {/* Grid de contenido */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
                {currentItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary relative"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {currentItems.length === 0 && (
                <p className="text-foreground text-center py-12">
                  No hay {currentMediaType === "image" ? "fotos" : "videos"} en esta categoría.
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

          {/* Contenido: Imagen o Video */}
          {currentItems[currentItemIndex]?.type === "video" ? (
            <iframe
              src={`https://www.youtube.com/embed/${currentItems[currentItemIndex]?.videoId}?autoplay=1`}
              title={currentItems[currentItemIndex]?.alt}
              className="w-[90vw] h-[50.625vw] max-h-[90vh] max-w-[160vh]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={currentItems[currentItemIndex]?.full}
              alt={currentItems[currentItemIndex]?.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}

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
            {currentItemIndex + 1} / {currentItems.length}
          </div>
        </div>
      )}

      <footer className="bg-muted border-t border-border py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-base md:text-lg font-bold text-primary mb-1 md:mb-2">
            Asociación Cantabra de Radioaficionados
          </p>
          <p className="text-foreground text-xs md:text-sm">
            © {new Date().getFullYear()} - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Galeria;
