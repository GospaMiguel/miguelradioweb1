import { Mail, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:asociacioncantabraradioaficion@gmail.com?subject=Contacto desde web - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AEmail: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Abriendo tu cliente de correo electrónico...",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = "Hola, me gustaría obtener más información sobre la Asociación Cantabra de Radioaficionados.";
    const whatsappUrl = `https://wa.me/34639207033?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="font-display text-2xl text-primary font-bold">Información de Contacto</h3>
          
          <div className="flex items-start space-x-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
            <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <a href="mailto:asociacioncantabraradioaficion@gmail.com" className="text-foreground hover:text-secondary transition-colors">
                asociacioncantabraradioaficion@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
            <Phone className="w-6 h-6 text-success mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">WhatsApp</p>
              <button
                onClick={handleWhatsApp}
                className="text-foreground hover:text-success transition-colors"
              >
                +34 639 207 033
              </button>
            </div>
          </div>

          <Button
            onClick={handleWhatsApp}
            className="w-full bg-success hover:bg-success/90 text-success-foreground"
            size="lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contactar por WhatsApp
          </Button>
        </div>

        <div className="space-y-6">
          <h3 className="font-display text-2xl text-primary font-bold">Envíanos un Mensaje</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-muted border-border"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted border-border"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-muted border-border resize-none"
              />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
