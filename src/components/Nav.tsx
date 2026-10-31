import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'inicio', label: 'Inicio', icon: '🏠' },
  { id: 'historia', label: 'Historia', icon: '📖' },
  { id: 'galeria', label: 'Galería', icon: '📸' },
  { id: 'dia-a-dia', label: 'Día a Día', icon: '📅' },
  { id: 'rincon', label: 'Rincón', icon: '💌' },
];

export default function Nav() {
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div className="flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-arena/30 bg-white/90 px-2 py-2 shadow-2xl backdrop-blur-md sm:px-3">
        {LINKS.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-all ${
              active === id
                ? 'bg-cielo text-white shadow-lg shadow-cielo/40'
                : 'text-ink hover:bg-cielo-light'
            }`}
          >
            <span aria-hidden="true">{icon}</span>
            <span className="hidden sm:inline">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
