import { useCallback, useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import { GALLERY_IMAGES } from '../assets/images';

const SPROCKET_HOLES = [0, 1, 2, 3, 4, 5, 6, 7];

/* Ancho del fotograma: foto (min(52vw,15rem)) + 1.5rem de borde de película */
const FRAME_WIDTH = 'calc(min(52vw, 15rem) + 1.5rem)';

function FilmRail() {
  return (
    <div aria-hidden="true" className="flex h-5 items-center justify-around sm:h-6">
      {SPROCKET_HOLES.map((hole) => (
        <span key={hole} className="h-2.5 w-2 rounded-[2px] bg-[#f4ede4]/85 sm:h-3.5 sm:w-2.5" />
      ))}
    </div>
  );
}

export default function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    const frames = scroller.querySelectorAll<HTMLElement>('[data-film-frame]');
    let closest = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    frames.forEach((frame, i) => {
      const frameCenter = frame.offsetLeft + frame.offsetWidth / 2;
      const distance = Math.abs(frameCenter - center);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    });

    setActive((prev) => (prev === closest ? prev : closest));
  }, []);

  useEffect(() => {
    updateActive();
    window.addEventListener('resize', updateActive);
    return () => window.removeEventListener('resize', updateActive);
  }, [updateActive]);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    const frame = scroller?.querySelectorAll<HTMLElement>('[data-film-frame]')[index];
    if (!scroller || !frame) return;
    scroller.scrollTo({
      left: frame.offsetLeft + frame.offsetWidth / 2 - scroller.clientWidth / 2,
      behavior: 'smooth',
    });
  };

  const arrowClass =
    'absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-arena/30 bg-surface/90 font-fredoka text-lg text-ink shadow-lg backdrop-blur transition hover:scale-105 disabled:pointer-events-none disabled:opacity-0';

  return (
    <section id="galeria" className="scroll-mt-24 bg-crema px-4 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon="🎞️"
          title="Galería de Recuerdos"
          subtitle="Una tira de negativos con lo que guardamos y atesoramos."
        />

        <div className="relative mx-auto mt-6">
          <div
            ref={scrollerRef}
            onScroll={updateActive}
            tabIndex={0}
            aria-label="Rollo de fotos"
            className="relative snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[2rem] border border-arena/20 bg-surface-soft py-10 shadow-inner outline-none [scrollbar-width:none] sm:py-12 [&::-webkit-scrollbar]:hidden"
          >
            <div
              className="flex w-max"
              style={{ paddingInline: `calc(50% - (${FRAME_WIDTH}) / 2)` }}
            >
              {GALLERY_IMAGES.map((photo, i) => (
                <div
                  key={photo.id}
                  data-film-frame
                  className={`flex shrink-0 snap-center flex-col bg-[#171210] px-3 transition-[filter,opacity] duration-300 ${
                    i === active ? 'opacity-100 blur-none' : 'opacity-40 blur-[2px]'
                  }`}
                >
                  <FilmRail />
                  <figure
                    className={`w-[min(52vw,15rem)] overflow-hidden rounded-sm border bg-surface shadow-2xl transition-shadow duration-300 ${
                      i === active
                        ? 'border-mostaza/80 shadow-[0_0_50px_rgba(242,193,78,0.35)]'
                        : 'border-white/20'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover"
                    />
                    <figcaption className="bg-surface px-3 py-2 text-center font-caveat text-xl text-ink">
                      {photo.alt}
                    </figcaption>
                  </figure>
                  <FilmRail />
                </div>
              ))}
            </div>
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-12 rounded-l-[2rem] bg-gradient-to-r from-surface-soft/95 to-transparent sm:w-24" />
            <div className="absolute inset-y-0 right-0 w-12 rounded-r-[2rem] bg-gradient-to-l from-surface-soft/95 to-transparent sm:w-24" />
          </div>

          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            className={`${arrowClass} left-3`}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={() => goTo(active + 1)}
            disabled={active === GALLERY_IMAGES.length - 1}
            className={`${arrowClass} right-3`}
          >
            ›
          </button>

          <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-arena/30 bg-surface/85 px-3 py-1 font-fredoka text-xs font-semibold text-ink backdrop-blur">
            {active + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>

        <p className="mt-4 text-center font-quicksand text-sm font-medium text-ink/70">
          Desliza la tira o usa las flechas para avanzar fotograma a fotograma.
        </p>
      </div>
    </section>
  );
}
