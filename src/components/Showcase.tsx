import { useReveal } from '@/hooks/useReveal';
import { Award, GraduationCap, HeartHandshake, Microscope, Quote, ChevronRight } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, label: 'MD, Johns Hopkins School of Medicine' },
  { icon: Award, label: 'Board-certified in Otolaryngology' },
  { icon: Microscope, label: 'Fellowship-trained in Rhinology' },
  { icon: HeartHandshake, label: '15+ years of clinical experience' },
];

const stats = [
  { value: '20k+', label: 'Patients treated' },
  { value: '8k+', label: 'Procedures performed' },
  { value: '4.9', label: 'Average rating' },
  { value: '15+', label: 'Years of practice' },
];

export default function Showcase() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div
            ref={ref}
            className={`relative reveal ${visible ? 'is-visible' : ''}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/15 border border-slate-200/60">
              <img
                src="https://images.pexels.com/photos/5206946/pexels-photo-5206946.jpeg?auto=compress&cs=tinysrgb&h=750&w=940"
                alt="ENT doctor examining a patient's ear"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Floating credential card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 max-w-[280px] hidden sm:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm text-ink">Top Doctor 2025</div>
                  <div className="text-xs text-ink-soft">Castle Connolly Award</div>
                </div>
              </div>
              <p className="text-xs text-ink-light leading-relaxed">
                Recognized for excellence in patient care and surgical outcomes.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className={`reveal ${visible ? 'is-visible' : ''}`}>
              <span className="eyebrow">
                <HeartHandshake className="w-4 h-4" />
                About Dr. Mitchell
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                A doctor who{' '}
                <span className="font-display italic text-primary-600">truly listens</span>
              </h2>
              <p className="mt-5 text-lg text-ink-light leading-relaxed">
                Dr. Sarah Mitchell believes that great care starts with understanding each
                patient's unique story. She takes the time to listen, explain, and create
                personalized treatment plans — because you deserve more than a 10-minute visit.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 space-y-3">
              {credentials.map((c, i) => {
                const { ref: cardRef, visible: cardVis } = useReveal();
                const Icon = c.icon;
                return (
                  <div
                    key={i}
                    ref={cardRef}
                    className={`reveal ${cardVis ? 'is-visible' : ''} flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5 text-primary-600" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-medium text-ink-light">{c.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <div key={i} className="text-center p-3 bg-surface-alt rounded-xl border border-slate-200/60">
                  <div className="text-xl lg:text-2xl font-extrabold text-primary-600">{s.value}</div>
                  <div className="text-[11px] text-ink-soft mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 relative p-6 bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl border border-primary-100/60">
              <Quote className="w-8 h-8 text-primary-300 mb-3" />
              <p className="text-base font-display italic text-ink leading-relaxed">
                "My goal isn't just to treat symptoms — it's to help you understand your
                condition and feel confident about your care."
              </p>
              <p className="mt-3 text-sm font-semibold text-ink-light">— Dr. Sarah Mitchell, MD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
