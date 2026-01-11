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

const TipsPrincipiantes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="tips" />
      
      <main className="pt-32 pb-16">
        <Section id="tips-principiantes" title="Tips Principiantes">
          <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/30 rounded-lg">
                    <tip.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tip.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Consejo del día
            </h3>
            <p className="text-gray-300">
              La paciencia es clave en la radioafición. No te desanimes si al principio no consigues contactos. 
              Practica tu técnica, mejora tu antena y verás cómo los resultados llegan.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default TipsPrincipiantes;
