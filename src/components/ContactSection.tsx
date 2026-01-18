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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append("form-name", "contact");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarnos. Te responderemos pronto.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/34639207033`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-4 md:space-y-6">
          <h3 className="font-display text-xl md:text-2xl text-primary font-bold">Información de Contacto</h3>
          
          <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-1 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-foreground text-sm md:text-base">Email</p>
              <a href="mailto:asoccantabraradioaficion@gmail.com" className="text-foreground hover:text-secondary transition-colors text-xs md:text-sm break-all">
                asoccantabraradioaficion@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
            <Phone className="w-5 h-5 md:w-6 md:h-6 text-success mt-1 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-foreground text-sm md:text-base">Miguel-EA1RBM</p>
              <button
                onClick={handleWhatsApp}
                className="text-foreground hover:text-success transition-colors text-xs md:text-sm break-all"
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

        <div className="space-y-4 md:space-y-6">
          <h3 className="font-display text-xl md:text-2xl text-primary font-bold">Envíanos un Mensaje</h3>
          
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-3 md:space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div>
              <Input
                name="name"
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
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted border-border"
              />
            </div>
            
            <div>
              <Textarea
                name="message"
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
