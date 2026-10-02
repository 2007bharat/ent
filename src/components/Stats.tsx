import { useReveal } from '@/hooks/useReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer M.',
    role: 'Sinus surgery patient',
    quote: 'After years of chronic sinusitis, Dr. Mitchell performed balloon sinuplasty and I can finally breathe again. The care was exceptional from start to finish.',
    rating: 5,
    delay: 0,
  },
  {
    name: 'Robert K.',
    role: 'Hearing aid patient',
    quote: 'Dr. Mitchell took the time to explain my hearing loss and helped me find the perfect hearing aids. I feel like I got my life back.',
    rating: 5,
    delay: 100,
  },
  {
    name: 'Amanda T.',
    role: 'Parent of pediatric patient',
    quote: 'My 5-year-old needed ear tubes and Dr. Mitchell was so gentle and reassuring. She made the whole process stress-free for our family.',
    rating: 5,
    delay: 200,
  },
];

const stats = [
  { value: '20k+', label: 'Patients treated' },
  { value: '8k+', label: 'Procedures performed' },
  { value: '4.9/5', label: 'Patient rating' },
  { value: '98%', label: 'Would recommend' },
];

export default function Stats() {
  const { ref, visible } = useReveal();

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-ink text-white overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-14 reveal ${visible ? 'is-visible' : ''}`}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-300">
            <Star className="w-4 h-4 fill-teal-300" />
            Patient Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Trusted by{' '}
            <span className="font-display italic text-teal-300">thousands of patients</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Real stories from people who found relief and confidence under Dr. Mitchell's care.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            return (
              <div
                key={t.name}
                ref={cardRef}
                className={`reveal ${cardVis ? 'is-visible' : ''} relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300`}
                style={{ transitionDelay: `${t.delay}ms` }}
              >
                <Quote className="w-8 h-8 text-primary-400/40 mb-4" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-white/10">
          {stats.map((s, i) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            return (
              <div
                key={s.label}
                ref={cardRef}
                className={`reveal ${cardVis ? 'is-visible' : ''} text-center`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-1 text-white">
                  {s.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
