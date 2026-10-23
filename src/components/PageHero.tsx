export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="border-b border-line py-16 md:py-24">
      <div className="container-x max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mb-4 mt-3 text-5xl leading-[1.02] tracking-[-0.04em] md:text-6xl">{title}</h1>
        {sub && <p className="max-w-xl text-[17px] font-light leading-[1.65] text-muted">{sub}</p>}
      </div>
    </div>
  );
}
