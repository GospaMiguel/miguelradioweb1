import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ContactSection } from "@/components/ContactSection";
import { Radio, Users, Calendar, Wrench, Image as ImageIcon, Antenna, Lightbulb, BookOpen, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { categories } from "./Galeria";
import logoAsociacion from "@/assets/logo-asociacion.webp";
import cafeteriaDonLucas from "@/assets/cafeteria-don-lucas.jpg";

const tips = [
  {
    icon: Radio,
    title: "Conoce tu equipo",
    description: "Antes de transmitir, familiarízate con los controles de tu transceptor. Lee el manual y practica en modo recepción."
  },
  {
    icon: BookOpen,
    title: "Aprende el código Q",
    description: "El código Q es un lenguaje universal entre radioaficionados. QTH (ubicación), QSL (confirmación), QRM (interferencia) son esenciales."
  },
  {
    icon: Headphones,
    title: "Escucha antes de transmitir",
    description: "Dedica tiempo a escuchar las bandas. Aprenderás protocolos, estilos de comunicación y encontrarás frecuencias activas."
  },
  {
    icon: Users,
    title: "Únete a un club",
    description: "Los clubes de radioaficionados son una excelente fuente de conocimiento. Los miembros experimentados pueden guiarte en tu aprendizaje."
  },
  {
    icon: Lightbulb,
    title: "Empieza con VHF/UHF",
    description: "Las bandas VHF y UHF son ideales para principiantes. Los repetidores locales facilitan hacer contactos iniciales."
  }
];

const Index = () => {
  const navigate = useNavigate();
  

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/galeria?evento=${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <div className="mt-20 md:mt-28">
        <Section id="sobre-nosotros" title="Sobre Nosotros">
        <div className="space-y-6 md:space-y-8">
          <div className="flex justify-center mb-6 md:mb-8">
            <img 
              src={logoAsociacion} 
              alt="Logo Asociación Cantabra de Radioaficionados" 
              className="w-48 h-48 md:w-72 md:h-72 object-contain rounded-full border-4 border-emerald-700"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <Users className="w-6 h-6 md:w-8 md:h-8 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">Nuestra Asociación</h3>
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                La Asociación Cántabra de Radioaficionados es una comunidad apasionada por la radioafición y las telecomunicaciones. 
                Nos dedicamos a promover y a dar a conocer el hobby de la radio y conectar a entusiastas de toda Cantabria 
                y otros países.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <Radio className="w-6 h-6 md:w-8 md:h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">Nuestra Misión</h3>
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                Fomentar el desarrollo técnico y social de la radioafición, proporcionar formación continua a nuestros miembros, 
                y servir como punto de encuentro para compartir experiencias y conocimientos en el fascinante mundo de las 
                comunicaciones por radio.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/30">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">Historia de nuestra Asociación</h3>
            <div className="space-y-3 md:space-y-4 text-foreground leading-relaxed text-sm md:text-base">
              <p>
                Nuestros primeros pasos empezaron por el año 2013, cuando a nivel local estaba vacía la banda de los 27 MHz y no estaba abierta la propagación debido a un ciclo solar que afectó a la banda de los 27 MHz y no se escuchaba nadie. La gente que volvía a desempolvar los equipos después del boom que fueron los 27 MHz de los años 90, algunos compañeros nos contaron que tiraron los equipos a la basura creyendo que estaban estropeados porque no se escuchaba nada.
              </p>
              <p>
                Entonces quedábamos 2 amigos en el canal 35 FM para charlar todas las tardes. Al escucharnos nuestros habituales QSO, después de unos meses salieron otros dos compañeros a unirse con nosotros, luego otros más y otros, hasta que por el año 2015 ya éramos un grupo de unos 15 colegas que habíamos regresado al mundo de las ondas después de casi 20 años de QRT Radiofónico.
              </p>
              <p>
                Empezamos a quedar todos los viernes para vernos, comentar proyectos, antenas, averías de equipos y demás temas referentes a nuestra afición. A partir de este año, Telecomunicaciones abrió una campaña para recuperar a la gente que tuvimos indicativos EA y nos dimos de baja. Nos pusimos todos de acuerdo y volvimos a recuperar nuestras licencias de Radioaficionados, y a partir de ese momento ya empezamos a registrar la asociación en el Gobierno de Cantabria y demás trámites en Telecomunicaciones.
              </p>
              <p>
                En el año 2017 ya éramos una Asociación de Radioaficionados, sin ánimo de lucro, nueva, moderna y legalizada para velar y mantener activas las bandas de radioaficionados y demás equipos repetidores de uso por nuestra comunidad. Debido a la desaparición de otros radioclubes antiguos que los habían mantenido en funcionamiento, y por falta de uso debido a lo que comentábamos anteriormente de la desaparición de radioaficionados después del boom de las nuevas tecnologías por el año 2000 (teléfonos móviles, internet, etc.), fueron apagados y desaparecidos en Cantabria.
              </p>
            </div>
          </div>
        </div>
        </Section>
      </div>

      <Section id="que-ofrecemos" title="Que ofrecemos">
        <div className="space-y-4 md:space-y-6">
          <h3 className="font-display text-lg md:text-2xl font-bold text-foreground text-center">QUE TE OFRECEMOS HACIÉNDOTE SOCIO</h3>
          <div className="space-y-3 md:space-y-4 text-foreground leading-relaxed text-sm md:text-base">
            <p>
              Al formar parte de nuestra asociación te asesoramos y ayudamos en la presentación a los exámenes para la obtención de la licencia de radioaficionado.
            </p>
            <p>
              Asesoramiento sobre el montaje de tu estación de radioaficionado en tu casa o vehículo que equipos y antenas según lo que quieras invertir te convienen incluso te montamos la instalación.
            </p>
            <p>
              Programación de los equipos todo el banco de memorias sobre frecuencias bandas y en caso de digital repetidores analógico y digitales con todos sus datos que tenemos en Cantabria y provincias limítrofes para que con solo dar un botón lo tengas todo a tu alcance.
            </p>
            <p>
              Reunirte todos los segundos viernes de cada Mes con nuestros compañeros Muy veteranos en el mundo de la radio algunos con 50 años de experiencia y otros recién incorporados intercambiamos experiencias con antenas y equipos y tratamos temas sobre la asociación y mantenimiento de nuestros repetidores.
            </p>
            <p>
              En primavera y verano hacemos varias salidas al campo a hacer diversas actividades en las cuales puedes como socio participar.
            </p>
          </div>
        </div>
      </Section>

      <Section id="actividades" title="Actividades">
        <div className="space-y-4 md:space-y-6">
          <h3 className="font-display text-lg md:text-2xl font-bold text-foreground text-center">QUE ACTIVIDADES HACEMOS EN LA ASOCIACIÓN</h3>
          <div className="space-y-3 md:space-y-4 text-foreground leading-relaxed text-sm md:text-base">
            <p>
              Como asociación cultural, colaboramos desinteresadamente con diferentes ayuntamientos de Cantabria. Participamos en eventos deportivos como la Media Maratón del Pas, que se celebra cada mediados del mes de septiembre en Puente Arce, y nos ponemos en diferentes puntos kilométricos con nuestras emisoras para ir comunicando al coordinador de la carrera los dorsales de los participantes que van llegando por los diferentes puntos kilométricos.
            </p>
            <p>
              Otra actividad en la que participamos es en Guarnizo, cada 15 de agosto, en la Festividad de la Virgen de Muslera. Con motivo de las fiestas, instalamos nuestras emisoras y antenas, y otorgamos tarjeta QSL especial a un solo contacto en la banda de 40 metros, contactando con estaciones de toda España.
            </p>
            <p>
              Otra actividad en la que hemos participado este año, también en Guarnizo, es en la feria de extraescolares, en la cual se presentan todas las asociaciones de este ayuntamiento con la idea de dar a conocer lo que hacemos y a lo que nos dedicamos a la gente que acude a vernos.
            </p>
            <p>
              Otra actividad más en la que participamos es en las fiestas de la Virgen de Valencia en Renedo de Piélagos, cada 27 de septiembre. Activamos con indicativo especial las fiestas, otorgando tarjeta QSL a todas las estaciones que nos contactan desde cualquier lugar en la banda de HF 40 metros.
            </p>
            <p>
              Luego, otro evento en el que nos reunimos y asistimos es una Feria de Radioaficionados que se celebra en Ávila cada año el 15 de septiembre, a la cual solemos asistir todos los radioaficionados de esta asociación que nos podemos desplazar hasta allí. Vemos la feria, comemos por Ávila, pasamos la noche y vuelta para Santander.
            </p>
            <p>
              Otro evento al que solemos anualmente asistir es al Merca Astur Radio, cada 10 de mayo en Oviedo, en el cual se compra y vende todo tipo de emisoras y antenas nuevas y de segunda mano. Dan charlas sobre tecnologías nuevas de nuestro hobby. Comemos por Oviedo, pasamos el día por allí y volvemos a Santander.
            </p>
          </div>
        </div>
      </Section>

      <Section id="reuniones" title="Reuniones">
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <Calendar className="w-6 h-6 md:w-8 md:h-8 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3 notranslate" translate="no">REUNION ORDINARIA MENSUAL</h3>
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                Celebramos reuniones mensuales donde compartimos experiencias, aprendemos sobre nuevas tecnologías, 
                discutimos proyectos y planificamos actividades. Un espacio ideal para conocer a otros radioaficionados 
                y fortalecer los lazos de nuestra comunidad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-muted p-4 md:p-6 rounded-lg">
              <h4 className="font-display text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">Cuándo</h4>
              <p className="text-foreground text-sm md:text-base">Segundos viernes de cada mes a las 19:00h</p>
            </div>
            <div className="bg-muted p-4 md:p-6 rounded-lg">
              <h4 className="font-display text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">Dónde</h4>
              <p className="text-foreground text-sm md:text-base">Cafetería Don Lucas</p>
              <p className="text-foreground text-xs md:text-sm">Revilla de Camargo</p>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src={cafeteriaDonLucas} 
              alt="Cafetería Don Lucas - Lugar de reunión" 
              className="rounded-lg shadow-lg max-w-xs md:max-w-md w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section id="galeria" title="Galería">
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <ImageIcon className="w-6 h-6 md:w-8 md:h-8 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">Galería de Eventos</h3>
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                Descubre nuestras últimas actividades, encuentros y eventos a través de nuestra galería de fotos y videos. 
                Compartimos los mejores momentos de nuestra comunidad radioaficionada.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-muted-foreground/40 scrollbar-track-muted/50">
              <div className="flex gap-4 min-w-max px-1">
                {categories.map((category) => {
                  const firstItem = category.items.find(item => item.type === "image") || category.items[0];
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className="bg-muted p-3 rounded-lg text-center hover:bg-muted/80 transition-colors group cursor-pointer flex-shrink-0 w-[200px] md:w-[240px]"
                    >
                      {firstItem && (
                        <div className="mb-2 aspect-square overflow-hidden rounded-lg">
                          <img
                            src={firstItem.thumbnail}
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <h4 className="font-display text-xs md:text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {category.name}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="equipos" title="Equipos">
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <Wrench className="w-6 h-6 md:w-8 md:h-8 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">Equipamiento y Tecnología</h3>
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                Información sobre equipos de radio, antenas, accesorios y tecnología utilizada por nuestros miembros. 
                Compartimos experiencias sobre configuraciones, mantenimiento y optimización de equipos para diferentes 
                modos y bandas de operación.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            <button
              onClick={() => navigate("/equipos?category=hf")}
              className="bg-white text-[#8B0000] p-3 md:p-4 rounded-lg text-center border-2 border-[#8B0000] shadow-[0_0_15px_#8B0000,0_0_30px_#8B0000] hover:shadow-[0_0_25px_#8B0000,0_0_50px_#8B0000] transition-all cursor-pointer"
            >
              <h4 className="font-display text-sm md:text-base font-bold mb-1">HF</h4>
              <p className="text-xs opacity-80">Bandas decamétricas</p>
            </button>
            <button
              onClick={() => navigate("/equipos?category=vhf-uhf")}
              className="bg-white text-[#8B0000] p-3 md:p-4 rounded-lg text-center border-2 border-[#8B0000] shadow-[0_0_15px_#8B0000,0_0_30px_#8B0000] hover:shadow-[0_0_25px_#8B0000,0_0_50px_#8B0000] transition-all cursor-pointer"
            >
              <h4 className="font-display text-sm md:text-base font-bold mb-1">VHF/UHF</h4>
              <p className="text-xs opacity-80">Comunicaciones locales</p>
            </button>
            <button
              onClick={() => navigate("/equipos?category=digital")}
              className="bg-white text-[#8B0000] p-3 md:p-4 rounded-lg text-center border-2 border-[#8B0000] shadow-[0_0_15px_#8B0000,0_0_30px_#8B0000] hover:shadow-[0_0_25px_#8B0000,0_0_50px_#8B0000] transition-all cursor-pointer"
            >
              <h4 className="font-display text-sm md:text-base font-bold mb-1">Digital</h4>
              <p className="text-xs opacity-80">Modos digitales modernos</p>
            </button>
          </div>
        </div>
      </Section>

      <Section id="repetidores" title="Repetidores">
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <Antenna className="w-6 h-6 md:w-8 md:h-8 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">Cómo conectarte a los repetidores</h3>
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                Aprende a conectarte a los repetidores de VHF y UHF. Necesitas conocer la frecuencia de entrada (RX), 
                salida (TX), el desplazamiento (offset) y el subtono CTCSS o código DTMF para activarlos.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate("/repetidores")}
              className="bg-white text-[#8B0000] p-4 md:p-6 rounded-lg text-center border-2 border-[#8B0000] shadow-[0_0_15px_#8B0000,0_0_30px_#8B0000] hover:shadow-[0_0_25px_#8B0000,0_0_50px_#8B0000] transition-all cursor-pointer"
            >
              <h4 className="font-display text-base md:text-lg font-bold">Conectar con Repetidores VHF/UHF</h4>
            </button>
          </div>
        </div>
      </Section>

      <Section id="sobre-radio" title="Sobre la Radio">
        <div className="space-y-4 md:space-y-6">
          <h3 className="font-display text-lg md:text-2xl font-bold text-foreground text-center">¿QUÉ ES LA RADIOAFICIÓN?</h3>
          <div className="space-y-3 md:space-y-4 text-foreground leading-relaxed text-sm md:text-base">
            <p>
              Aunque la Radioafición es un hobby que hoy en día, con las nuevas tecnologías más modernas, mucha gente joven no lo ve atractivo, no lo entiende o no lo encuentra útil, como los que vivimos esos años en que no había internet ni teléfonos móviles, y la única comunicación con otra persona que estuviera fuera de su domicilio era el teléfono con cable, el cual era fijo y era lo único que existía para comunicarse con otras personas.
            </p>
            <p>
              Nosotros vivimos en aquellos años la magia de la radio, que hablabas desde cualquier lugar con otra gente y sin cables. Podías pedir socorro desde la montaña si te pasaba algún incidente, o incluso en ciudad, cuando tenías un percance con el coche, pedir ayuda a través de la emisora y algún colega que te viniese con unas pinzas a arrancar el coche.
            </p>
            <p>
              Nosotros nos decidimos por crear esta asociación con la idea de dar a conocer a la gente nueva este mundo de las ondas, que con nostalgia de aquellos años seguimos utilizando y manteniéndolo activo para que la gente nueva que nos contacta lo conozca y les ayudemos a utilizar y salir por el mundo de las ondas. Incluso hay gente que nos contacta y nos cuenta que en sus casas recuerdan que su padre o su abuelo tenía una emisora y hablaba con casi todo el mundo, y recuerdan que les parecía maravilloso conseguir algo así en aquellos años.
            </p>
          </div>
        </div>
      </Section>

      <Section id="examenes" title="REQUISITOS PARA LA OBTENCION DE LICENCIA DE RADIOAFICIONADO">
        <div className="space-y-4 md:space-y-6">
          <h3 className="font-display text-base md:text-2xl font-bold text-foreground text-center">PASOS PARA OBTENER TU DISTINTIVO DE LLAMADA</h3>
          <p className="text-foreground leading-relaxed text-sm md:text-base">
            Para obtener tu licencia solo tienes que superar un test que consta de dos partes: uno de Normativa y otro de Electrónica. Una vez superada esta prueba, el Ministerio de Telecomunicaciones te otorga un distintivo de llamada, lo que nosotros familiarmente llamamos "las letras". Y ya pasas a formar parte de nuestra gran familia radiofónica.
          </p>
          <p className="text-foreground leading-relaxed text-sm md:text-base">
            Para acceder a los test, aquí te dejamos dos enlaces a dos páginas web de radioaficionados: FEDIEA y Radio Club Quijotes.
          </p>
          <div className="flex flex-col items-center gap-4 md:gap-5 mt-6">
            <a 
              href="https://www.fediea.org/examen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 md:px-8 md:py-4 rounded-lg bg-white/95 backdrop-blur-sm border-2 border-[#8B0032] hover:bg-white hover:border-[#A30040] text-[#8B0032] hover:text-[#A30040] font-bold text-lg md:text-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#8B0032]/30 text-center"
            >
              📚 FEDIEA - Test de Examen
            </a>
            <a 
              href="https://radioclubquijotes.org/examen-radioaficionado-test-requisitos/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 md:px-8 md:py-4 rounded-lg bg-white/95 backdrop-blur-sm border-2 border-[#8B0032] hover:bg-white hover:border-[#A30040] text-[#8B0032] hover:text-[#A30040] font-bold text-lg md:text-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#8B0032]/30 text-center"
            >
              📖 Radio Club Quijotes - Test
            </a>
          </div>
        </div>
      </Section>

      <Section id="tips" title="Tips Principiantes">
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-row gap-3 overflow-x-auto pb-4">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-4 border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex-shrink-0 w-56 md:w-64 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-primary/30 rounded-lg">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white">{tip.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-xs md:text-sm flex-grow">{tip.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:mt-12 p-4 md:p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-2 md:mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 md:h-5 md:w-5" />
              Consejo del día
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              La paciencia es clave en la radioafición. No te desanimes si al principio no consigues contactos. 
              Practica tu técnica, mejora tu antena y verás cómo los resultados llegan.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contacto" title="Contáctanos">
        <ContactSection />
      </Section>

      <footer className="bg-muted border-t border-border py-6 md:py-8 mt-12 md:mt-20">
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

export default Index;
