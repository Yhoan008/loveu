import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import SectionHeader from './SectionHeader';

type Message = { from: 'me' | 'partner'; text: string };
type Note = { id: number; text: string; rot: number; color: number };

const CHAT_SEED: Message[] = [
  { from: 'partner', text: '¡Hola mi amor! Bienvenido a nuestro rincón 💕' },
  { from: 'partner', text: 'Aquí es donde guardamos los mensajes que no queremos perder 😍' },
];

const REPLIES = [
  '¡Jajaja sí! 💕',
  'Ojalá ya fuera tarde para dormir juntos 😜',
  'Te quiero más que a las galletas 🍪',
  'Mañana te espero con la cena lista 🥘',
  'Eres mi lugar favorito 🌍',
];

const NOTES_SEED: Note[] = [
  { id: 1, text: 'Feliz día del amor 💘', rot: -3, color: 0 },
  { id: 2, text: 'Te elijo hoy y siempre 💛', rot: 2, color: 1 },
];

const NOTE_COLORS = ['bg-mostaza-soft', 'bg-[#FCE7C8]', 'bg-[#FFF3D6]'];

export default function PrivateRoom() {
  const [messages, setMessages] = useState<Message[]>(CHAT_SEED);
  const [draft, setDraft] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const [notes, setNotes] = useState<Note[]>(NOTES_SEED);
  const [noteDraft, setNoteDraft] = useState('');

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { from: 'me', text }]);
    setDraft('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: 'partner', text: REPLIES[Math.floor(Math.random() * REPLIES.length)] },
      ]);
    }, 1200);
  };

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
    <section id="rincon" className="scroll-mt-24 bg-crema px-4 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon="💌"
          title="Rincón Privado"
          subtitle="Nuestro refugio secreto: el chat y el muro de notas."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-[2rem] border border-arena/20 bg-white p-6 shadow-xl">
            <h3 className="flex items-center gap-2 font-fredoka text-2xl font-semibold text-ink">
              <span aria-hidden="true">💬</span> Nuestro chat
            </h3>
            <div className="mt-4 flex h-80 flex-1 flex-col gap-3 overflow-y-auto rounded-2xl bg-crema p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[75%] rounded-3xl px-4 py-3 font-quicksand font-semibold shadow-sm ${
                      m.from === 'me'
                        ? 'rounded-br-md bg-cielo text-white'
                        : 'rounded-bl-md border border-arena/20 bg-white text-ink'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <form onSubmit={sendMessage} className="mt-4 flex gap-3">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Escribe algo bonito…"
                className="w-full rounded-full border-2 border-arena/40 bg-crema px-4 py-2.5 font-quicksand font-semibold outline-none focus:border-cielo"
              />
              <button
                type="submit"
                aria-label="Enviar mensaje"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cielo text-lg text-white shadow-lg shadow-cielo/40 transition hover:-translate-y-0.5"
              >
                ➤
              </button>
            </form>
          </div>

          <div className="flex flex-col rounded-[2rem] border border-arena/20 bg-white p-6 shadow-xl">
            <h3 className="flex items-center gap-2 font-fredoka text-2xl font-semibold text-ink">
              <span aria-hidden="true">📝</span> Muro de notas
            </h3>
            <form onSubmit={addNote} className="mt-4 flex gap-2">
              <input
                value={noteDraft}
                onChange={(e) => setNoteDraft(e.target.value)}
                placeholder="Escribe una nota para nosotros…"
                maxLength={80}
                className="w-full rounded-full border-2 border-arena/40 bg-crema px-4 py-2.5 font-quicksand font-semibold outline-none focus:border-mostaza"
              />
              <button
                type="submit"
                aria-label="Añadir nota"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mostaza font-fredoka text-xl font-semibold text-ink shadow-lg transition hover:-translate-y-0.5"
              >
                +
              </button>
            </form>
            <div className="notes-wall mt-5 flex min-h-52 flex-wrap content-start gap-5">
              {notes.map((n) => (
                <div
                  key={n.id}
                  className={`relative w-40 rounded-[6px] px-4 py-6 text-center font-caveat text-3xl leading-snug text-ink shadow-xl ${NOTE_COLORS[n.color]}`}
                  style={{ transform: `rotate(${n.rot}deg)` }}
                >
                  {n.text}
                  <button
                    type="button"
                    onClick={() => deleteNote(n.id)}
                    aria-label="Eliminar nota"
                    className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-ink text-sm font-bold text-white transition hover:scale-110"
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
