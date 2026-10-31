import { useEffect, useState } from 'react';
import { HERO_IMAGE } from '../assets/images';

const START_DATE = new Date(2024, 1, 14, 20, 0, 0);

function useDaysTogether() {
  const [days, setDays] = useState(() =>
    Math.floor((Date.now() - START_DATE.getTime()) / 86400000)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDays(Math.floor((Date.now() - START_DATE.getTime()) / 86400000));
    }, 1000 * 60 * 30);
    return () => clearInterval(interval);
  }, []);

  return days;
}

export default function Hero() {
  const days = useDaysTogether();

  return (
    <section
      id="inicio"
      className="scroll-mt-24 relative min-h-screen overflow-hidden bg-crema px-6 pb-24 pt-28"
    >
      <div aria-hidden="true" className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-mostaza/20" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-cielo/20" />
      <div aria-hidden="true" className="absolute -left-40 top-1/3 h-40 w-40 rounded-full bg-arena/20" />
      <span
        aria-hidden="true"
        className="absolute left-[12%] top-32 text-3xl animate-bounce"
        style={{ animationDelay: '0s' }}
      >
        💕
      </span>
      <span
        aria-hidden="true"
        className="absolute right-[14%] top-24 text-2xl animate-bounce"
        style={{ animationDelay: '1.2s' }}
      >
        ⭐
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-[18%] left-[8%] text-2xl animate-bounce"
        style={{ animationDelay: '0.6s' }}
      >
        💛
      </span>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-block -rotate-2 rounded-full border-2 border-dashed border-arena bg-white px-4 py-1.5 font-fredoka text-base font-medium text-arena-dark shadow-sm">
              💕 nuestro rincón privado
            </span>
            <h1 className="mt-6 font-fredoka text-5xl font-bold leading-tight text-ink md:text-6xl">
              Nuestra pequeña{' '}
              <span className="inline-block -rotate-3 font-caveat text-6xl font-bold text-cielo md:text-7xl">
                gran
              </span>{' '}
              historia
            </h1>
            <p className="mt-6 max-w-xl font-medium text-ink/80">
              Bienvenidos a la página donde guardamos los días que nos hacen más grandes. Cada sonrisa, cada abrazo y
              cada pequeña aventura cuenta aquí 💛
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#historia"
                className="inline-flex items-center gap-2 rounded-full bg-cielo px-7 py-3.5 font-fredoka font-semibold text-white shadow-lg shadow-cielo/40 transition hover:-translate-y-1"
              >
                📖 Leer nuestra historia
              </a>
              <a
                href="#rincon"
                className="inline-flex items-center gap-2 rounded-full border border-arena/30 bg-white px-7 py-3.5 font-fredoka font-semibold text-ink shadow-lg transition hover:-translate-y-1"
              >
                💌 Dejar un mensaje
              </a>
            </div>

            <div className="mt-12 inline-flex items-center gap-4 rounded-3xl border border-arena/20 bg-white px-5 py-3 shadow-xl rotate-2">
              <span className="font-fredoka text-4xl font-bold text-cielo">{days}</span>
              <span className="font-caveat text-3xl text-ink">días juntos</span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rotate-3 rounded-[3rem] bg-linear-to-br from-mostaza/30 via-cielo/30 to-arena/30"
            />
            <img
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              className="relative aspect-[4/3] w-full rounded-[2rem] border-4 border-white object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-4 rotate-3 rounded-2xl border border-arena/20 bg-white px-5 py-2 shadow-xl">
              <p className="font-caveat text-3xl text-ink">¡Cada día es nuestro!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
