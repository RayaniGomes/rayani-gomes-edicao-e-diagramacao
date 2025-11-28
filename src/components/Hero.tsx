import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

// Hero Section - Main landing section with call-to-action
export const Hero = () => {
  const handleCTA = () => {
    // Scroll to contact section
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Workspace profissional de edição"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Edição Profissional de Fotos
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Transformo Suas
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Fotos em Arte
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Solução rápida, profissional e acessível para elevar suas imagens ao próximo nível
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={handleCTA}
              className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold hover:shadow-gold/80 transition-all duration-300 text-lg px-8 py-6 rounded-xl"
            >
              Pedir Orçamento Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 hover:bg-secondary transition-smooth text-lg px-8 py-6 rounded-xl"
            >
              Ver Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">+500</p>
              <p className="text-sm text-muted-foreground mt-1">Fotos Editadas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">24h</p>
              <p className="text-sm text-muted-foreground mt-1">Entrega Rápida</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
