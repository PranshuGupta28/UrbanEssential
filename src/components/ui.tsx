'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

export function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) { if (reduce) setN(to); return; }
    const step = Math.max(1, Math.ceil(to / 40));
    const id = setInterval(() => setN(v => { const x = Math.min(to, v + step); if (x >= to) clearInterval(id); return x; }), 30);
    return () => clearInterval(id);
  }, [inView, to, reduce]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function SectionHead({ eyebrow, title, sub, light, center }: { eyebrow?: string; title: ReactNode; sub?: ReactNode; light?: boolean; center?: boolean }) {
  return (
    <Reveal className={`mb-14 max-w-3xl md:mb-20 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mb-4 mt-3 text-4xl leading-[1.05] tracking-[-0.04em] md:text-[3.4rem] ${light ? 'text-[#FAFAF9]' : ''}`}>{title}</h2>
      {sub && <p className={`max-w-xl text-[17px] font-light leading-[1.65] ${light ? 'text-[#A8A29E]' : 'text-muted'} ${center ? 'mx-auto' : ''}`}>{sub}</p>}
    </Reveal>
  );
}
