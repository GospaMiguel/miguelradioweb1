import { Navigation } from "@/components/Navigation";

const Repetidores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
            Repetidores
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-12">
              Como conectarte a los repetidores de VHF y UHF
            </p>
            
            <div className="bg-card border border-border rounded-lg p-8 space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Instrucciones para conectarte a un repetidor de VHF
              </h2>
              
              <p className="text-black leading-tight">
                Para conectarte a un repetidor VHF, necesitas un equipo de radioaficionado, conocer su frecuencia de entrada (RX) y salida (TX) con su desplazamiento (offset), y a menudo un subtono CTCSS o un código DTMF para activarlo; luego, sintonizas tu radio a la frecuencia de entrada (RX), configuras el subtono/código, y pulsas el botón PTT para hablar, tu equipo transmitirá en la frecuencia de entrada y el repetidor retransmitirá tu señal en la frecuencia de salida.
              </p>

              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-primary">Pasos básicos para conectarte</h3>
                
                <div className="space-y-1 text-black">
                  <div>
                    <p className="font-semibold">1. Obtén la información del repetidor:</p>
                    <p className="ml-4 text-black">Busca en línea (sitios de URE o clubes locales) la frecuencia de entrada (RX), la frecuencia de salida (TX) y el subtono CTCSS (ej: 88.5 Hz) o código DTMF que usa el repetidor.</p>
                  </div>
                  <div>
                    <p className="font-semibold">2. Programa tu radio:</p>
                    <ul className="ml-4 space-y-0 text-black list-disc list-inside">
                      <li><span className="font-medium">Frecuencia RX:</span> Sintoniza tu radio en la frecuencia de entrada (ej: 145.100 MHz).</li>
                      <li><span className="font-medium">Desplazamiento (Offset):</span> Configura el desplazamiento (normalmente -600 kHz en VHF) para que tu radio cambie automáticamente a la frecuencia de salida (TX) cuando transmitas.</li>
                      <li><span className="font-medium">Subtono (CTCSS):</span> Activa el subtono CTCSS en tu radio y ajústalo al valor correcto (ej: 88.5 Hz) para abrir el repetidor.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">3. Transmite:</p>
                    <p className="ml-4 text-black">Pulsa el botón PTT (Pulsar para Hablar) para hablar, dejando un pequeño espacio al inicio para que el repetidor abra. El repetidor recibirá tu señal en la frecuencia RX y la retransmitirá en la frecuencia TX.</p>
                  </div>
                  <div>
                    <p className="font-semibold">4. Escucha:</p>
                    <p className="ml-4 text-black">Tu radio escuchará en la frecuencia de salida (TX) del repetidor.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-border">
                <h3 className="text-xl font-semibold text-primary">Consideraciones importantes</h3>
                
                <div className="space-y-1 text-black">
                  <div>
                    <p className="font-semibold">Licencia:</p>
                    <p className="ml-4 text-black">Necesitas una licencia de radioaficionado para usar repetidores.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Etiqueta (Netiqueta):</p>
                    <p className="ml-4 text-black">Habla brevemente, deja pausas para que otros se unan y usa tu indicativo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Repetidores;
