import React from 'react';
import { NavPage } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  Award, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  ArrowRight,
  Zap,
  Sliders,
  Sparkles
} from 'lucide-react';

interface WhyChooseUsViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenEnquireModal: () => void;
}

export const WhyChooseUsView: React.FC<WhyChooseUsViewProps> = ({ onNavigate, onOpenEnquireModal }) => {
  const comparisonItems = [
    {
      feature: 'Curriculum Accreditation',
      generic: 'Unverified generic 3D graphics tutorials',
      samarth: 'Robert McNeel Authorized Rhinoceros 3D Training Specialist with official diplomas'
    },
    {
      feature: 'Production Realism',
      generic: 'Digital renders that often fail in casting due to micro-holes',
      samarth: 'Watertight NURBS models with calibrated casting shrinkage, sprue feeds, and stone tolerances'
    },
    {
      feature: 'Workstation Access',
      generic: 'Shared desks or remote video recordings without hardware',
      samarth: 'Dedicated high-performance RTX workstation for every student in physical cohort'
    },
    {
      feature: '3D Printing & Bench Testing',
      generic: 'Zero physical prototyping or testing',
      samarth: 'High-res DLP resin 3D printing in our in-house laboratory for every module capstone'
    },
    {
      feature: 'Reverse Engineering Metrology',
      generic: 'Not offered or basic polygon sculpting only',
      samarth: 'Structured blue-light 3D laser scan to NURBS resurfacing with 0.02mm deviation check'
    },
    {
      feature: 'Electroforming Technology',
      generic: 'Not available (strictly solid casting theory)',
      samarth: 'Proprietary chemical bath hollow jewelry workflows saving up to 70% gold mass'
    },
    {
      feature: 'Placement & Industry Network',
      generic: 'Basic job board links with no direct recruitment',
      samarth: '98.4% verified placement across fine jewelry export houses and retail jewelry giants'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Header */}
      <section className="bg-[#0B1120] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085CB]/20 border border-[#0085CB]/40 rounded text-xs font-bold text-[#38BDF8]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Engineered for Production Reality · Not Just Screen Art</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Why Choose Samarth Ventures
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We do not treat jewelry CAD as a generic computer graphics course. Every millimeter you model is calibrated for precious metals, structural stone seats, casting porosity elimination, and international manufacturing standards.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
            The Academy Advantage
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B1120]">
            Six Pillars That Set Our Engineers Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white p-7 rounded-xl border border-[#E2E8F0] space-y-3.5 shadow-xs hover:border-[#0085CB] hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] text-[#0085CB] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1120]">
              Authorized Rhinoceros 3D Specialist
            </h3>
            <p className="text-xs text-[#565E74] leading-relaxed">
              Curriculum authorized and aligned with Robert McNeel &amp; Associates. You graduate with recognized global diplomas respected by export houses across Antwerp, Dubai, Hong Kong, and Mumbai.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-7 rounded-xl border border-[#E2E8F0] space-y-3.5 shadow-xs hover:border-[#0085CB] hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] text-[#0085CB] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1120]">
              Dedicated Workstation Hardware
            </h3>
            <p className="text-xs text-[#565E74] leading-relaxed">
              No split screen desks or waiting turns. Each student operates a dedicated high-performance workstation loaded with licensed Rhinoceros 8, KeyShot 11 Pro, and calibrated color-accurate 4K displays.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-7 rounded-xl border border-[#E2E8F0] space-y-3.5 shadow-xs hover:border-[#0085CB] hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] text-[#0085CB] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1120]">
              In-House Resin 3D Printing &amp; Casting Tests
            </h3>
            <p className="text-xs text-[#565E74] leading-relaxed">
              Test your designs in physical resin. We 3D print student models on industrial DLP printers to inspect prong thickness, snap-fit tolerances, and weight estimates prior to physical gold/silver casting.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-7 rounded-xl border border-[#E2E8F0] space-y-3.5 shadow-xs hover:border-[#0085CB] hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] text-[#0085CB] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1120]">
              Proprietary Electroforming Technology
            </h3>
            <p className="text-xs text-[#565E74] leading-relaxed">
              The only academy in the region with an integrated chemical electroforming facility. Learn how to engineer hollow high-carat gold jewelry with up to 70% weight reduction—an indispensable commercial skill.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="bg-white p-7 rounded-xl border border-[#E2E8F0] space-y-3.5 shadow-xs hover:border-[#0085CB] hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] text-[#0085CB] flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1120]">
              Laser Metrology &amp; Reverse Engineering
            </h3>
            <p className="text-xs text-[#565E74] leading-relaxed">
              Acquire rare reverse-engineering capabilities using optical 3D scanners. Reconstruct vintage heritage jewels and handcrafted molds into flawless parametric CAD assets with 0.02mm deviation limits.
            </p>
          </div>

          {/* Pillar 6 */}
          <div className="bg-white p-7 rounded-xl border border-[#E2E8F0] space-y-3.5 shadow-xs hover:border-[#0085CB] hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] text-[#0085CB] flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1120]">
              98.4% Industry Placement Network
            </h3>
            <p className="text-xs text-[#565E74] leading-relaxed">
              Our graduates are recruited by premier domestic and international fine jewelry conglomerates. Direct portfolio presentations, mock technical interviews, and lifetime career advisory support.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Detailed Comparison Matrix */}
      <section className="py-16 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
              Direct Comparison
            </div>
            <h2 className="text-3xl font-extrabold text-[#0B1120]">
              Generic Training Institutes vs Samarth Ventures
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-xs uppercase tracking-wider text-slate-500">
                  <th className="py-4 px-4 font-semibold w-1/4">Evaluation Dimension</th>
                  <th className="py-4 px-4 font-semibold w-1/3 text-slate-400">Typical Generic Computer Center</th>
                  <th className="py-4 px-4 font-bold text-[#0085CB] w-5/12 bg-[#EFF4FF]/50 rounded-t-lg">
                    Samarth Ventures Precision Academy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-xs">
                {comparisonItems.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#0B1120]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-500 flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.generic}</span>
                    </td>
                    <td className="py-4 px-4 text-[#0B1120] font-medium bg-[#EFF4FF]/30">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0085CB] shrink-0 mt-0.5" />
                        <span>{row.samarth}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 bg-[#0085CB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Elevate Your Jewelry Career with True Industrial Rigor
          </h2>
          <p className="text-sm text-sky-100 max-w-xl mx-auto">
            Take the first step towards certified mastery in Rhinoceros 3D modeling and advanced jewellery production.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenEnquireModal}
              className="px-6 py-3.5 bg-white text-[#0085CB] hover:bg-slate-50 font-bold text-xs rounded-lg shadow transition-colors cursor-pointer"
            >
              Request Syllabus &amp; Fee Details
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-3.5 bg-[#006195] hover:bg-[#004a74] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-sky-400/30"
            >
              Browse All Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
