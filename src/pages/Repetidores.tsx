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
              Información sobre los repetidores disponibles para radioaficionados.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground">
                Próximamente se añadirá información detallada sobre repetidores.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Repetidores;
