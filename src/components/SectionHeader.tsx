type SectionHeaderProps = {
  icon: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <span className="mx-auto inline-grid h-14 w-14 place-items-center rounded-3xl border-2 border-dashed border-arena bg-surface text-2xl shadow-lg -rotate-6 sm:h-16 sm:w-16 sm:text-3xl">
        {icon}
      </span>
      <h2 className="mt-5 font-fredoka text-3xl font-semibold text-ink sm:mt-6 sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 font-quicksand text-sm font-medium text-ink/70 sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
