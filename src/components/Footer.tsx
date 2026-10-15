import React from "react";
import { NavPage } from "../types";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { SiX } from "react-icons/si";

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenEnquireModal: (courseKey?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenEnquireModal,
}) => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
      ariaLabel: "Follow Samarth Ventures on Facebook",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      icon: SiX,
      ariaLabel: "Follow Samarth Ventures on X (formerly Twitter)",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/samarth-ventures",
      icon: Linkedin,
      ariaLabel: "Connect with Samarth Ventures on LinkedIn",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
      ariaLabel: "Follow Samarth Ventures on Instagram",
    },
  ];

  return (
    <footer className="bg-[#0B1120] text-[#EAF1FF] pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center">
              {/* Corporate logo image file uploaded by user */}
              <div className="p-2.5 bg-white rounded-xl inline-block shadow-sm">
                <img
                  src="/samarth ventures logo - horizontal.png"
                  alt="Samarth Ventures"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              India&apos;s premier industrial training academy specializing in
              advanced Rhinoceros 3D jewellery CAD, Reverse Engineering
              Metrology, and High-Pricision Hollow Electroforming R&amp;D.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-950/40 border border-amber-900/60 p-2.5 rounded-lg max-w-sm">
              <Award className="w-4 h-4 shrink-0 text-amber-400" />
              <span>
                McNeel Associates Authorized Rhinoceros 3D Training Specialist
              </span>
            </div>

            <div className="flex items-center gap-3 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                ISO 9001:2008 Process Standards
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Practical Bench Tests
              </span>
            </div>

            {/* Social Media Navigation Links */}
            <div className="pt-2">
              <div className="flex items-center gap-2.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.ariaLabel}
                      className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0085CB] hover:border-[#0085CB] transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
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
                  onClick={() => onNavigate("course-advanced")}
                  className="hover:text-white transition-colors text-left leading-relaxed flex items-center gap-1.5 group"
                >
                  <span className="text-[#0085CB] group-hover:translate-x-0.5 transition-transform">
                    ›
                  </span>
                  <span>Jewellery CAD Professional (Advanced)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("course-intermediate")}
                  className="hover:text-white transition-colors text-left leading-relaxed flex items-center gap-1.5 group"
                >
                  <span className="text-[#0085CB] group-hover:translate-x-0.5 transition-transform">
                    ›
                  </span>
                  <span>Jewellery Designing (Intermediate)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("course-reverse-engineering")}
                  className="hover:text-white transition-colors text-left leading-relaxed flex items-center gap-1.5 group"
                >
                  <span className="text-[#0085CB] group-hover:translate-x-0.5 transition-transform">
                    ›
                  </span>
                  <span>Rhino Reverse Engineering Pro</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("course-digital-artisan")}
                  className="hover:text-white transition-colors text-left leading-relaxed flex items-center gap-1.5 group"
                >
                  <span className="text-[#0085CB] group-hover:translate-x-0.5 transition-transform">
                    ›
                  </span>
                  <span>Digital Artisan for Heritage Crafts</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate("electroforming")}
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
                  onClick={() => onNavigate("home")}
                  className="hover:text-white transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("our-story")}
                  className="hover:text-white transition-colors"
                >
                  Our Story &amp; History
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("why-choose-us")}
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("electroforming")}
                  className="hover:text-white transition-colors"
                >
                  Electroforming Facility
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("get-in-touch")}
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
                  SHIVA NILAYA, 10 A, 1st Main Rd, Vinayaka Layout 3rd Stage,
                  Govindaraja Nagar Ward, Vijayanagar, Bengaluru,
                  <br />
                  Karnataka -560040
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0085CB] shrink-0" />
                <a
                  href="tel:+919820012345"
                  className="hover:text-white transition-colors"
                >
                  +91 77604 82735
                  <br />
                  +91 97316 95599
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0085CB] shrink-0" />
                <a
                  href="mailto:admissions@samarthventures.in"
                  className="hover:text-white transition-colors"
                >
                  samarthventures@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-[#0085CB] shrink-0" />
                <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Samarth Ventures. All rights
            reserved. Rhinoceros&reg; is a registered trademark of McNeel
            Associates.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">
              Privacy Policy
            </span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">
              Terms of Academic Enrollment
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
