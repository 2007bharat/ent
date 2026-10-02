import { useEffect, useState } from 'react';
import { Calendar, Phone, Star, ShieldCheck, Clock, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="top" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-ink-light shadow-sm mb-6 animate-fade-up"
              style={{ animationDelay: '0s', opacity: 0 }}
            >
              <span className="flex items-center gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span>Rated 4.9/5 by 2,000+ patients</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Expert care for your{' '}
              <span className="relative inline-block">
                <span className="font-display italic text-primary-600">ear, nose</span>
              </span>{' '}
              &{' '}
              <span className="font-display italic text-teal-600">throat</span>.
            </h1>

            <p
              className="mt-6 text-lg lg:text-xl text-ink-light max-w-xl mx-auto lg:mx-0 animate-fade-up leading-relaxed"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Dr. Sarah Mitchell brings 15+ years of specialized experience in diagnosing
              and treating ENT conditions — with a compassionate, patient-first approach.
            </p>

            <div
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <a href="#contact" className="btn-primary text-base group">
                <Calendar className="w-5 h-5" />
                Book an Appointment
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="tel:+18005550199" className="btn-secondary text-base group">
                <Phone className="w-4 h-4" />
                (800) 555-0199
              </a>
            </div>

            <div
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <div className="flex items-center gap-2 text-ink-light">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Board-certified</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2 text-ink-light">
                <Clock className="w-5 h-5 text-primary-500" />
                <span>Same-day visits</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2 text-ink-light">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span>15+ years</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="relative animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/15 border border-slate-200/60">
                <img
                  src="https://images.pexels.com/photos/7579823/pexels-photo-7579823.jpeg?auto=compress&cs=tinysrgb&h=750&w=940"
                  alt="Dr. Sarah Mitchell consulting with a patient"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating card: Rating */}
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber-500 fill-amber-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-ink leading-none">4.9</div>
                    <div className="text-xs text-ink-soft mt-1">Patient rating</div>
                  </div>
                </div>
              </div>

              {/* Floating card: Patients */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-ink leading-none">20k+</div>
                    <div className="text-xs text-ink-soft mt-1">Patients treated</div>
                  </div>
                </div>
              </div>

              {/* Floating badge: Available now */}
              <div className="absolute top-1/2 -right-3 lg:-right-5 -translate-y-1/2 bg-teal-500 text-white rounded-full px-3 py-1.5 text-xs font-semibold shadow-lg flex items-center gap-1.5 animate-pulse-soft">
                <span className="w-2 h-2 rounded-full bg-white" />
                Available today
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
