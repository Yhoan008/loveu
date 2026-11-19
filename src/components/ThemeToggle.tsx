import { useEffect, useState } from 'react';

const STORAGE_KEY = 'loveu_theme';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Sin persistencia, el tema sigue funcionando durante la sesión.
      }
      return next;
    });
  };

  const isDark = theme === 'dark';
  const label = isDark ? 'Activar tema claro' : 'Activar tema oscuro';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-arena/30 bg-surface text-base text-ink transition-colors hover:bg-cielo-light sm:h-10 sm:w-10"
    >
      <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
}
