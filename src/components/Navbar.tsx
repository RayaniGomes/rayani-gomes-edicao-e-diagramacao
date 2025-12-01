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
    <header className="w-full flex justify-center px-4 items-center fixed top-8 z-30">
      <div className="container inline-flex justify-between items-center p-6 rounded-xl h-16 bg-white/70 shadow-lg backdrop-blur-sm border">
        <a href="/" className="flex items-center" onClick={handleClick("home")}>
          <img src="/logo.webp" alt="Logo" className="w-10 h-8 object-cover invert" />
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
                    ? "text-accent font-semibold underline underline-offset-4 decoration-2 decoration-accent"
                    : "text-foreground hover:font-semibold hover:text-accent hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent hover:scale-102"
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
            className="p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-accent transition-colors duration-200"
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
        <div className="md:hidden fixed top-24 left-4 right-4 bg-white/80 backdrop-blur-sm transition duration-300 shadow-lg rounded-xl border">
          <div className="flex flex-col px-4 py-3 gap-2">
            {LINKS.map((link) => (
              <a
                key={link.id}
                onClick={handleClick(link.id)}
                href={`#${link.id}`}
                className={`py-2 ${
                  active === link.id
                    ? "text-white text-center font-semibold underline underline-offset-4 decoration-2 decoration-white bg-accent/80 rounded-lg"
                    : "text-foreground text-center hover:font-semibold hover:text-white hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-wihite hover:bg-accent/80 rounded-lg"
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
