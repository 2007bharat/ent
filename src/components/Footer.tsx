import { Stethoscope, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: ['Ear Care & Hearing', 'Sinus & Nasal', 'Voice & Throat', 'Pediatric ENT', 'Sleep & Snoring', 'Allergy Care'],
  },
  {
    title: 'Practice',
    links: ['About Dr. Mitchell', 'Our Team', 'Insurance & Billing', 'Patient Forms', 'FAQ', 'Privacy Policy'],
  },
  {
    title: 'Resources',
    links: ['Patient Portal', 'Telehealth', 'Pre-Op Instructions', 'Post-Op Care', 'Blog', 'Contact Us'],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-slate-400 pt-16 pb-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-lg tracking-tight text-white">Dr. Sarah Mitchell</span>
                <span className="text-[11px] font-medium text-slate-500 tracking-wide">ENT Specialist</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Compassionate, expert care for ear, nose, and throat conditions.
              Board-certified. Patient-first. Always.
            </p>

            {/* Contact quick info */}
            <div className="mt-5 space-y-2">
              <a href="tel:+18005550199" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary-400" />
                (800) 555-0199
              </a>
              <a href="mailto:info@drmitchell-ent.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary-400" />
                info@drmitchell-ent.com
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-primary-400" />
                1200 Medical Center Blvd, Suite 300
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 hover:border-primary-600 hover:scale-110 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-white mb-3">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            &copy; 2026 Dr. Sarah Mitchell, MD. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Caring for patients with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> since 2011
          </p>
        </div>
      </div>
    </footer>
  );
}
