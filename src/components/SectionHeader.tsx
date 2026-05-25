type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div data-section-header className="mb-12 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">
      <div>
        <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.22em] text-[#e6578f]">
          {eyebrow}
        </span>
        <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-semibold leading-tight text-[#1a1018]">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-[15px] font-light leading-7 text-[#4a3f47]">{description}</p>
    </div>
  );
}
