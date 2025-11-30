import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Sparkles, BookOpen, ImageIcon } from "lucide-react";

// Services Section - Display all available services
const services = [
  {
    icon: Wand2,
    title: "Edição Básica",
    description: "Ajustes essenciais para deixar suas fotos prontas para qualquer ocasião.",
    features: [
      "Ajuste de luz e cor",
      "Contraste e nitidez",
      "Correção de sombras",
      "Corte e alinhamento",
    ],
  },
  {
    icon: Sparkles,
    title: "Edição Avançada",
    description: "Transformação completa com técnicas profissionais de Photoshop.",
    features: [
      "Tratamento de pele",
      "Remoção de elementos",
      "Manipulação digital",
      "Liquify e correções específicas",
    ],
  },
  {
    icon: BookOpen,
    title: "Diagramação de Álbuns",
    description: "Criação de layouts elegantes para seus álbuns de memórias.",
    features: [
      "Design personalizado",
      "Layout profissional",
      "Composição equilibrada",
      "Requintes profissionais",
    ],
  },
  {
    icon: ImageIcon,
    title: "Design de Capa & Portfólio",
    description: "Capas impactantes e portfólios completos para impressionar.",
    features: [
      "Design exclusivo de capa",
      "Portfólio profissional",
      "Identidade visual consistente",
      "Pronto para impressão",
    ],
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Nossos
            <span className="block text-accent">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas de edição e design para todas as suas necessidades fotográficas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group shadow-lg hover:shadow-gold transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors shadow-lg">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-body">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
