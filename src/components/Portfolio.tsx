import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { portfolioProjects } from "@/mocks/portifolio-data";

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioProjects)[0] | null
  >(null);

  const openModal = (project: (typeof portfolioProjects)[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Nosso
            <span className="block text-accent">Portfólio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira alguns dos nossos trabalhos de diagramação e design de
            álbuns fotográficos
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden border-border/50 hover:shadow-gold transition-all duration-300 hover:-translate-y-2 shadow-lg"
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
                    <p className="text-white text-sm font-medium">
                      Clique para ver mais
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[95vh] md:max-w-[90vw] p-0 bg-card border-border/50 overflow-hidden">
            <DialogHeader className="bg-inherit p-4 shadow-lg border-b border-border/50 z-100">
              <DialogTitle className="flex flex-col text-2xl font-bold">
                {selectedProject?.title}
                <span className="w-fit px-3 py-1 bg-accent/90 text-accent-foreground text-sm rounded-full">
                  {selectedProject?.category}
                </span>
              </DialogTitle>
            </DialogHeader>

            {selectedProject && (
              <div className="overflow-auto h-[80vh]">
                <div className="flex flex-col h-full overflow-y-auto">
                  {selectedProject.images.length > 1 && (
                    <div className="grid grid-cols-1 gap-2 pt-0 p-4 md:grid-cols-2 justify-center">
                      {selectedProject.images.map((img, idx) => (
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover rounded-md"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
