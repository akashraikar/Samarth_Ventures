import React from 'react';
import { NavPage } from '../types';
import { COMPANY_STORY, TIMELINE } from '../data/company';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

interface OurStoryViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenEnquireModal: () => void;
}

export const OurStoryView: React.FC<OurStoryViewProps> = ({ onNavigate, onOpenEnquireModal }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Header */}
      <section className="bg-[#0B1120] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085CB]/20 border border-[#0085CB]/40 rounded text-xs font-bold text-[#38BDF8]">
              <Compass className="w-3.5 h-3.5" />
              <span>Founded {COMPANY_STORY.foundingYear} · Mumbai &amp; Surat Manufacturing Corridor</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Our Story: Elevating Indian Jewelry into the Digital Age.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {COMPANY_STORY.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Narrative & Philosophy */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
              The Genesis &amp; Vision
            </div>
            <h2 className="text-3xl font-extrabold text-[#0B1120] leading-snug">
              Why Samarth Ventures Was Built
            </h2>
            
            {COMPANY_STORY.narrative.map((p, idx) => (
              <p key={idx} className="text-sm text-[#565E74] leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] space-y-1.5 shadow-xs">
                <div className="text-xs font-bold text-[#0B1120]">Our Mission</div>
                <p className="text-xs text-[#565E74] leading-relaxed">
                  {COMPANY_STORY.mission}
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] space-y-1.5 shadow-xs">
                <div className="text-xs font-bold text-[#0B1120]">Our Vision</div>
                <p className="text-xs text-[#565E74] leading-relaxed">
                  {COMPANY_STORY.vision}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-lg bg-slate-900">
              <img
                src="/src/assets/images/digital_artisan_craft_1791375553414.jpg"
                alt="Digital Artisan Workshop at Samarth Ventures"
                className="w-full h-auto aspect-4/3 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white text-xs text-[#565E74] border-t border-[#E2E8F0]">
                Traditional master karigars modeling alongside state-of-the-art DLP resin 3D printers and Rhinoceros 8 workstations.
              </div>
            </div>

            <div className="p-6 bg-[#EFF4FF] border border-[#CDE5FF] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#006195]">
                <Award className="w-4 h-4 text-[#0085CB]" />
                <span>Authorized Training Standards</span>
              </div>
              <p className="text-xs text-[#565E74] leading-relaxed">
                Every course is taught by Robert McNeel certified CAD professionals with active consulting contracts in the fine jewelry export export processing zones.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-16 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
              Guiding Principles
            </div>
            <h2 className="text-3xl font-extrabold text-[#0B1120]">
              The Core Values Behind Every Workstation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_STORY.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] space-y-3 hover:border-[#0085CB] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EFF4FF] text-[#0085CB] font-mono font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-[#0B1120]">
                  {val.title}
                </h3>
                <p className="text-xs text-[#565E74] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Company History Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
            Chronology of Growth
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B1120]">
            Our Milestone Timeline (2011 – Present)
          </h2>
        </div>

        <div className="relative border-l-2 border-[#CBD5E1] ml-4 md:ml-32 space-y-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#0085CB] group-hover:scale-125 transition-transform" />

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="font-mono text-sm font-bold text-[#0085CB] md:-ml-28 w-20 shrink-0">
                  {item.year}
                </span>

                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-xs flex-1 space-y-1.5">
                  <h3 className="text-base font-bold text-[#0B1120]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#565E74] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Next Steps */}
      <section className="py-16 bg-[#0B1120] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Experience Our Academy Firsthand
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mx-auto">
            Schedule an in-person tour of our CAD labs, 3D printing bay, and electroforming research tanks in Mumbai.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('get-in-touch')}
              className="px-6 py-3 bg-[#0085CB] hover:bg-[#0284C7] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Book a Studio Visit
            </button>
            <button
              onClick={onOpenEnquireModal}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-lg transition-colors border border-slate-700 cursor-pointer"
            >
              Enquire Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
