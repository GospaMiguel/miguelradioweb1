import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ContactSection } from "@/components/ContactSection";
import { GallerySection } from "@/components/GallerySection";
import { Radio, Users, Calendar, Wrench, Antenna, GraduationCap } from "lucide-react";
import logoAsociacion from "@/assets/logo-asociacion.png";
import cafeteriaDonLucas from "@/assets/cafeteria-don-lucas.jpg";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <Section id="sobre-nosotros" title="Sobre Nosotros">
        <div className="space-y-8">
          <div className="flex justify-center mb-8">
            <img 
              src={logoAsociacion} 
              alt="Logo Asociación Cantabra de Radioaficionados" 
              className="w-72 h-72 object-contain"
            />
          </div>
          
          <div className="flex items-start space-x-4">
            <Users className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Nuestra Asociación</h3>
              <p className="text-foreground leading-relaxed">
                La Asociación Cantabra de Radioaficionados es una comunidad apasionada por la radioafición y las telecomunicaciones. 
                Nos dedicamos a promover y a dar a conocer el hobby de la radio y conectar a entusiastas de toda Cantabria 
                y otros países.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Radio className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Nuestra Misión</h3>
              <p className="text-foreground leading-relaxed">
                Fomentar el desarrollo técnico y social de la radioafición, proporcionar formación continua a nuestros miembros, 
                y servir como punto de encuentro para compartir experiencias y conocimientos en el fascinante mundo de las 
                comunicaciones por radio.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/30">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">Historia de nuestra Asociación</h3>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Nuestros primeros pasos empezaron por el año 2013 cuando a nivel local estaba vacía la banda de los 27 Mhz y no estaba abierta la propagación debido a un ciclo solar que afecto a la banda de los 27 Mhz y no se escuchaba nadie, la gente que volvía a desempolvar los equipos después del Boom que fueron los 27 Mhz de los años 90, algunos compañeros nos contaron que tiraron los equipos a la basura creyendo que estaba estropeados por que no se escuchaba nada.
              </p>
              <p>
                Entonces quedábamos 2 amigos en el canal 35 FM para charlar todas las tardes al escucharnos nuestros habituales QSO después de unos meses salieron otros dos compañeros a unirse con nosotros luego otros más y otros hasta que por el año 2015 ya éramos un grupo de unos 15 colegas que habíamos regresado al mundo de las ondas después de casi 20 años de QRT Radiofónico.
              </p>
              <p>
                Empezamos a quedar todos los viernes en vernos para comentar proyectos antenas averías de equipos y demás temas referentes a nuestra afición, A partir de este año Telecomunicaciones abrió una campaña para recuperar a la gente que tuvimos indicativos EA y nos dimos de baja nos pusimos todos de acuerdo y volvimos a recuperar nuestras licencias de Radioaficionados y a partir de ese momento ya empezamos a Registrar la asociación en el Gobierno de Cantabria y demás tramites en Telecomunicaciones.
              </p>
              <p>
                En el año 2017 ya éramos una Asociación de Radioaficionados, sin ánimo de lucro, nueva moderna y legalizada para velar y mantener activas las bandas de radioaficionados y demás equipos repetidores de uso por nuestra comunidad y debido a la desaparición de otros radioclub antiguos que los habían mantenido en funcionamiento y por falta de uso y debido a lo que comentábamos anteriormente de la desaparion de radioaficionados después del boom de las nuevas tecnologías por el año 2000 teléfonos móviles internet etc. fueron apagados y desaparecidos en Cantabria.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="actividades" title="Actividades">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Antenna className="w-8 h-8 text-success flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">SOTA y POTA</h3>
              <p className="text-foreground leading-relaxed">
                Participa en nuestras activaciones de cumbres (SOTA - Summits On The Air) y parques (POTA - Parks On The Air). 
                Organizamos salidas regulares donde combinamos la pasión por la naturaleza con las comunicaciones de radio 
                desde ubicaciones privilegiadas de Cantabria.
              </p>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h4 className="font-display text-lg font-bold text-foreground mb-3">Próximas Activaciones</h4>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                Activación SOTA - Pico Tres Mares
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                POTA - Parque Natural de Oyambre
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                Activación Especial - Día de la Radio
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="reuniones" title="Reuniones">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Calendar className="w-8 h-8 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Reunión ordinaria mensual</h3>
              <p className="text-foreground leading-relaxed">
                Celebramos reuniones mensuales donde compartimos experiencias, aprendemos sobre nuevas tecnologías, 
                discutimos proyectos y planificamos actividades. Un espacio ideal para conocer a otros radioaficionados 
                y fortalecer los lazos de nuestra comunidad.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Cuándo</h4>
              <p className="text-foreground">Segundos viernes de cada mes a las 19:00h</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Dónde</h4>
              <p className="text-foreground">Cafetería Don Lucas</p>
              <p className="text-foreground text-sm">Revilla de Camargo</p>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src={cafeteriaDonLucas} 
              alt="Cafetería Don Lucas - Lugar de reunión" 
              className="rounded-lg shadow-lg max-w-md w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section id="equipos" title="Equipos">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Wrench className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Equipamiento y Tecnología</h3>
              <p className="text-foreground leading-relaxed">
                Información sobre equipos de radio, antenas, accesorios y tecnología utilizada por nuestros miembros. 
                Compartimos experiencias sobre configuraciones, mantenimiento y optimización de equipos para diferentes 
                modos y bandas de operación.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted p-6 rounded-lg text-center">
              <h4 className="font-display text-lg font-bold text-foreground mb-2">HF</h4>
              <p className="text-sm text-foreground">Bandas decamétricas</p>
            </div>
            <div className="bg-muted p-6 rounded-lg text-center">
              <h4 className="font-display text-lg font-bold text-foreground mb-2">VHF/UHF</h4>
              <p className="text-sm text-foreground">Comunicaciones locales</p>
            </div>
            <div className="bg-muted p-6 rounded-lg text-center">
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Digital</h4>
              <p className="text-sm text-foreground">Modos digitales modernos</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="sobre-radio" title="Sobre la Radio">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Radio className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">¿Qué es la Radioafición?</h3>
              <p className="text-foreground leading-relaxed">
                La radioafición es un hobby técnico que permite la comunicación por radio con personas de todo el mundo. 
                Es una actividad que combina tecnología, ciencia, deporte y amistad. Los radioaficionados experimentan con 
                equipos de telecomunicaciones, aprenden sobre propagación de ondas, y participan en actividades de servicio público.
              </p>
            </div>
          </div>

          <div className="bg-gradient-secondary p-6 rounded-lg">
            <h4 className="font-display text-lg font-bold text-white mb-3">Beneficios de la Radioafición</h4>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Aprendizaje continuo sobre electrónica y telecomunicaciones
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Conexión con personas de todo el mundo
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Servicio público en emergencias y comunicaciones de apoyo
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Experimentación técnica y desarrollo de proyectos
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="examenes" title="Exámenes">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <GraduationCap className="w-8 h-8 text-success flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Obtén tu Licencia</h3>
              <p className="text-foreground leading-relaxed">
                Para practicar la radioafición es necesario superar los exámenes oficiales y obtener una autorización 
                administrativa de telecomunicaciones que acredite que estás apto y con los conocimientos para el manejo 
                de una estación de radioaficionado. Te ayudamos a prepararte y te guiamos en el proceso de obtención 
                de tu indicativo de llamada.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-display text-lg font-bold text-foreground mb-3">Preparación</h4>
              <p className="text-foreground mb-4">
                Ofrecemos cursos de preparación para el examen de radioaficionado. Cubrimos todos los temas necesarios: 
                reglamentación, técnica de radio, propagación, antenas y seguridad.
              </p>
              <ul className="space-y-2 text-foreground text-sm">
                <li>• Clases teóricas y prácticas</li>
                <li>• Material de estudio</li>
                <li>• Simulacros de examen</li>
                <li>• Apoyo continuo</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-display text-lg font-bold text-foreground mb-3">Información del Examen</h4>
              <p className="text-foreground mb-4">
                El examen oficial se realiza a través de la administración de telecomunicaciones y consta de una 
                prueba teórica sobre conocimientos técnicos y normativos.
              </p>
              <ul className="space-y-2 text-foreground text-sm">
                <li>• Convocatorias regulares</li>
                <li>• Examen tipo test</li>
                <li>• Diferentes niveles de licencia</li>
                <li>• Validez internacional</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="galeria" title="Galería">
        <GallerySection />
      </Section>

      <Section id="contacto" title="Contáctanos">
        <ContactSection />
      </Section>

      <footer className="bg-muted border-t border-border py-8 mt-20">
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

export default Index;
