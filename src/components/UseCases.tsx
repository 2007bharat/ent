import { useReveal } from '@/hooks/useReveal';
import {
  Ear,
  Wind,
  ThumbsUp,
  Baby,
  Moon,
  ShieldAlert,
  ChevronRight,
} from 'lucide-react';

const specialties = [
  {
    icon: Ear,
    title: 'Hearing Loss & Tinnitus',
    desc: 'Comprehensive audiometric testing, hearing aid fitting, and tinnitus management programs.',
    tag: 'Most common',
    color: 'primary',
    delay: 0,
  },
  {
    icon: Wind,
    title: 'Chronic Sinusitis',
    desc: 'Medical and surgical solutions for ongoing sinus inflammation, including balloon sinuplasty.',
    tag: '',
    color: 'teal',
    delay: 80,
  },
  {
    icon: ThumbsUp,
    title: 'Tonsillitis & Adenoids',
    desc: 'Evaluation and surgical removal of tonsils and adenoids for adults and children.',
    tag: '',
    color: 'amber',
    delay: 160,
  },
  {
    icon: Baby,
    title: 'Pediatric ENT',
    desc: 'Gentle, child-friendly care for ear infections, breathing issues, and speech development.',
    tag: '',
    color: 'rose',
    delay: 240,
  },
  {
    icon: Moon,
    title: 'Sleep Apnea & Snoring',
    desc: 'Home sleep studies, CPAP alternatives, and surgical options for better sleep quality.',
    tag: '',
    color: 'primary',
    delay: 320,
  },
  {
    icon: ShieldAlert,
    title: 'Allergy & Immunology',
    desc: 'Skin-prick testing, allergy drops, and immunotherapy tailored to your triggers.',
    tag: '',
    color: 'teal',
    delay: 400,
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  primary: { bg: 'bg-primary-50', border: 'border-primary-100', text: 'text-primary-600' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-100', text: 'text-teal-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-600' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-100', text: 'text-rose-500' },
};

export default function UseCases() {
  const { ref, visible } = useReveal();

  return (
    <section id="specialties" className="relative py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-2xl mb-14 reveal ${visible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow">
            <ShieldAlert className="w-4 h-4" />
            Conditions We Treat
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Specialized treatment for{' '}
            <span className="font-display italic text-teal-600">every need</span>
          </h2>
          <p className="mt-4 text-lg text-ink-light leading-relaxed">
            Whether it's a persistent earache or a complex sinus condition, we have the
            expertise to help you breathe, hear, and live better.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialties.map((s) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            const Icon = s.icon;
            const c = colorMap[s.color];
            return (
              <div
                key={s.title}
                ref={cardRef}
                className={`reveal ${cardVis ? 'is-visible' : ''} group relative p-6 bg-white rounded-2xl border border-slate-200/80 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${s.delay}ms` }}
              >
                {s.tag && (
                  <span className="absolute -top-2.5 right-4 px-3 py-0.5 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    {s.tag}
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${c.text}`} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold mb-1.5 text-ink">{s.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
