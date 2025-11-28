import { Heart } from "lucide-react";

// Footer - Simple footer with copyright
export const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container px-4">
        <div className="text-center space-y-4">
          <p className="text-sm flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 fill-accent text-accent" /> para transformar suas fotos
          </p>
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} Edição e Design Profissional. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
