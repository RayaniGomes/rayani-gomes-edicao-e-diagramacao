import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage1 from "@/assets/hero/hero-1.webp";
import heroImage2 from "@/assets/hero/hero-2.webp";
import heroImage3 from "@/assets/hero/hero-3.webp";
import Navbar from "./Navbar";

// Hero Section - Main landing section with call-to-action
export const Hero = () => {
  const handleCTA = () => {
    // Scroll to contact section
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const heroImages = [
    { src: heroImage1, alt: "Workspace profissional de edição" },
    { src: heroImage2, alt: "Estúdio de fotografia profissional" },
    { src: heroImage3, alt: "Equipamento de fotografia e iluminação" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-screen m-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="p-0">
                <div className="relative w-full h-screen">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/80" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          

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
              className="group bg-accent text-accent-foreground shadow-lg hover:bg-accent/80 hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 rounded-lg"
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
              className="hover:bg-secondary/80 hover:-translate-y-1 hover:text-accent transition-smooth text-lg px-8 py-6 rounded-lg shadow-lg"
            >
              Ver Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
