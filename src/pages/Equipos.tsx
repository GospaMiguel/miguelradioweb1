import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { useSearchParams } from "react-router-dom";

type EquipmentCategory = "hf" | "vhf-uhf" | "digital";

interface Equipment {
  id: string;
  name: string;
  image: string;
  characteristics: string;
  comments: string;
}

const equipmentData: Record<EquipmentCategory, Equipment[]> = {
  hf: [
    {
      id: "yaesu-ft-710",
      name: "YaesuFT-710",
      image: "https://i.ibb.co/Qvz8Lny8/yaesu-ft-710-aess-hf-50mhz-sdr-transceiver-100w-800498-1080x.webp",
      characteristics: `• Potencia de salida: 100W
• Banda de frecuencias: 1.8-54 MHz (HF + 6m)
• Tecnología SDR (Software Defined Radio)
• Receptor de doble conversión superheterodino
• Filtros IF seleccionables
• Display TFT a color de 4.3 pulgadas
• Modos: SSB, CW, AM, FM, RTTY, PSK31
• Funciones avanzadas de DSP
• Interface USB para control remoto y audio
• Dimensiones: 240 x 96 x 260 mm`,
      comments: `El Yaesu FT-710 es un transceptor HF de alta gama que combina la potencia tradicional de Yaesu con tecnología SDR moderna. Su receptor de doble conversión ofrece excelente selectividad y rechazo de señales no deseadas. El display TFT a color facilita la visualización del espectro y la configuración del equipo. Ideal para operadores que buscan un equipo versátil y potente para comunicaciones en HF. La interfaz USB permite control remoto y conexión directa con ordenadores para modos digitales.`,
    },
  ],
  "vhf-uhf": [],
  digital: [],
};

const Equipos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as EquipmentCategory | null;
  
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory>(
    categoryParam && ["hf", "vhf-uhf", "digital"].includes(categoryParam) 
      ? categoryParam 
      : "hf"
  );

  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(
    equipmentData[selectedCategory]?.[0]?.id || null
  );

  // Actualizar la categoría cuando cambie el parámetro de la URL
  useEffect(() => {
    if (categoryParam && ["hf", "vhf-uhf", "digital"].includes(categoryParam)) {
      setSelectedCategory(categoryParam);
      // Seleccionar el primer equipo de la nueva categoría
      const firstEquipment = equipmentData[categoryParam]?.[0];
      if (firstEquipment) {
        setSelectedEquipment(firstEquipment.id);
      }
    }
  }, [categoryParam]);

  // Actualizar el equipo seleccionado cuando cambie la categoría
  useEffect(() => {
    const firstEquipment = equipmentData[selectedCategory]?.[0];
    if (firstEquipment) {
      setSelectedEquipment(firstEquipment.id);
    }
  }, [selectedCategory]);

  const categories = [
    { id: "hf" as EquipmentCategory, label: "HF", subtitle: "Bandas decamétricas" },
    { id: "vhf-uhf" as EquipmentCategory, label: "VHF/UHF", subtitle: "Comunicaciones locales" },
    { id: "digital" as EquipmentCategory, label: "DIGITAL", subtitle: "Modos digitales modernos" },
  ];

  const currentEquipments = equipmentData[selectedCategory] || [];
  const currentEquipment = currentEquipments.find((eq) => eq.id === selectedEquipment);

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="equipos" />

      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Equipos
          </h1>

          {/* Botones de categorías */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSearchParams({ category: category.id });
                }}
                className={`p-6 rounded-lg text-center transition-all border-2 ${
                  selectedCategory === category.id
                    ? "bg-white text-[#8B0000] border-[#8B0000] shadow-[0_0_20px_#8B0000,0_0_40px_#8B0000,0_0_60px_#8B0000] ring-2 ring-[#8B0000]"
                    : "bg-white/90 text-[#8B0000] border-[#8B0000] shadow-[0_0_10px_#8B0000,0_0_20px_#8B0000] hover:shadow-[0_0_20px_#8B0000,0_0_40px_#8B0000]"
                }`}
              >
                <h4 className="font-display text-lg font-bold mb-2">{category.label}</h4>
                <p className="text-sm opacity-80">{category.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Contenido según la categoría seleccionada */}
          <div className="mt-8">
            {currentEquipments.length > 0 ? (
              <div className="space-y-8">
                {/* Nombre del equipo y foto primero */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Lista de equipos a la izquierda */}
                  <aside className="md:w-64 flex-shrink-0">
                    <nav className="space-y-2">
                      {currentEquipments.map((equipment) => (
                        <button
                          key={equipment.id}
                          onClick={() => setSelectedEquipment(equipment.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all font-medium text-white text-lg ${
                            selectedEquipment === equipment.id
                              ? "equipment-glow font-bold text-xl"
                              : "hover:bg-muted/50"
                          }`}
                        >
                          {equipment.name}
                        </button>
                      ))}
                    </nav>
                    <style>{`
                      .equipment-glow {
                        text-shadow: 0 0 15px rgba(255, 255, 255, 1),
                                     0 0 30px rgba(255, 255, 255, 1),
                                     0 0 50px rgba(255, 255, 255, 1),
                                     0 0 80px rgba(255, 255, 255, 0.9),
                                     0 0 120px rgba(255, 255, 255, 0.8),
                                     0 0 160px rgba(255, 255, 255, 0.6);
                      }
                    `}</style>
                  </aside>

                  {/* Foto del equipo - a la derecha del nombre */}
                  {currentEquipment && (
                    <div className="flex-1 flex justify-center">
                      <img
                        src={currentEquipment.image}
                        alt={currentEquipment.name}
                        className="max-w-full md:max-w-[60%] h-auto rounded-lg shadow-lg"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Características y comentarios debajo */}
                {currentEquipment && (
                  <div className="space-y-6">
                    {/* Comentarios */}
                    <div>
                      <h3 className="font-display text-2xl font-bold text-primary mb-4">
                        Comentarios
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {currentEquipment.comments}
                      </p>
                    </div>

                    {/* Características */}
                    <div>
                      <h3 className="font-display text-2xl font-bold text-primary mb-4">
                        Características
                      </h3>
                      <div className="text-foreground whitespace-pre-line leading-relaxed">
                        {currentEquipment.characteristics}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-foreground">
                  No hay equipos disponibles en esta categoría.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

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

export default Equipos;

