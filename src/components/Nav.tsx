import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

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
    <nav className="fixed inset-x-0 top-2 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
      <div className="flex w-full max-w-3xl items-center justify-between gap-1 rounded-full border border-arena/30 bg-surface/90 px-1.5 py-1.5 shadow-2xl backdrop-blur-md sm:gap-2 sm:px-3 sm:py-2">
        <div className="flex min-w-0 items-center gap-0.5 sm:gap-2">
          {LINKS.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              className={`flex items-center gap-1.5 rounded-full px-2 py-2 text-sm font-semibold transition-all sm:gap-2 sm:px-3 ${
                active === id
                  ? 'bg-cielo text-white shadow-lg shadow-cielo/40 dark:text-crema'
                  : 'text-ink hover:bg-cielo-light'
              }`}
            >
              <span aria-hidden="true">{icon}</span>
              <span className="hidden md:inline">{label}</span>
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
