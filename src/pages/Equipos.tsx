import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { useSearchParams } from "react-router-dom";
import anytoneAt5888uv from "@/assets/equipos/anytone-at5888uv.png";
import yaesuFt991a from "@/assets/equipos/yaesu-ft991a.png";
import diamondX200n from "@/assets/equipos/diamond-x200n.png";

type EquipmentCategory = "hf" | "vhf-uhf" | "digital";
type SubcategoryType = "emisoras" | "antenas" | "acopladores";
type Subcategory = SubcategoryType | null;

interface Equipment {
  id?: string;
  name: string;
  image: string;
  characteristics?: string;
  comments?: string;
  details?: string;
  specifications?: string;
  noTranslate?: boolean;
}

// Datos de HF organizados por subcategoría
const hfEquipmentData: Record<SubcategoryType, Equipment[]> = {
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
      id: "ezwire-600w",
      name: "Antena de hilo largo\nEZWIRE 600W",
      image: new URL("@/assets/equipos/ezwire-600w.png", import.meta.url).href,
      details: `Antena de hilo largo de 16 metros 600W para HF que no necesita radiales ni conexiones grupales. Cobertura total de todas las bandas de HF de 160m a 10m. Max Pwr 1KW, Max SWR 1: 3, además EZwire funcionan bien en varias configuraciones: Horizontal, Vertical, Sloper, L y Zig-Zag. EZ-wire es una antena perfecta para espacios limitados.
EZwire le brinda cobertura de la mayoría de las bandas de HF, sin embargo, dependiendo de la configuración de montaje y del entorno en el que está montada su impedancia, puede variar mucho de una banda a otra. Para poder disfrutar de todas las bandas con EZwire, necesitará tener un sintonizador de antena, preferiblemente fuera de la radio y el manual.
La EZwire es una antena diseñada para radioaficionados que tienen poco espacio.`,
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
const vhfUhfEquipmentData: Record<SubcategoryType, Equipment[]> = {
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
Su coste es lo mejor de todo, se puede encontrar en algunas páginas entre 20 y 25 euros.
Para empezar con esta afición, no hacen falta grandes equipos, con este tipo de walkies es suficiente para conectarte incluso con zonas lejanas a través de los repetidores.`,
    },
    {
      id: "anytone-at5888uv",
      name: "Anytone AT-5888 UV",
      noTranslate: true,
      image: anytoneAt5888uv,
      details: `El Anytone AT-5888UV es un transceptor bibanda construido robustamente, de altísima calidad con potencias de 50 W en VHF y de 40 W en UHF.
Posee una ventilación forzada mediante un ventilador controlado por un termostato para mantener siempre una temperatura adecuada en los circuitos internos del transceptor. En uno de sus laterales posee un conector USB para carga o alimentación de dispositivos tipo teléfonos móviles, ipad, cámaras de fotos o video,...
El AT-5888UV tiene cuatro bandas independientes en recepción, que son UU, UV, VU y VV, para la recepción dual y asimismo transmisión dual, más la recepción en banda Aerea en AM y FM (no comercial), banda Marina, PMR, TV analógicas, etc.
Dispone de 758 canales de memoria, operación FULL DUPLEX con controles de volumen y squelch independientes. También incluye los modos DCS, DTMF y tonos secuenciales de 2 y 5 tonos para llamadas selectivas. Incluye un cable de separación de la carátula de 3 metros de longitud.
Dispone de un gran ancho de banda en recepción: (FM) 134-174, 200-260, 350-400, 400-520 MHz y FM Broadcast, (AM) 118-134 MHz (Banda Aérea).`,
      characteristics: `50 W de potencia en VHF y 40 W en UHF
758 Canales de memoria
FULL DUPLEX con controles independientes de volumen y squelch
Incluye función banda cruzada
Cuatro bandas independientes en recepción UU, UV, VU, VV, para entrada y salida en dual, más recepción para señales de AM/FM en las bandas Marina, Aviación, PMR,...
Display LCD con brillo ajustable muy útil para uso nocturno
Dispone de una adecuada distribución se su botonera y potenciómetros para una fácil operación
Dispone de 758 canales programables identificables con nombre o número de memoria
Cuatro niveles de potencia para cada banda
Incluye tonos CTCSS (subtonos) y DCS con 2 y 5 tonos de llamada por canal, para rechazar llamadas no deseadas de otras estaciones
Dispone de varias funciones de escáner incluyendo las de CTCSS y DCS
Codificación de llamada en 5 tonos secuenciales, llamada de emergencia, llamada a todos, función hombre muerto, despertador remoto,...
Función automática de identificación de llamada por DTMF-ANI o bien 5 TONOS-ANI
Función compander: circuito para mejorar la relación señal/ruido, seleccionable canal por canal
Distintos anchos de banda por canal, 25 kHz para banda ancha y 12,5 kHz para banda estrecha
Alarma anti-robo para mayor seguridad
Incluye micrófono con teclas retroiluminadas con subida y bajada de frecuencias o canales y teclado numérico y tecla de conmutación de bandas A/B.`,
      specifications: `Nº. de canales: 758
Espaciado entre canales: 25 kHz (ancha) y 12,5 kHz (estrecha)
Saltos de frecuencia: 2.5, 5, 6.25, 10, 12.5, 15, 20, 25, 30 y 50 kHz
Voltaje: 13,8 VCC +-15%
Squelch: Portadora, CTCSS, DCS, 2 Tonos, 5 Tonos, DTMF
Estabilidad de frecuencia: +-2.5 ppm
Temperatura de operación: -20º C a +60º C
Dimensiones: (A x Al x D): 139 (A) x 40 (Al) x 212 (D) mm
Peso: 1.14 kg aprox.
Potencia de salida VHF: 50 W, 25 W, 10 W y 5 W
Potencia de salida UHF: 40 W, 25 W, 10 W y 5 W.`,
    },
  ],
  antenas: [
    {
      id: "diamond-x200n",
      name: "ANTENA VHF/UHF DIAMOND X-200 N",
      image: diamondX200n,
      characteristics: `Ganancia VHF: 6,0 dB
Ganancia UHF: 8,0 dB
Potencia max: 200 W
Impedancia: 50 Ohm.
Longitud: 2,5 m. en 2 tramos
Peso: 1.4 Kg
ROE S.W.R: 1,5
Conector: A elegir entre conector N (baja perdida) o el estándar PL
Radiales: 3 de 54 cm cada uno`,
      comments: `Antena Diamond (original) de boble banda con 2,5 m de longitud en dos tramos y 6.0 dB en VHF y 8.0 dB en UHF con conector "N" o "PL" en la base. Diamond X200 made in Japan.`,
    },
  ],
  acopladores: [],
};

const equipmentData: Record<EquipmentCategory, Equipment[]> = {
  hf: [], // HF ahora usa subcategorías
  "vhf-uhf": [], // VHF/UHF ahora usa subcategorías
  digital: [],
};

const subcategories = [
  { id: "emisoras" as SubcategoryType, label: "Emisoras" },
  { id: "antenas" as SubcategoryType, label: "Antenas" },
  { id: "acopladores" as SubcategoryType, label: "Acopladores/Medidores de estacionarias" },
];

const Equipos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as EquipmentCategory | null;
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory | null>(null);

  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null);

  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);

  // Scroll al inicio del contenido cuando cambia la categoría
  const scrollToContent = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Obtener los equipos actuales según la categoría y subcategoría
  const getCurrentEquipments = () => {
    if (selectedCategory === null || selectedSubcategory === null) {
      return [];
    }
    if (selectedCategory === "hf") {
      return hfEquipmentData[selectedSubcategory] || [];
    }
    if (selectedCategory === "vhf-uhf") {
      return vhfUhfEquipmentData[selectedSubcategory] || [];
    }
    return equipmentData[selectedCategory] || [];
  };

  const currentEquipments = getCurrentEquipments();

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

      <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-2 md:px-4">
        <div className="container mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
            Equipos
          </h1>

          {/* Botones de categorías */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSearchParams({ category: category.id });
                  setSelectedSubcategory(null);
                  scrollToContent();
                }}
                className={`p-4 md:p-6 rounded-lg text-center transition-all border-2 ${
                  selectedCategory === category.id
                    ? "bg-[#CC0000] text-white border-[#CC0000]"
                    : "bg-white text-[#8B0000] border-[#CC0000] hover:bg-gray-50"
                }`}
              >
              <h4 className="font-display text-base md:text-lg font-bold mb-1 md:mb-2">
                <span className="notranslate" translate="no">{category.label}</span>
              </h4>
                <p className="text-xs md:text-sm opacity-80">{category.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Subcategorías de HF y VHF/UHF */}
          {(selectedCategory === "hf" || selectedCategory === "vhf-uhf") && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
              {subcategories.map((subcategory) => (
                <button
                  key={subcategory.id}
                  onClick={() => {
                    setSelectedSubcategory(subcategory.id);
                    scrollToContent();
                  }}
                  className={`p-3 md:p-4 rounded-lg text-center transition-all border-2 ${
                    selectedSubcategory === subcategory.id
                      ? "bg-[#006400] text-white border-[#00FF00]"
                      : "bg-white text-[#006400] border-[#00FF00]/70 hover:bg-gray-50"
                  }`}
                >
                  <h5 className="font-display text-sm md:text-base font-semibold">{subcategory.label}</h5>
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
                          {...(equipment.noTranslate ? { translate: "no" } : {})}
                        >
                          <span className={equipment.noTranslate ? "notranslate" : ""}>{equipment.name}</span>
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
                              : selectedSubcategory === "antenas" && selectedCategory === "hf"
                                ? "md:max-w-[40%] shadow-lg"
                                : "md:max-w-[60%] shadow-lg"
                        }`}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Características y comentarios debajo */}
                {currentEquipment && (
                  <div className="space-y-6 -mt-4">
                    {/* Detalles (para equipos con campo details) */}
                    {currentEquipment.details && (
                      <div>
                        <h3 className="font-display text-2xl font-bold text-primary mb-2">
                          Detalles
                        </h3>
                        <div className="text-foreground whitespace-pre-line leading-normal">
                          {currentEquipment.details}
                        </div>
                      </div>
                    )}

                    {/* Comentarios / Descripción */}
                    {currentEquipment.comments && (
                      <div>
                        <h3 className="font-display text-2xl font-bold text-primary mb-2">
                          {selectedCategory === "vhf-uhf" ? "Descripción" : "Comentarios"}
                        </h3>
                        <p className="text-foreground leading-normal whitespace-pre-line">
                          {currentEquipment.comments}
                        </p>
                      </div>
                    )}

                    {/* Características / Datos Técnicos */}
                    {currentEquipment.characteristics && (
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
                          <div className="text-foreground whitespace-pre-line leading-normal">
                            {currentEquipment.characteristics}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Especificaciones (para equipos con campo specifications) */}
                    {currentEquipment.specifications && (
                      <div>
                        <h3 className="font-display text-2xl font-bold text-primary mb-2">
                          Especificaciones
                        </h3>
                        <div className="text-foreground whitespace-pre-line leading-normal">
                          {currentEquipment.specifications}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-8 py-1 pl-16">
                <p className="text-white text-xl font-bold" style={{ textShadow: '0 0 20px rgba(255,255,255,1), 0 0 40px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,1), 0 0 100px rgba(255,255,255,0.9), 0 0 150px rgba(255,255,255,0.8), 0 0 200px rgba(255,255,255,0.6)' }}>
                  Pincha en las subcategorías para ver el contenido
                </p>
                <img 
                  src={yaesuFt991a} 
                  alt="Yaesu FT-991A" 
                  className="w-40 h-auto object-contain"
                />
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
