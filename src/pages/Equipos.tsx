import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { useSearchParams } from "react-router-dom";

type EquipmentCategory = "hf" | "vhf-uhf" | "digital";
type Subcategory = "emisoras" | "antenas" | "acopladores";

interface Equipment {
  id: string;
  name: string;
  image: string;
  characteristics: string;
  comments: string;
}

// Datos de HF organizados por subcategoría
const hfEquipmentData: Record<Subcategory, Equipment[]> = {
  emisoras: [
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
  antenas: [
    {
      id: "dipolo-v-hf",
      name: "DIPOLO RIGIDO EN V DE HF CON 5 BANDAS D-ORIGINAL DX-ADIP-HF-5B",
      image: new URL("@/assets/equipos/dipolo-v-hf-clean.png", import.meta.url).href,
      characteristics: `• Bandas: 7, 14, 21, 28, 50 MHz
• Potencia máxima: 500 W en CW y 1000 W en SSB
• Impedancia: 50 Ohm
• VSWR: <1.5
• Longitud: 9,7 m (simple 4,85 m)
• Radio rotación: 2,05 m
• Conector: PL macho
• Peso: 5,5 Kgs
• Resistencia al viento: 90 - 100 Km/h
• Diámetro mástil: 40 - 50 mm`,
      comments: `Dipolo rígido en V para HF, 7, 14, 21, 28 y 50 MHz, con una potencia máxima de 500 CW y 1000 W en SSB, con una longitud de 9,7 m (simple 4,85 m), resistencia al viento 90 a 100 Km/h....`,
    },
  ],
  acopladores: [
    {
      id: "ldg-z11pro2",
      name: "Acoplador HF\nLDG Z-11Pro II",
      image: new URL("@/assets/equipos/ldg-z11pro2.png", import.meta.url).href,
      characteristics: new URL("@/assets/equipos/ldg-z11pro2-specs.png", import.meta.url).href,
      comments: `El LDG Z-11Pro II es un sintonizador de antena compacto y automático para las bandas de 160 - 6m. Sólo se requiere una potencia mínima de entrada de RF de 0,1 vatios para un proceso de sintonización exitoso, por lo que la operación QRP tampoco es un problema. La potencia de entrada máxima es de 125 W (PEP), que es completamente suficiente para la mayoría de los transceptores comunes de la clase de 100 vatios.

Casi todas las antenas se pueden personalizar: Dipolos, verticales, en V invertida, todas las antenas con alimentación coaxial. Con un balun 1:4 opcional, también se pueden sintonizar antenas de hilo largo o alimentadas por hilo paralelo. El rango de impedancia ajustable es de 6 a 1000 Ω (16 a 150 Ω a 6 m), 6 a 4000 Ω con balun 1:4.

Funcionamiento sencillo: pulse «Sintonizar» mientras se transmite una portadora y el sintonizador sintoniza automáticamente. Para un funcionamiento aún más cómodo, existen varias interfaces (cables de control) para la mayoría de los transceptores. Esto facilita aún más la sintonización: con sólo pulsar un botón, el TRx pasa a transmitir, se activa la sintonización y la radio vuelve al modo de funcionamiento utilizado anteriormente.

2000 memorias en las que se almacenan los ajustes una vez encontrados, LEDS para la visualización de funciones.`,
    },
  ],
};

// Datos de VHF/UHF organizados por subcategoría
const vhfUhfEquipmentData: Record<Subcategory, Equipment[]> = {
  emisoras: [
    {
      id: "baofeng-uv21-pro",
      name: "Walkie talkie Baofeng uv-21 pro",
      image: new URL("@/assets/equipos/baofeng-uv21-pro.jpg", import.meta.url).href,
      characteristics: `• Frecuencia inalámbrica de la copia
• Canal de memoria 999
• Pantalla de 1,77 pulgadas
• Función VOX
• Función de emergencia
• Función de escaneo
• Batería Ahorrar`,
      comments: `• Largo Alcance de 16 KM: Manténgase conectado con un alcance de hasta 16 km, lo que lo hace perfecto para actividades al aire libre y emergencias.

• Impermeable y resistente al agua: Con una clasificación IP45, este walkie talkie es impermeable y resistente al agua, lo que garantiza una comunicación confiable incluso en condiciones húmedas.

• Tipo-c Cargador: Cargue su walkie talkie rápida y fácilmente con el cargador tipo C, ahorrándole tiempo y molestia.

• UV 5R: La función UV 5R le permite enviar y recibir mensajes sin la necesidad de una red celular, lo que la hace ideal para la comunicación fuera de la red.

Este walkie talkie funciona tanto en directo como a través de repetidores.

Su coste es lo mejor de todo, se puede encontrar en algunas páginas entre 20 y 25 euros.`,
    },
  ],
  antenas: [],
  acopladores: [],
};

const equipmentData: Record<EquipmentCategory, Equipment[]> = {
  hf: [], // HF ahora usa subcategorías
  "vhf-uhf": [], // VHF/UHF ahora usa subcategorías
  digital: [],
};

const subcategories = [
  { id: "emisoras" as Subcategory, label: "Emisoras" },
  { id: "antenas" as Subcategory, label: "Antenas" },
  { id: "acopladores" as Subcategory, label: "Acopladores/Medidores de estacionarias" },
];

const Equipos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as EquipmentCategory | null;
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory>(
    categoryParam && ["hf", "vhf-uhf", "digital"].includes(categoryParam) 
      ? categoryParam 
      : "hf"
  );

  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory>("emisoras");

  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);

  // Scroll al inicio del contenido cuando cambia la categoría
  const scrollToContent = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Obtener los equipos actuales según la categoría y subcategoría
  const getCurrentEquipments = () => {
    if (selectedCategory === "hf") {
      return hfEquipmentData[selectedSubcategory] || [];
    }
    if (selectedCategory === "vhf-uhf") {
      return vhfUhfEquipmentData[selectedSubcategory] || [];
    }
    return equipmentData[selectedCategory] || [];
  };

  const currentEquipments = getCurrentEquipments();

  // Actualizar la categoría cuando cambie el parámetro de la URL
  useEffect(() => {
    if (categoryParam && ["hf", "vhf-uhf", "digital"].includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Actualizar el equipo seleccionado cuando cambie la categoría o subcategoría
  useEffect(() => {
    const equipments = getCurrentEquipments();
    if (equipments.length > 0) {
      setSelectedEquipment(equipments[0].id);
    } else {
      setSelectedEquipment(null);
    }
  }, [selectedCategory, selectedSubcategory]);

  const categories = [
    { id: "hf" as EquipmentCategory, label: "HF", subtitle: "Bandas decamétricas" },
    { id: "vhf-uhf" as EquipmentCategory, label: "VHF/UHF", subtitle: "Comunicaciones locales" },
    { id: "digital" as EquipmentCategory, label: "DIGITAL", subtitle: "Modos digitales modernos" },
  ];

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
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSearchParams({ category: category.id });
                  if (category.id === "hf" || category.id === "vhf-uhf") {
                    setSelectedSubcategory("emisoras");
                  }
                  scrollToContent();
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

          {/* Subcategorías de HF y VHF/UHF */}
          {(selectedCategory === "hf" || selectedCategory === "vhf-uhf") && (
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {subcategories.map((subcategory) => (
                <button
                  key={subcategory.id}
                  onClick={() => {
                    setSelectedSubcategory(subcategory.id);
                    scrollToContent();
                  }}
                  className={`p-4 rounded-lg text-center transition-all border-2 ${
                    selectedSubcategory === subcategory.id
                      ? "bg-[#8B0000] text-white border-[#8B0000] shadow-[0_0_15px_#8B0000,0_0_30px_#8B0000]"
                      : "bg-white/80 text-[#8B0000] border-[#8B0000]/50 hover:border-[#8B0000] hover:shadow-[0_0_10px_#8B0000]"
                  }`}
                >
                  <h5 className="font-display text-base font-semibold">{subcategory.label}</h5>
                </button>
              ))}
            </div>
          )}

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
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all font-medium text-white text-lg whitespace-pre-line ${
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
                        className={`max-w-full h-auto rounded-lg ${
                          selectedCategory === "vhf-uhf" && selectedSubcategory === "emisoras"
                            ? "md:max-w-[90%] border-4 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6),0_0_30px_rgba(250,204,21,0.4)]"
                            : selectedSubcategory === "emisoras" 
                              ? "md:max-w-[60%] border-4 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6),0_0_30px_rgba(250,204,21,0.4)]"
                              : "md:max-w-[60%] shadow-lg"
                        }`}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Características y comentarios debajo */}
                {currentEquipment && (
                  <div className="space-y-2 -mt-4">
                    {/* Comentarios / Descripción */}
                    <div>
                      <h3 className="font-display text-2xl font-bold text-primary mb-2">
                        {selectedCategory === "vhf-uhf" ? "Descripción" : "Comentarios"}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {currentEquipment.comments}
                      </p>
                    </div>

                    {/* Características / Datos Técnicos */}
                    <div>
                      <h3 className="font-display text-2xl font-bold text-primary mb-2">
                        {currentEquipment.characteristics.includes('/assets/') || currentEquipment.characteristics.includes('blob:') ? 'Datos Técnicos' : 'Características'}
                      </h3>
                      {currentEquipment.characteristics.includes('/assets/') || currentEquipment.characteristics.includes('blob:') ? (
                        <img
                          src={currentEquipment.characteristics}
                          alt="Datos técnicos"
                          className="max-w-full rounded-lg border-4 border-amber-700 shadow-[0_0_15px_rgba(180,120,60,0.6),0_0_30px_rgba(180,120,60,0.4)]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="text-foreground whitespace-pre-line leading-relaxed">
                          {currentEquipment.characteristics}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-foreground">
                  No hay equipos disponibles en esta {selectedCategory === "hf" ? "subcategoría" : "categoría"}.
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
