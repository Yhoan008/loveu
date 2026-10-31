type SectionHeaderProps = {
  icon: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="mx-auto inline-grid h-16 w-16 place-items-center rounded-3xl border-2 border-dashed border-arena bg-white text-3xl shadow-lg -rotate-6">
        {icon}
      </span>
      <h2 className="mt-6 font-fredoka text-4xl font-semibold text-ink md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-3 font-quicksand font-medium text-ink/70">{subtitle}</p> : null}
    </div>
  );
}
