import { Clock, Award, Palette, DollarSign, User, Zap } from "lucide-react";

// Benefits Section - Highlight key advantages
const benefits = [
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Prazo de até 7 dias uteis para a maioria dos serviços, sem comprometer a qualidade",
  },
  {
    icon: Award,
    title: "Toque Profissional",
    description: "Edição refinada com técnicas avançadas de Photoshop e Lightroom",
  },
  {
    icon: Palette,
    title: "Qualidade Consistente",
    description: "Resultados uniformes e profissionais em todas as suas fotos",
  },
  {
    icon: DollarSign,
    title: "Preços Acessíveis",
    description: "Valores justos para serviços de alta qualidade",
  },
  {
    icon: User,
    title: "Personalização",
    description: "Atendimento individual e edições adaptadas ao seu estilo",
  },
  {
    icon: Zap,
    title: "Processo Simples",
    description: "Envie suas fotos, receba edições profissionais, sem complicação",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Por Que
            <span className="block text-accent">Escolher Nosso Serviço?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinamos qualidade profissional com praticidade e valores acessíveis
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="h-[200px] md:h-[160px] group p-6 rounded-2xl border border-border/50 bg-card shadow-lg hover:bg-accent/5 hover:border-accent/30 transition-all duration-300 hover:shadow-medium"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shadow-lg">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
