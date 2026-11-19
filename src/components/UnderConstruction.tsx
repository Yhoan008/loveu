type Props = { title: string; icon: string; className?: string };

export default function UnderConstruction({ title, icon, className = '' }: Props) {
  return (
    <div
      className={`flex flex-col rounded-[2rem] border border-arena/20 bg-surface p-5 shadow-xl sm:p-6 ${className}`}
    >
      <h3 className="flex items-center gap-2 font-fredoka text-xl font-semibold text-ink sm:text-2xl">
        <span aria-hidden="true">{icon}</span> {title}
      </h3>
      <div className="mt-4 flex min-h-52 flex-1 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-arena/30 bg-crema p-6 text-center">
        <span className="text-5xl" aria-hidden="true">
          🚧
        </span>
        <p className="font-fredoka text-2xl font-semibold text-ink">En construcción⚙️</p>
        <p className="font-quicksand text-sm font-medium text-ink/70">
          Estamos preparando algo bonito para este rincón. ¡Muy pronto!
        </p>
      </div>
    </div>
  );
}
