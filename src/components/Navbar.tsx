import { useEffect, useState } from 'react';
import { Menu, X, Stethoscope, Calendar } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-slate-200/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
            <Stethoscope className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-lg tracking-tight text-ink">Dr. Sarah Mitchell</span>
            <span className="text-[11px] font-medium text-ink-soft tracking-wide">ENT Specialist</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-ink-light hover:text-primary-700 transition-colors rounded-lg hover:bg-primary-50"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+18005550199" className="text-sm font-semibold text-ink-light hover:text-ink transition-colors">
            (800) 555-0199
          </a>
          <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
            <Calendar className="w-4 h-4" />
            Book Appointment
          </a>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 glass border-b border-slate-200/60 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-ink-light hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="h-px bg-slate-200 my-2" />
          <a href="tel:+18005550199" className="px-4 py-3 text-sm font-semibold text-ink hover:bg-slate-100 rounded-lg">
            (800) 555-0199
          </a>
          <a href="#contact" className="btn-primary text-sm justify-center">
            <Calendar className="w-4 h-4" />
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
