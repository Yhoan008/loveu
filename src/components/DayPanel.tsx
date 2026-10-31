import { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';

type Task = { id: number; text: string; tag: 'meta' | 'compra' | 'lugar'; done: boolean };
type EventItem = { day: string; title: string; desc: string };
type EventGroup = { month: string; items: EventItem[] };

const EVENTS: EventGroup[] = [
  {
    month: 'Octubre',
    items: [{ day: '24', title: 'Nuestra cita favorita', desc: 'El mismo rincón, nueva historia.' }],
  },
  {
    month: 'Noviembre',
    items: [
      { day: '02', title: 'Día de los Besos', desc: 'Barrido de besos en toda la casa. 😘' },
      { day: '15', title: 'Viaje sorpresa', desc: 'Pack list: sueño, música y muchas fotos. 🧳' },
    ],
  },
];

const TASKS_KEY = 'loveu_tasks';

const TASKS_SEED: Task[] = [
  { id: 1, text: 'Viajar a Japón 🗾', tag: 'meta', done: false },
  { id: 2, text: 'Comprar leche y galletas 🍪', tag: 'compra', done: false },
  { id: 3, text: 'Visitar el museo de arte 🎨', tag: 'lugar', done: false },
  { id: 4, text: 'Aprender a bailar salsa 💃', tag: 'meta', done: true },
  { id: 5, text: 'Comprar flores para el balcón 💐', tag: 'compra', done: false },
];

function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(TASKS_KEY);
    if (raw) return JSON.parse(raw) as Task[];
  } catch {
    // si algo falla, usamos las tareas por defecto
  }
  return TASKS_SEED;
}

export default function DayPanel() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const doneCount = tasks.filter((t) => t.done).length;
  const progress = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;

  const toggleTask = (id: number) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <section id="dia-a-dia" className="scroll-mt-24 bg-crema px-4 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon="📅"
          title="Día a Día"
          subtitle="Las fechas que celebramos y las misiones del corazón."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-arena/20 bg-white p-6 shadow-xl">
            <h3 className="flex items-center gap-2 font-fredoka text-2xl font-semibold text-ink">
              <span aria-hidden="true">📅</span> Calendario de eventos especiales
            </h3>
            <div className="mt-6 space-y-6">
              {EVENTS.map((group) => (
                <div key={group.month}>
                  <p className="font-fredoka text-sm font-semibold uppercase tracking-widest text-cielo">
                    {group.month}
                  </p>
                  <ul className="mt-3 space-y-3">
                    {group.items.map((e) => (
                      <li key={e.day} className="flex items-center gap-4 rounded-2xl bg-crema p-4">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cielo font-fredoka text-xl font-bold text-white shadow-md">
                          {e.day}
                        </span>
                        <div>
                          <p className="font-fredoka font-semibold text-ink">{e.title}</p>
                          <p className="font-quicksand text-sm font-medium text-ink/70">{e.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-arena/20 bg-white p-6 shadow-xl">
            <h3 className="flex items-center gap-2 font-fredoka text-2xl font-semibold text-ink">
              <span aria-hidden="true">✅</span> Tareas compartidas
            </h3>
            <div className="mt-6">
              <div className="flex items-center justify-between font-fredoka text-sm font-semibold text-ink">
                <span>Progreso del amor 💘</span>
                <span>
                  {doneCount} de {tasks.length}
                </span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-cielo-light">
                <div
                  className="h-full rounded-full bg-linear-to-r from-cielo to-mostaza transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {tasks.map((t) => (
                <li key={t.id}>
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-arena/20 bg-white p-3 transition-all hover:border-arena/40">
                    <input
                      type="checkbox"
                      className="check"
                      checked={t.done}
                      onChange={() => toggleTask(t.id)}
                    />
                    <span
                      className={`font-quicksand font-semibold ${
                        t.done ? 'text-ink/50 line-through' : 'text-ink'
                      }`}
                    >
                      {t.text}
                    </span>
                    <span className="ml-auto rounded-full bg-mostaza-soft px-2 py-0.5 font-fredoka text-[10px] font-semibold uppercase tracking-wide text-arena-dark">
                      {t.tag}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
