import React, { useState } from 'react';
import { CourseData, NavPage } from '../types';
import { 
  CheckCircle2, 
  Clock, 
  Award, 
  BookOpen, 
  ArrowRight, 
  Download, 
  ChevronDown, 
  ChevronUp,
  Cpu, 
  ShieldCheck, 
  Briefcase,
  Layers,
  Sparkles
} from 'lucide-react';

interface CourseDetailViewProps {
  course: CourseData;
  onNavigate: (page: NavPage) => void;
  onOpenEnquireModal: (courseKey: string) => void;
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({
  course,
  onNavigate,
  onOpenEnquireModal
}) => {
  const [expandedModule, setExpandedModule] = useState<string | null>(course.modules[0]?.number || null);
  const [syllabusDownloaded, setSyllabusDownloaded] = useState(false);

  const toggleModule = (moduleNum: string) => {
    setExpandedModule(expandedModule === moduleNum ? null : moduleNum);
  };

  const handleDownloadSyllabus = () => {
    setSyllabusDownloaded(true);
    setTimeout(() => setSyllabusDownloaded(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-[#0B1120] text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb path */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <span>/</span>
            <span>What we offer</span>
            <span>/</span>
            <span className="text-[#38BDF8] truncate max-w-xs">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#0085CB] text-white text-xs font-bold rounded">
                  {course.level} Level
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-sky-300 text-xs font-mono rounded">
                  {course.duration}
                </span>
                <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold rounded flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  {course.certification}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white text-balance">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {course.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenEnquireModal(course.pageKey)}
                  className="px-6 py-3.5 bg-[#0085CB] hover:bg-[#0284C7] active:bg-[#006195] text-white font-semibold text-xs rounded-lg shadow transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Enquire &amp; Reserve Workstation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleDownloadSyllabus}
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-lg border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>{syllabusDownloaded ? 'Syllabus PDF Downloaded!' : 'Download Complete Syllabus'}</span>
                </button>
              </div>

              {syllabusDownloaded && (
                <div className="p-3 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-lg text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Official Syllabus PDF downloaded with week-by-week module specifications and prerequisites.</span>
                </div>
              )}
            </div>

            {/* Right Course Visual */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
                <img
                  src={course.heroImage}
                  alt={course.title}
                  className="w-full h-auto aspect-4/3 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                  <div className="flex justify-between">
                    <span>Training Mode:</span>
                    <span className="text-white font-medium">{course.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Batch Starts:</span>
                    <span className="text-amber-400 font-medium">{course.batchSchedule}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Core Curriculum Highlights & Prerequisites */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Overview and Modules */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-[#0B1120]">
                Course Overview &amp; Technical Scope
              </h2>
              <p className="text-sm text-[#565E74] leading-relaxed">
                {course.overview}
              </p>

              <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
                  Key Technical Competencies Acquired
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#0B1120]">
                  {course.coreHighlights.map((high, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0085CB] shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Comprehensive Modules Breakdown (Accordion) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
                    Structured Syllabus
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B1120]">
                    Module-by-Module Breakdown
                  </h2>
                </div>
                <span className="text-xs text-[#565E74]">
                  {course.modules.length} Detailed Modules
                </span>
              </div>

              <div className="space-y-3">
                {course.modules.map((mod) => {
                  const isExpanded = expandedModule === mod.number;
                  return (
                    <div
                      key={mod.number}
                      className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleModule(mod.number)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <span className="w-8 h-8 rounded-lg bg-[#EFF4FF] text-[#006195] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                            {mod.number}
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-sm font-bold text-[#0B1120] truncate">
                              {mod.title}
                            </h3>
                            <p className="text-xs text-[#565E74] mt-0.5 line-clamp-1">
                              {mod.summary}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="hidden sm:inline text-xs text-[#565E74] font-mono">
                            {mod.duration}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#0085CB]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-5 pt-1 border-t border-[#E2E8F0] bg-[#F8FAFC]">
                          <div className="text-xs font-semibold text-slate-700 mb-2">
                            Specific Topics &amp; Practical Exercises:
                          </div>
                          <ul className="space-y-2 text-xs text-[#565E74]">
                            {mod.topics.map((topic, tidx) => (
                              <li key={tidx} className="flex items-start gap-2">
                                <span className="text-[#0085CB] font-bold">›</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Capstone Project Card */}
            <div className="bg-[#EFF4FF] p-6 rounded-xl border border-[#CDE5FF] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006195]">
                <Layers className="w-4 h-4 text-[#0085CB]" />
                <span>Industry Capstone Portfolio Project</span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1120]">
                {course.capstoneProject}
              </h3>
              <p className="text-xs text-[#565E74] leading-relaxed">
                Every student completes a fully validated, casting-ready capstone portfolio. Master files are 3D printed in our laboratory on high-resolution DLP resin printers to verify sprue feed, metal shrinkage allowances, and stone seat tolerances before graduation.
              </p>
            </div>

          </div>

          {/* Right Column: Meta details, Software tools, and Fast Action */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Workstation Enrollment Box */}
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm space-y-5 sticky top-24">
              <div className="border-b border-[#E2E8F0] pb-4">
                <span className="text-[11px] font-bold text-[#0085CB] uppercase tracking-wider">
                  Reserve Your Seat
                </span>
                <h3 className="text-lg font-bold text-[#0B1120] mt-1">
                  Ready to Start?
                </h3>
                <p className="text-xs text-[#565E74] mt-1">
                  Classes capped at 8 participants to ensure 1-on-1 instructor screen review.
                </p>
              </div>

              <div className="space-y-3 text-xs text-[#565E74]">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span>Prerequisites:</span>
                  <span className="font-semibold text-slate-800 text-right max-w-[180px] truncate" title={course.prerequisites}>
                    {course.prerequisites}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span>Hardware Provided:</span>
                  <span className="font-semibold text-slate-800">Dedicated CAD Workstation</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span>3D Print Testing:</span>
                  <span className="font-semibold text-emerald-600">Included (DLP Resin Casts)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span>Recruiter Placement:</span>
                  <span className="font-semibold text-[#0085CB]">Lifetime Alumni Network</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onOpenEnquireModal(course.pageKey)}
                  className="w-full py-3 bg-[#0085CB] hover:bg-[#0284C7] active:bg-[#006195] text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire for Next Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigate('why-choose-us')}
                  className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-[#0B1120] font-medium text-xs rounded-lg transition-colors border border-slate-200"
                >
                  Compare with Generic Courses
                </button>
              </div>

              {/* Software Tools Mastered */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
                <h4 className="text-xs font-bold text-[#0B1120] uppercase tracking-wider">
                  Software &amp; Tools Mastered
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {course.software.map((sw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#0B1120] rounded"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Outcomes */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
                <h4 className="text-xs font-bold text-[#0B1120] uppercase tracking-wider">
                  Target Career Roles
                </h4>
                <ul className="space-y-1.5 text-xs text-[#565E74]">
                  {course.careerOutcomes.map((role, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-[#0085CB] shrink-0" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
