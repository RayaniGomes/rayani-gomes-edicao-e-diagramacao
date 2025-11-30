import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// CTA Section - Final call-to-action before contact
export const CTASection = () => {
  const handleCTA = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-accent/5" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Pronto Para Transformar
              <span className="block text-accent">Suas Fotos?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Entre em contato agora e receba um orçamento personalizado sem compromisso
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              onClick={handleCTA}
              className="group bg-accent text-accent-foreground shadow-lg hover:bg-accent/80 hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 rounded-full"
            >
              Quero Editar Minhas Fotos
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Message */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              ✓ Resposta em até 2 horas • ✓ Orçamento gratuito • ✓ Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
