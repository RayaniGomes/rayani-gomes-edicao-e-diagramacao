import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import portfolio images
import cover1 from "@/assets/portfolio/cover-1.jpg";
import spread11 from "@/assets/portfolio/spread-1-1.jpg";
import spread12 from "@/assets/portfolio/spread-1-2.jpg";
import cover2 from "@/assets/portfolio/cover-2.jpg";
import spread21 from "@/assets/portfolio/spread-2-1.jpg";
import cover3 from "@/assets/portfolio/cover-3.jpg";
import spread31 from "@/assets/portfolio/spread-3-1.jpg";

// Portfolio projects data
const portfolioProjects = [
  {
    id: 1,
    title: "Álbum de Casamento Romântico",
    category: "Casamento",
    cover: cover1,
    images: [cover1, spread11, spread12],
    description: "Diagramação elegante com tons suaves e layout sofisticado para eternizar o grande dia.",
  },
  {
    id: 2,
    title: "Álbum Newborn Delicado",
    category: "Newborn",
    cover: cover2,
    images: [cover2, spread21],
    description: "Design carinhoso com paleta pastel para celebrar os primeiros momentos do bebê.",
  },
  {
    id: 3,
    title: "Álbum Família em Harmonia",
    category: "Família",
    cover: cover3,
    images: [cover3, spread31],
    description: "Layout acolhedor que destaca os laços familiares com composição equilibrada.",
  },
];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: typeof portfolioProjects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Portfólio de
            <span className="block text-accent">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira alguns dos nossos trabalhos de diagramação e design de álbuns fotográficos
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden border-border/50 hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              onClick={() => openModal(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                    <p className="text-white text-sm font-medium">Clique para ver mais</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={closeModal}>
          <DialogContent className="max-w-5xl p-0 bg-card border-border/50">
            <DialogHeader className="p-6 pb-4">
              <DialogTitle className="text-2xl font-bold">
                {selectedProject?.title}
                <span className="block text-sm text-muted-foreground font-normal mt-1">
                  {selectedProject?.category} • {currentImageIndex + 1} de {selectedProject?.images.length}
                </span>
              </DialogTitle>
            </DialogHeader>

            {selectedProject && (
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-video bg-secondary/20">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Página ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />

                  {/* Navigation Buttons */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg"
                        onClick={nextImage}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {selectedProject.images.length > 1 && (
                  <div className="flex gap-2 p-6 justify-center overflow-x-auto">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                          currentImageIndex === idx
                            ? "ring-2 ring-accent ring-offset-2 ring-offset-background"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
