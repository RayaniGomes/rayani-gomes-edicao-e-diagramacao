import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Phone } from "lucide-react";

// Contact Section - Contact information and methods
export const Contact = () => {
  const whatsappNumber = "5584994706578"; // Format: country code + number
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento para edição de fotos."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Entre em
            <span className="block text-accent">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha a forma mais conveniente para você
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp Card */}
          <Card className="border-2 border-accent/50 hover:border-accent transition-colors shadow-gold">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">WhatsApp</h3>
                <p className="text-muted-foreground">
                  Resposta rápida e envio fácil de fotos
                </p>
                <p className="text-xl font-semibold text-accent">(84) 99470-6578</p>
              </div>
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="hover:shadow-medium transition-shadow border border-border/50">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">E-mail</h3>
                <p className="text-muted-foreground">
                  Para orçamentos detalhados
                </p>
                <p className="text-lg font-semibold break-all">
                  gomes.rayani.96@gmail.com
                </p>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2"
                onClick={() => window.open("mailto:gomes.rayani.96@gmail.com", "_blank")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border/50">
            <CardContent className="p-8 text-center space-y-4">
              <Phone className="w-8 h-8 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Horário de Atendimento</h3>
              <p className="text-muted-foreground">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 14h
              </p>
              <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                Respondemos mensagens fora do horário comercial assim que possível
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
