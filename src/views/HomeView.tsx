import React from 'react';
import { NavPage } from '../types';
import { COURSES } from '../data/courses';
import { KEY_METRICS, TESTIMONIALS } from '../data/company';
import { CADViewer } from '../components/CADViewer';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Hammer, 
  Zap, 
  Download,
  Clock,
  Compass
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenEnquireModal: (courseKey?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenEnquireModal }) => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-[#E2E8F0] pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Subtle CAD geometric background grid */}
        <div className="absolute inset-0 cad-grid-pattern opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Value Proposition & Copy */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Regional & Trust Identifier */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFF4FF] border border-[#CDE5FF] rounded-md text-xs font-semibold text-[#006195]">
                <Award className="w-3.5 h-3.5 text-[#0085CB]" />
                <span>Authorized Rhinoceros 3D Jewelry Training Academy &amp; Electroforming Facility</span>
              </div>

              {/* Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1120] leading-[1.12] text-balance">
                Precision CAD Craftsmanship for the Global Jewelry Industry.
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-[#565E74] leading-relaxed max-w-2xl">
                Master production-grade Rhinoceros 3D jewelry modeling, 3D laser-scan reverse engineering, and scientific hollow electroforming. Bridging centuries of master goldsmith artistry with aerospace-grade digital engineering.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenEnquireModal('course-advanced')}
                  className="px-6 py-3.5 bg-[#0085CB] hover:bg-[#0284C7] active:bg-[#006195] text-white font-semibold text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-md"
                >
                  <span>Explore Courses &amp; Enquire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('why-choose-us')}
                  className="px-6 py-3.5 bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] text-[#0B1120] font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Why Choose Samarth</span>
                </button>
              </div>

              {/* Proof badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#565E74] border-t border-[#E2E8F0]/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0085CB]" />
                  <span>Robert McNeel Standards</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0085CB]" />
                  <span>100% Practical Bench Tests</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0085CB]" />
                  <span>Proprietary Electroforming R&amp;D</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Fidelity Hero Image Asset */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-xl group bg-[#0F172A]">
                <img
                  src="/src/assets/images/hero_jewellery_cad_1791375506977.jpg"
                  alt="Rhinoceros 3D Jewelry CAD Modeling at Samarth Ventures"
                  className="w-full h-auto aspect-16/11 object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-xs font-mono text-sky-300 mb-1">
                    <span>Rhino 8 · NURBS G2 Curvature</span>
                    <span className="text-amber-400 font-semibold">18K Castable Model</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Micro-prong diamond pavé assembly with parametric weight control.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Metrics Strip (Quantitative Rigor) */}
      <section className="bg-[#0B1120] text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {KEY_METRICS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#38BDF8] tracking-tight tabular-nums font-mono">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-normal">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Offer: Accredited Curriculum Suite */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB] mb-1">
                Curriculum Programs
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1120] tracking-tight">
                What We Offer: Industrial 3D CAD Specializations
              </h2>
            </div>
            <p className="text-sm text-[#565E74] max-w-md">
              Each curriculum is built on industry-standard casting protocols and Robert McNeel Rhinoceros specifications.
            </p>
          </div>

          {/* 4 Course Bento-Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(COURSES).map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:border-[#0085CB] hover:shadow-lg transition-all flex flex-col group"
              >
                {/* Course Header Banner */}
                <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                  <img
                    src={course.heroImage}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#0085CB] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {course.level}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono text-sky-300">
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#0B1120] leading-snug group-hover:text-[#0085CB] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-[#565E74] leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2 border-t border-[#E2E8F0] text-xs text-[#565E74]">
                    {course.coreHighlights.slice(0, 3).map((high, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0085CB] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{high}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-[#E2E8F0]">
                    <button
                      onClick={() => onNavigate(course.pageKey)}
                      className="text-xs font-bold text-[#0085CB] hover:text-[#0284C7] flex items-center gap-1.5 group/link cursor-pointer"
                    >
                      <span>Explore Full Syllabus ({course.modules.length} Modules)</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenEnquireModal(course.pageKey)}
                      className="px-3.5 py-1.5 text-xs font-semibold bg-[#EFF4FF] hover:bg-[#0085CB] text-[#006195] hover:text-white rounded-md transition-colors cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Interactive CAD Model Viewport Simulation Showcase */}
      <section className="py-20 bg-[#0B1120] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-950/80 border border-sky-800/60 rounded-md text-xs font-semibold text-sky-300">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Direct Studio CAD Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Interactive Rhinoceros 3D Viewport
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Test drive the real-time NURBS geometry, stone pavé alignment, and alloy weight calculation taught inside our workstation classrooms.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <CADViewer />
          </div>

        </div>
      </section>

      {/* 5. Electroforming R&D Highlight Banner */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0B1120] to-[#1E293B] rounded-2xl p-8 sm:p-12 text-white border border-slate-700 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Proprietary Manufacturing Technology</span>
                </div>

                <h3 className="text-3xl font-extrabold tracking-tight">
                  Electroforming: Up to 70% Gold Weight Savings
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Discover how our chemical laboratory and specialized hollow CAD workflows empower fine jewelry manufacturers to produce grand bridal statement pieces with dramatically reduced precious metal mass while preserving rigid surface hardness (120–165 HV).
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => onNavigate('electroforming')}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>View Scientific Process &amp; Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenEnquireModal('electroforming-consult')}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg transition-colors border border-slate-600 cursor-pointer"
                  >
                    <span>Book B2B Consultation</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg">
                  <img
                    src="/src/assets/images/electroforming_lab_1791375539313.jpg"
                    alt="Electroforming laboratory at Samarth Ventures"
                    className="w-full h-auto aspect-16/10 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Attributable Industry Testimonials */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
              Alumni &amp; Industry Impact
            </div>
            <h2 className="text-3xl font-extrabold text-[#0B1120]">
              Endorsed by Master Craftsmen &amp; Fine Jewelry Manufacturers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-4"
              >
                <p className="text-xs text-[#565E74] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-[#E2E8F0] space-y-1">
                  <div className="text-xs font-bold text-[#0B1120]">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-[#006195] font-medium">
                    {item.role} · {item.company}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Completed: {item.courseCompleted}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section className="py-16 bg-[#0085CB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Master Production 3D Jewelry CAD?
          </h2>
          <p className="text-sm text-sky-100 max-w-xl mx-auto">
            Join our upcoming cohort or schedule a free 1-on-1 studio tour and software demonstration at our Mumbai Center of Excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenEnquireModal()}
              className="px-6 py-3.5 bg-white text-[#0085CB] hover:bg-slate-50 font-bold text-xs rounded-lg shadow transition-colors cursor-pointer"
            >
              Enquire for Upcoming Cohort
            </button>
            <button
              onClick={() => onNavigate('get-in-touch')}
              className="px-6 py-3.5 bg-[#006195] hover:bg-[#004a74] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-sky-400/30"
            >
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
