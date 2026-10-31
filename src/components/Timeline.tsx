import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { MILESTONES } from '../assets/images';

export default function Timeline() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="historia" className="scroll-mt-24 bg-crema px-4 py-24 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          icon="📖"
          title="Nuestra Historia"
          subtitle="El camino que nos trajo hasta aquí, un capítulo a la vez."
        />
        <ol className="relative">
          <div
            aria-hidden="true"
            className="absolute top-8 bottom-0 left-0 w-2 rounded-full bg-linear-to-b from-cielo via-mostaza to-arena md:left-1/2 md:-translate-x-1/2"
          />
          {MILESTONES.map((m) => {
            const active = activeId === m.id;
            const isRight = m.side === 'right';
            const itemClass = isRight
              ? 'relative w-full pl-12 pb-12 md:w-1/2 md:pr-0 md:pl-14 md:ml-auto'
              : 'relative w-full pl-12 pb-12 md:w-1/2 md:pl-0 md:pr-14';
            const dotClass =
              'absolute top-8 left-0 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] border-crema bg-mostaza shadow-md transition-transform hover:scale-150 md:left-auto md:right-0';
            return (
              <li
                key={m.id}
                className={`${itemClass} cursor-pointer`}
                onClick={() => setActiveId(active ? null : m.id)}
              >
                <span className={dotClass} />
                <div
                  className={`relative rounded-[2rem] border bg-white p-4 shadow-xl transition-all duration-300 md:p-6 ${
                    active
                      ? 'border-cielo shadow-2xl'
                      : 'border-arena/20 hover:-translate-y-1 hover:shadow-2xl'
                  }`}
                >
                  <img src={m.src} alt={m.alt} className="h-44 w-full rounded-2xl object-cover" />
                  <span className="mt-4 inline-block rounded-full bg-cielo px-3 py-1 font-fredoka text-xs font-semibold uppercase tracking-widest text-white shadow-md">
                    {m.date}
                  </span>
                  <h3 className="mt-3 font-fredoka text-2xl font-semibold text-ink md:text-3xl">{m.title}</h3>
                  <p className="mt-1 font-quicksand font-medium text-ink/80">{m.desc}</p>
                  {active ? (
                    <p className="mt-3 rounded-2xl bg-crema p-4 font-quicksand font-medium text-ink/90">{m.full}</p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
