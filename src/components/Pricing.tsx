import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
          <div className="inline-block mb-4">
            <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-bold animate-pulse">
              🔥 PROMOÇÃO POR TEMPO LIMITADO
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Nossos
            <span className="block text-accent">Preços</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Valores justos e claros, sem surpresas
          </p>
        </div>

        {/* Design Services Pricing */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Serviços de Design
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-gold transition-shadow shadow-lg relative">
              <div className="absolute -top-3 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-50">
                -15%
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Capa</CardTitle>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground line-through">
                    R$ 40
                  </span>
                  <span className="text-4xl font-bold text-accent ml-2">
                    R$ 34
                  </span>
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

            <Card className="hover:shadow-gold transition-shadow shadow-lg relative">
              <div className="absolute -top-3 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-50">
                -15%
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Diagramação</CardTitle>
                <CardDescription>Até 10 lâminas</CardDescription>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground line-through">
                    R$ 40
                  </span>
                  <span className="text-4xl font-bold text-accent ml-2">
                    R$ 34
                  </span>
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

            <Card className="border-accent border-2 hover:shadow-gold transition-shadow shadow-lg relative overflow-visible">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full z-50">
                COMBO
              </div>
              <div className="absolute -top-3 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-50">
                -15%
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pacote Completo</CardTitle>
                <CardDescription>Diagramação + Capa</CardDescription>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground line-through">
                    R$ 60
                  </span>
                  <span className="text-4xl font-bold text-accent ml-2">
                    R$ 51
                  </span>
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
                    Economia de R$ 29
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-gold transition-shadow shadow-lg relative overflow-visible">
              <div className="absolute -top-3 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-50">
                -15%
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Portfólio</CardTitle>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground line-through">
                    R$ 70
                  </span>
                  <span className="text-4xl font-bold text-accent ml-2">
                    R$ 59
                  </span>
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
            <h3 className="text-2xl font-bold mb-6 text-center">
              Edição Simples
            </h3>
            <Card className="relative">
              <div className="absolute -top-3 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-50">
                -20%
              </div>
              <CardContent className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 font-semibold">
                        Quantidade
                      </th>
                      <th className="text-right py-3 font-semibold text-muted-foreground text-sm">
                        Antes
                      </th>
                      <th className="text-right py-3 font-semibold text-accent">
                        Por Foto
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3">Até 10 fotos</td>
                      <td className="text-right py-3 text-muted-foreground line-through text-sm">
                        R$ 5,00
                      </td>
                      <td className="text-right py-3 font-bold text-accent">
                        R$ 4,00
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">11 a 20 fotos</td>
                      <td className="text-right py-3 text-muted-foreground line-through text-sm">
                        R$ 4,50
                      </td>
                      <td className="text-right py-3 font-bold text-accent">
                        R$ 3,60
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">21 a 50 fotos</td>
                      <td className="text-right py-3 text-muted-foreground line-through text-sm">
                        R$ 3,50
                      </td>
                      <td className="text-right py-3 font-bold text-accent">
                        R$ 2,80
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">51 a 100 fotos</td>
                      <td className="text-right py-3 text-muted-foreground line-through text-sm">
                        R$ 3,00
                      </td>
                      <td className="text-right py-3 font-bold text-accent">
                        R$ 2,40
                      </td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="py-3 font-semibold">+100 fotos</td>
                      <td className="text-right py-3 text-muted-foreground line-through text-sm">
                        R$ 2,50
                      </td>
                      <td className="text-right py-3 font-bold text-accent">
                        R$ 2,00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Editing */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Edição Avançada
            </h3>
            <Card className="relative ">
              <div className="absolute -top-3 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-50">
                -20%
              </div>
              <CardContent className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 font-semibold">
                        Quantidade
                      </th>
                      <th className="text-right py-3 font-semibold text-muted-foreground text-sm">
                        Antes
                      </th>
                      <th className="text-right py-3 font-semibold text-accent">
                        Por Foto
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3">Até 10 fotos</td>
                      <td className="text-right py-3 text-muted-foreground line-through text-sm">
                        R$ 8,00
                      </td>
                      <td className="text-right py-3 font-bold text-accent">
                        R$ 6,40
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">11 a 20 fotos</td>
                      <td className="text-right py-3 text-muted-foreground line-through text-sm">
                        R$ 7,50
                      </td>
                      <td className="text-right py-3 font-bold text-accent">
                        R$ 6,00
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">21 a 50 fotos</td>
                      <td className="text-right py-3 text-muted-foreground line-through text-sm">
                        R$ 6,00
                      </td>
                      <td className="text-right py-3 font-bold text-accent">
                        R$ 4,80
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">51 a 100 fotos</td>
                      <td className="text-right py-3 text-muted-foreground line-through text-sm">
                        R$ 5,00
                      </td>
                      <td className="text-right py-3 font-bold text-accent">
                        R$ 4,00
                      </td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="py-3 font-semibold">+100 fotos</td>
                      <td className="text-right py-3 text-muted-foreground line-through text-sm">
                        R$ 4,50
                      </td>
                      <td className="text-right py-3 font-bold text-accent">
                        R$ 3,60
                      </td>
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
            className="w-full md:w-80 bg-accent text-accent-foreground shadow-lg hover:bg-accent/80 hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 rounded-lg"
          >
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};
