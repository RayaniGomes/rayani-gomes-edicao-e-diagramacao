import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

// Before/After Section - Showcase photo editing transformations
export const BeforeAfter = () => {
  const comparisons = [
    {
      before: before1,
      after: after1,
      title: "Retrato Profissional",
      description: "Tratamento de pele e correção de iluminação",
    },
    {
      before: before2,
      after: after2,
      title: "Paisagem Vibrante",
      description: "Realce de cores e ajuste de exposição",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Antes &
            <span className="block text-accent">Depois</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja a diferença que uma edição profissional faz
          </p>
        </div>

        {/* Comparisons Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {comparisons.map((item, index) => (
            <div key={index} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Before Image */}
                <div className="relative group overflow-hidden rounded-2xl shadow-medium">
                  <img
                    src={item.before}
                    alt={`Antes - ${item.title}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-foreground/80 backdrop-blur-sm text-background text-sm font-bold rounded-lg">
                    ANTES
                  </div>
                </div>

                {/* After Image */}
                <div className="relative group overflow-hidden rounded-2xl shadow-gold">
                  <img
                    src={item.after}
                    alt={`Depois - ${item.title}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-accent text-accent-foreground text-sm font-bold rounded-lg">
                    DEPOIS
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-2xl mx-auto text-center mt-16 p-8 bg-card rounded-2xl shadow-soft border border-border/50">
          <p className="text-lg">
            Cada projeto recebe atenção individual para garantir que suas fotos atinjam seu
            <span className="font-bold text-accent"> máximo potencial</span>
          </p>
        </div>
      </div>
    </section>
  );
};
