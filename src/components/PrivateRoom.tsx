import { useState } from 'react';
import type { FormEvent } from 'react';
import SectionHeader from './SectionHeader';
import UnderConstruction from './UnderConstruction';

type Note = { id: number; text: string; rot: number; color: number };

const NOTES_SEED: Note[] = [
  { id: 1, text: 'Te amo Jamor❤️‍🔥 ', rot: -3, color: 0 },
  { id: 2, text: 'Te elijo hoy y siempre 💛', rot: 2, color: 1 },
];

const NOTE_COLORS = ['bg-[#F8DCAA]', 'bg-[#FCE7C8]', 'bg-[#FFF3D6]'];

export default function PrivateRoom() {
  const [notes, setNotes] = useState<Note[]>(NOTES_SEED);
  const [noteDraft, setNoteDraft] = useState('');

  const addNote = (e: FormEvent) => {
    e.preventDefault();
    const text = noteDraft.trim();
    if (!text) return;
    setNotes((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        rot: Math.floor(Math.random() * 7) - 3,
        color: Math.floor(Math.random() * NOTE_COLORS.length),
      },
    ]);
    setNoteDraft('');
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <section id="rincon" className="scroll-mt-24 bg-crema px-4 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon="💌"
          title="Rincón Privado"
          subtitle="Nuestro refugio secreto: el chat y el muro de notas."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <UnderConstruction icon="💬" title="Nuestro chat" />

          <div className="flex flex-col rounded-[2rem] border border-arena/20 bg-surface p-5 shadow-xl sm:p-6">
            <h3 className="flex items-center gap-2 font-fredoka text-xl font-semibold text-ink sm:text-2xl">
              <span aria-hidden="true">📝</span> Muro de notas
            </h3>
            <form onSubmit={addNote} className="mt-4 flex gap-2">
              <input
                value={noteDraft}
                onChange={(e) => setNoteDraft(e.target.value)}
                placeholder="Escribe una nota para nosotros…"
                maxLength={80}
                className="w-full min-w-0 rounded-full border-2 border-arena/40 bg-crema px-4 py-2.5 font-quicksand text-base font-semibold outline-none focus:border-mostaza"
              />
              <button
                type="submit"
                aria-label="Añadir nota"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mostaza font-fredoka text-xl font-semibold text-ink shadow-lg transition hover:-translate-y-0.5 dark:text-[#5c4636]"
              >
                +
              </button>
            </form>
            <div className="notes-wall mt-5 flex min-h-52 flex-wrap content-start gap-4 sm:gap-5">
              {notes.map((n) => (
                <div
                  key={n.id}
                  className={`relative w-36 rounded-[6px] px-4 py-6 text-center font-caveat text-2xl leading-snug text-[#5c4636] shadow-xl sm:w-40 sm:text-3xl ${NOTE_COLORS[n.color]}`}
                  style={{ transform: `rotate(${n.rot}deg)` }}
                >
                  {n.text}
                  <button
                    type="button"
                    onClick={() => deleteNote(n.id)}
                    aria-label="Eliminar nota"
                    className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-[#5c4636] text-sm font-bold text-white transition hover:scale-110"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
