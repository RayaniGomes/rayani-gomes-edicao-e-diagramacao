import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Pricing Section - Display all pricing information
export const Pricing = () => {
  const handleContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="precos" className="py-24 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Preços
            <span className="block text-accent">Transparentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Valores justos e claros, sem surpresas
          </p>
        </div>

        {/* Design Services Pricing */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Serviços de Design</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Capa</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-accent">R$ 40</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Design exclusivo
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Pronto para impressão
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Diagramação</CardTitle>
                <CardDescription>Até 10 lâminas</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-accent">R$ 40</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Layout profissional
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Lâmina extra: R$ 5
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent border-2 hover:shadow-gold transition-shadow relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                COMBO
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pacote Completo</CardTitle>
                <CardDescription>Diagramação + Capa</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-accent">R$ 60</span>
                  <span className="text-sm text-muted-foreground line-through ml-2">R$ 80</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Até 10 lâminas + Capa
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Economia de R$ 20
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Portfólio</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-accent">R$ 70</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Design completo
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Profissional
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Photo Editing Pricing Tables */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Simple Editing */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Edição Simples</h3>
            <Card>
              <CardContent className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 font-semibold">Quantidade</th>
                      <th className="text-right py-3 font-semibold text-accent">Por Foto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3">Até 10 fotos</td>
                      <td className="text-right py-3 font-bold">R$ 5,00</td>
                    </tr>
                    <tr>
                      <td className="py-3">11 a 20 fotos</td>
                      <td className="text-right py-3 font-bold">R$ 4,50</td>
                    </tr>
                    <tr>
                      <td className="py-3">21 a 50 fotos</td>
                      <td className="text-right py-3 font-bold">R$ 3,50</td>
                    </tr>
                    <tr>
                      <td className="py-3">51 a 100 fotos</td>
                      <td className="text-right py-3 font-bold">R$ 3,00</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="py-3 font-semibold">+100 fotos</td>
                      <td className="text-right py-3 font-bold text-accent">R$ 2,50</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Editing */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Edição Avançada</h3>
            <Card>
              <CardContent className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 font-semibold">Quantidade</th>
                      <th className="text-right py-3 font-semibold text-accent">Por Foto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3">Até 10 fotos</td>
                      <td className="text-right py-3 font-bold">R$ 8,00</td>
                    </tr>
                    <tr>
                      <td className="py-3">11 a 20 fotos</td>
                      <td className="text-right py-3 font-bold">R$ 7,50</td>
                    </tr>
                    <tr>
                      <td className="py-3">21 a 50 fotos</td>
                      <td className="text-right py-3 font-bold">R$ 6,00</td>
                    </tr>
                    <tr>
                      <td className="py-3">51 a 100 fotos</td>
                      <td className="text-right py-3 font-bold">R$ 5,00</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="py-3 font-semibold">+100 fotos</td>
                      <td className="text-right py-3 font-bold text-accent">R$ 4,50</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={handleContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold text-lg px-8 py-6 rounded-xl"
          >
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};
