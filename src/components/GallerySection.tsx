import { useState } from "react";
import { Upload, Video, Image as ImageIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

export const GallerySection = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const { toast } = useToast();

  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const handleYoutubeAdd = () => {
    const embedUrl = getYoutubeEmbedUrl(youtubeUrl);
    if (embedUrl) {
      toast({
        title: "Video añadido",
        description: "El video de YouTube se ha añadido correctamente",
      });
      setYoutubeUrl("");
    } else {
      toast({
        title: "URL inválida",
        description: "Por favor, introduce una URL válida de YouTube",
        variant: "destructive",
      });
    }
  };

  const handleFileUpload = (type: "image" | "video") => {
    toast({
      title: "Funcionalidad en desarrollo",
      description: `La subida de ${type === "image" ? "imágenes" : "videos"} estará disponible próximamente`,
    });
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-muted rounded-lg text-center hover:bg-muted/80 transition-colors border-2 border-dashed border-border">
          <ImageIcon className="w-12 h-12 mx-auto mb-4 text-secondary" />
          <h4 className="font-display text-lg font-bold text-foreground mb-2">Subir Fotos</h4>
          <p className="text-sm text-foreground mb-4">
            Comparte fotos de activaciones y eventos
          </p>
          <Button
            onClick={() => handleFileUpload("image")}
            variant="outline"
            className="w-full"
          >
            <Upload className="w-4 h-4 mr-2" />
            Seleccionar Fotos
          </Button>
        </div>

        <div className="p-6 bg-muted rounded-lg text-center hover:bg-muted/80 transition-colors border-2 border-dashed border-border">
          <Video className="w-12 h-12 mx-auto mb-4 text-accent" />
          <h4 className="font-display text-lg font-bold text-foreground mb-2">Subir Videos</h4>
          <p className="text-sm text-foreground mb-4">
            Sube videos de tus experiencias
          </p>
          <Button
            onClick={() => handleFileUpload("video")}
            variant="outline"
            className="w-full"
          >
            <Upload className="w-4 h-4 mr-2" />
            Seleccionar Videos
          </Button>
        </div>

        <div className="p-6 bg-muted rounded-lg text-center hover:bg-muted/80 transition-colors border-2 border-dashed border-border">
          <Video className="w-12 h-12 mx-auto mb-4 text-warning" />
          <h4 className="font-display text-lg font-bold text-foreground mb-2">YouTube</h4>
          <p className="text-sm text-foreground mb-4">
            Añade videos desde YouTube
          </p>
          <div className="space-y-2">
            <Input
              placeholder="URL de YouTube"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="bg-background"
            />
            <Button
              onClick={handleYoutubeAdd}
              variant="outline"
              className="w-full"
            >
              Añadir Video
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-display text-2xl font-bold text-primary mb-6">Galería de Medios</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for uploaded content */}
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-border">
            <p className="text-foreground">Contenido próximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
};
