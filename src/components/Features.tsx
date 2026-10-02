import { useReveal } from '@/hooks/useReveal';
import {
  Ear,
  Wind,
  ThumbsUp,
  Mic2,
  Activity,
  Baby,
  Stethoscope,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: Ear,
    title: 'Ear Care & Hearing',
    desc: 'Comprehensive hearing evaluations, tinnitus management, and treatment for ear infections and balance disorders.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
    delay: 0,
    size: 'lg:col-span-2',
  },
  {
    icon: Wind,
    title: 'Sinus & Nasal',
    desc: 'Advanced sinus surgery, deviated septum correction, and chronic sinusitis treatment.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    delay: 100,
    size: '',
  },
  {
    icon: Mic2,
    title: 'Voice & Throat',
    desc: 'Diagnosis and treatment of vocal cord disorders, swallowing difficulties, and throat conditions.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    delay: 200,
    size: '',
  },
  {
    icon: Baby,
    title: 'Pediatric ENT',
    desc: 'Gentle, specialized care for children — from ear tubes to tonsillectomies and sleep-disordered breathing.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    delay: 300,
    size: 'lg:col-span-2',
  },
  {
    icon: Activity,
    title: 'Sleep & Snoring',
    desc: 'Comprehensive sleep apnea diagnosis, snoring solutions, and surgical interventions for better rest.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
    delay: 400,
    size: '',
  },
  {
    icon: ThumbsUp,
    title: 'Allergy Care',
    desc: 'Testing and immunotherapy for environmental and food allergies affecting the ENT system.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    delay: 500,
    size: '',
  },
];

export default function Features() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-2xl mb-14 reveal ${visible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow">
            <Stethoscope className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Comprehensive care for{' '}
            <span className="font-display italic text-primary-600">every condition</span>
          </h2>
          <p className="mt-4 text-lg text-ink-light leading-relaxed">
            From routine check-ups to advanced surgical procedures, we provide the full
            spectrum of ear, nose, and throat care under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:auto-rows-fr">
          {services.map((s) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                ref={cardRef}
                className={`reveal ${cardVis ? 'is-visible' : ''} ${s.size} group relative p-6 lg:p-7 card hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 hover:border-primary-200`}
                style={{ transitionDelay: `${s.delay}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${s.bg} ${s.border} border flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`w-6 h-6 ${s.color}`} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1.5 text-ink">{s.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
