import gestenteCapa from "@/assets/portfolio/album1/capa-11.webp";
import gestante1 from "@/assets/portfolio/album1/gestante_01.webp";
import gestante2 from "@/assets/portfolio/album1/gestante_02.webp";
import gestante3 from "@/assets/portfolio/album1/gestante_03.webp";
import gestante4 from "@/assets/portfolio/album1/gestante_04.webp";
import gestante5 from "@/assets/portfolio/album1/gestante_05.webp";

import eventoCapa from "@/assets/portfolio/album2/capa-2.webp";
import evento1 from "@/assets/portfolio/album2/evento_1.webp";
import evento2 from "@/assets/portfolio/album2/evento_2.webp";
import evento3 from "@/assets/portfolio/album2/evento_3.webp";
import evento4 from "@/assets/portfolio/album2/evento_4.webp";
import evento5 from "@/assets/portfolio/album2/evento_5.webp";

import portfolioCapa from "@/assets/portfolio/album3/capa-3.webp";
import portfolio1 from "@/assets/portfolio/album3/portfolio_1.webp";
import portfolio2 from "@/assets/portfolio/album3/portfolio_2.webp";
import portfolio3 from "@/assets/portfolio/album3/portfolio_3.webp";
import portfolio4 from "@/assets/portfolio/album3/portfolio_4.webp";
import portfolio5 from "@/assets/portfolio/album3/portfolio_5.webp";
import portfolio6 from "@/assets/portfolio/album3/portfolio_6.webp";
import portfolio7 from "@/assets/portfolio/album3/portfolio_7.webp";

// Portfolio projects data
export const portfolioProjects = [
  {
    id: 1,
    title: "Album de Gestante Portifólio",
    category: "Gestante",
    cover: gestenteCapa,
    images: [gestenteCapa, gestante1, gestante2, gestante3, gestante4, gestante5],
    description: "Diagramação elegante com tons suaves e layout sofisticado.",
  },
  {
    id: 2,
    title: "Álbum do Primeiro Aninhos",
    category: "Evento",
    cover: eventoCapa,
    images: [eventoCapa, evento1, evento2, evento3, evento4, evento5],
    description: "Design tematico personalisado para guardar as memórias do seu evento.",
  },
  {
    id: 3,
    title: "Portifólio Fotográfico Para Orçamento",
    category: "Portifólio",
    cover: portfolioCapa,
    images: [portfolioCapa, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7],
    description: "Portifolío profissional com design moderno para apresentar seu trabalho.",
  },
];