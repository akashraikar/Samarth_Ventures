import React from 'react';
import { NavPage } from '../types';
import { BrandLogo } from './BrandLogo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenEnquireModal: (courseKey?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquireModal }) => {
  return (
    <footer className="bg-[#0B1120] text-[#EAF1FF] pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center">
              {/* Exact corporate logo asset: 'samarth ventures logo - horizontal.png' */}
              <div className="p-2.5 bg-white rounded-xl inline-block shadow-sm">
                <img
                  src="/samarth ventures logo - horizontal.png"
                  alt="Samarth Ventures"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="hidden">
                  <BrandLogo className="h-10 w-auto" />
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              India&apos;s premier industrial training academy specializing in advanced Rhinoceros 3D Jewelry CAD, Reverse Engineering Metrology, and scientific Hollow Electroforming R&amp;D.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-950/40 border border-amber-900/60 p-2.5 rounded-lg max-w-sm">
              <Award className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Robert McNeel &amp; Associates Authorized Rhinoceros 3D Training Specialist</span>
            </div>

            <div className="flex items-center gap-3 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                ISO 9001:2015 Process Standards
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Practical Bench Tests
              </span>
            </div>
          </div>

          {/* Column 2: What We Offer (4 Accredited Courses) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              What We Offer
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('course-advanced')}
                  className="hover:text-white transition-colors text-left leading-relaxed flex items-center gap-1.5 group"
                >
                  <span className="text-[#0085CB] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Jewellery CAD Professional (Advanced)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('course-intermediate')}
                  className="hover:text-white transition-colors text-left leading-relaxed flex items-center gap-1.5 group"
                >
                  <span className="text-[#0085CB] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Jewellery Designing (Intermediate)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('course-reverse-engineering')}
                  className="hover:text-white transition-colors text-left leading-relaxed flex items-center gap-1.5 group"
                >
                  <span className="text-[#0085CB] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Rhino Reverse Engineering Pro</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('course-digital-artisan')}
                  className="hover:text-white transition-colors text-left leading-relaxed flex items-center gap-1.5 group"
                >
                  <span className="text-[#0085CB] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Digital Artisan for Heritage Crafts</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('electroforming')}
                  className="text-amber-400 hover:text-amber-300 transition-colors text-left leading-relaxed flex items-center gap-1.5 font-medium"
                >
                  <span className="text-amber-400">›</span>
                  <span>Electroforming Technology &amp; R&amp;D</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('our-story')}
                  className="hover:text-white transition-colors"
                >
                  Our Story &amp; History
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-choose-us')}
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('electroforming')}
                  className="hover:text-white transition-colors"
                >
                  Electroforming Facility
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('get-in-touch')}
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Campus Location
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenEnquireModal()}
                  className="inline-flex items-center gap-1 text-[#38BDF8] hover:underline font-semibold"
                >
                  <span>Book Free Studio Demo</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Academy Lab */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0085CB] shrink-0 mt-0.5" />
                <span>
                  Samarth Ventures Center of Excellence, Jewellery Industrial Hub, Mumbai &amp; Surat Manufacturing Corridor, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0085CB] shrink-0" />
                <a href="tel:+919820012345" className="hover:text-white transition-colors">
                  +91 (022) 2854-9100 / +91 98200-12345
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0085CB] shrink-0" />
                <a href="mailto:admissions@samarthventures.in" className="hover:text-white transition-colors">
                  admissions@samarthventures.in
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-[#0085CB] shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:30 PM IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Samarth Ventures. All rights reserved. Rhinoceros&reg; is a registered trademark of Robert McNeel &amp; Associates.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Academic Enrollment</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Casting Lab Safety Manual</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
