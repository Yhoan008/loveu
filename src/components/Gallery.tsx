import { useState } from 'react';
import type { CSSProperties } from 'react';
import SectionHeader from './SectionHeader';
import { GALLERY_IMAGES, type GalleryPhoto } from '../assets/images';

const CATEGORIES = [
  { id: 'todos', label: '✨ Todos', icon: '✨' },
  { id: 'viajes', label: '✈️ Viajes', icon: '✈️' },
  { id: 'citas', label: '💘 Citas', icon: '💘' },
  { id: 'divertidos', label: '🎉 Divertidos', icon: '🎉' },
];

type Category = GalleryPhoto['cat'] | 'todos';

export default function Gallery() {
  const [category, setCategory] = useState<Category>('todos');
  const visible = category === 'todos' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((p) => p.cat === category);

  return (
    <section id="galeria" className="scroll-mt-24 bg-crema px-4 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon="📸"
          title="Galería de Recuerdos"
          subtitle="Lo que guardamos, lo que atesoramos, lo que nos hace grin."
        />
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 font-fredoka font-medium transition-all ${
                category === c.id
                  ? 'border-mostaza bg-mostaza text-ink shadow-lg shadow-mostaza/40 -rotate-1'
                  : 'border-arena/40 bg-white text-ink hover:-translate-y-0.5'
              }`}
            >
              <span aria-hidden="true">{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((p, i) => (
            <figure
              key={p.id}
              className="group relative bg-white p-2 pb-10 shadow-xl transition-all duration-300 hover:shadow-2xl"
              style={{ transform: `rotate(${[-3, 2, -2, 3, 1, -1][i % 6]}deg)` } as CSSProperties}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-1/2 h-5 w-14 -translate-x-1/2 -rotate-2 rounded-[2px] bg-mostaza/70"
              />
              <img src={p.src} alt={p.alt} className="aspect-square w-full rounded-[2px] object-cover" />
              <figcaption className="pt-3 text-center font-caveat text-2xl text-ink">{p.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
