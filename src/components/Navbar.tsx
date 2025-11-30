import React, { useEffect, useState } from "react";

const LINKS: { id: string; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "servicos", label: "Serviços" },
  { id: "precos", label: "Preços" },
  { id: "portfolio", label: "Portfólio" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const handleClick =
    (id: string) => (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e?.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setOpen(false);
    };

  return (
    <header className="w-full flex justify-center right-4 items-center fixed top-8 z-30">
      <div className="container inline-flex justify-between items-center p-6 rounded-full h-16 bg-background/30 text-accent shadow-xl backdrop-blur-sm border border-accent">
        <a href="/" className="flex items-center" onClick={handleClick("home")}>
          <img src="/logo.webp" alt="Logo" className="w-10 h-8 object-cover" />
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          {LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleClick(link.id)}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-accent text-shadow-lg shadow-accent"
                    : "text-foreground hover:text-shadow-lg hover:shadow-accent hover:text-accent hover:scale-105"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md text-foreground/90 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col px-4 py-3 gap-2">
            {LINKS.map((link) => (
              <a
                key={link.id}
                onClick={handleClick(link.id)}
                href={`#${link.id}`}
                className={`py-2 ${
                  active === link.id
                    ? "text-accent font-semibold"
                    : "text-foreground/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
