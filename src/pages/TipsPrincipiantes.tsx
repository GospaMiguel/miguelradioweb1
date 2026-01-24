import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { Lightbulb, Radio, BookOpen, Users, Headphones } from "lucide-react";

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

const consejosDelDia = [
  "La paciencia es clave en la radioafición. No te desanimes si al principio no consigues contactos. Practica tu técnica, mejora tu antena y verás cómo los resultados llegan.",
  "Mantén un cuaderno de guardia o log digital. Registrar tus contactos te ayudará a mejorar y a solicitar diplomas y certificados.",
  "Experimenta con diferentes tipos de antenas. Una buena antena puede marcar más diferencia que un equipo caro.",
  "Participa en concursos de radioafición. Son una excelente forma de mejorar tus habilidades operativas y conocer nuevos colegas.",
  "Aprende sobre propagación. Entender cómo viajan las ondas de radio te ayudará a elegir las mejores bandas y horarios para comunicarte.",
  "Respeta siempre las normas de operación y la etiqueta en el aire. La cortesía es fundamental en nuestra comunidad.",
  "No tengas miedo de pedir ayuda. La comunidad radioaficionada es muy acogedora con los principiantes."
];

const getConsejoDelDia = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  return consejosDelDia[dayOfYear % consejosDelDia.length];
};

const TipsPrincipiantes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="tips" />
      
      <main className="pt-24 md:pt-32 pb-12 md:pb-16 px-2 md:px-4">
        <Section id="tips-principiantes" title="Tips Principiantes">
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
                <p className="text-gray-300 leading-relaxed text-xs md:text-sm flex-grow text-justify">{tip.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:mt-12 p-4 md:p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-2 md:mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 md:h-5 md:w-5" />
              Consejo del día
            </h3>
            <p className="text-gray-300 text-sm md:text-base text-justify">
              {getConsejoDelDia()}
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default TipsPrincipiantes;
