import { useReveal } from '@/hooks/useReveal';
import { Calendar, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';

export default function CTA() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-surface-alt">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Booking form */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-primary-900/10 border border-slate-200/60 p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full text-sm font-semibold text-primary-700 mb-5">
                <Calendar className="w-4 h-4" />
                Schedule your visit
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                Book an appointment
              </h2>
              <p className="text-ink-light mb-6">
                Fill out the form below and our team will call you within 24 hours to confirm.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">First name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                 <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Last name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Phone number</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Reason for visit</label>
                  <select
                    className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink-light focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                  >
                    <option>Hearing evaluation</option>
                    <option>Sinus / nasal issue</option>
                    <option>Throat / voice concern</option>
                    <option>Pediatric ENT</option>
                    <option>Sleep apnea / snoring</option>
                    <option>Allergy testing</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary text-base w-full justify-center group">
                  Request appointment
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-ink-soft text-center">
                  No referral needed. Most insurance plans accepted.
                </p>
              </form>
            </div>

            {/* Right: Contact info */}
            <div className="lg:pl-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Your health{' '}
                <span className="font-display italic text-primary-600">can't wait</span>
              </h2>
              <p className="mt-4 text-lg text-ink-light leading-relaxed">
                Don't let ENT issues affect your quality of life. Reach out today — we'll
                find the earliest available slot that works for you.
              </p>

              <div className="mt-8 space-y-4">
                <a href="tel:+18005550199" className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-primary-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm text-ink-soft">Call us</div>
                    <div className="font-bold text-ink">(800) 555-0199</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-sm text-ink-soft">Visit us</div>
                    <div className="font-bold text-ink">1200 Medical Center Blvd, Suite 300</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-ink-soft">Office hours</div>
                    <div className="font-bold text-ink">Mon–Fri 8am–6pm · Sat 9am–2pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
