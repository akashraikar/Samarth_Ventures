import React, { useState } from 'react';
import { NavPage } from '../types';
import { ELECTROFORMING_DATA } from '../data/company';
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Sliders, 
  Download,
  Calculator,
  FlaskConical,
  Sparkles
} from 'lucide-react';

interface ElectroformingViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenEnquireModal: (courseKey?: string) => void;
}

export const ElectroformingView: React.FC<ElectroformingViewProps> = ({
  onNavigate,
  onOpenEnquireModal
}) => {
  // Interactive Gold Weight Savings Calculator
  const [solidWeightInput, setSolidWeightInput] = useState<number>(45);
  const [goldRatePerGram, setGoldRatePerGram] = useState<number>(7500);
  const [savingsRatio, setSavingsRatio] = useState<number>(65);

  const electroformedWeight = Math.round(solidWeightInput * (1 - savingsRatio / 100) * 10) / 10;
  const weightSaved = Math.round((solidWeightInput - electroformedWeight) * 10) / 10;
  const solidCost = Math.round(solidWeightInput * goldRatePerGram);
  const electroformedCost = Math.round(electroformedWeight * goldRatePerGram);
  const costSavings = solidCost - electroformedCost;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Scientific Hero Header */}
      <section className="bg-[#0B1120] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
                <FlaskConical className="w-3.5 h-3.5 text-amber-400" />
                <span>Advanced Materials &amp; Chemical Metallurgy R&amp;D</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white text-balance">
                {ELECTROFORMING_DATA.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {ELECTROFORMING_DATA.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenEnquireModal('electroforming-consult')}
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg shadow transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Book B2B Technical Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('calculator-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-lg border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-sky-400" />
                  <span>Interactive Savings Calculator</span>
                </button>
              </div>
            </div>

            {/* Right Facility Graphic */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
                <img
                  src="/src/assets/images/electroforming_lab_1791375539313.jpg"
                  alt="Electroforming laboratory baths and gold components at Samarth Ventures"
                  className="w-full h-auto aspect-16/10 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-slate-900/90 text-xs text-slate-400 flex items-center justify-between border-t border-slate-800 font-mono">
                  <span>Tank Chemistry: Sulphite / Gold Bath</span>
                  <span className="text-amber-400 font-bold">18K / 22K / 24K</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Procedural Step-by-Step Flow */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
            Manufacturing Methodology
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B1120]">
            The 5-Step Procedural Electroforming Pipeline
          </h2>
          <p className="text-xs text-[#565E74]">
            From CAD hollow core architecture to chemical evacuation and final surface temper.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {ELECTROFORMING_DATA.processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-5 rounded-xl border border-[#E2E8F0] space-y-3 relative flex flex-col justify-between shadow-xs hover:border-[#0085CB] transition-all group"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EFF4FF] text-[#0085CB] font-mono font-bold text-xs flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-[#0B1120] leading-snug group-hover:text-[#0085CB] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#565E74] leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] text-[#006195] font-semibold">
                <span>Phase {step.step}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Scientific Parameter Specification Table */}
      <section className="py-16 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
              Scientific Data Layer
            </div>
            <h2 className="text-3xl font-extrabold text-[#0B1120]">
              Certified Chemical &amp; Metallurgical Specifications
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-xs uppercase tracking-wider text-slate-500 bg-slate-50">
                  <th className="py-3 px-4 font-semibold">Technical Parameter</th>
                  <th className="py-3 px-4 font-bold text-[#0085CB]">Engineered Value</th>
                  <th className="py-3 px-4 font-semibold text-slate-500">Commercial / Structural Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-xs">
                {ELECTROFORMING_DATA.specifications.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#0B1120]">
                      {row.param}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#0085CB]">
                      {row.value}
                    </td>
                    <td className="py-3.5 px-4 text-[#565E74]">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 4. Interactive Gold Weight & Capital Savings Calculator */}
      <section id="calculator-section" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#CBD5E1] p-8 sm:p-10 shadow-lg space-y-8">
            <div className="border-b border-[#E2E8F0] pb-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                <Calculator className="w-4 h-4 text-amber-500" />
                <span>Commercial Feasibility Tool</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B1120]">
                Interactive Gold Weight &amp; Cost Savings Simulator
              </h2>
              <p className="text-xs text-[#565E74] mt-1">
                Estimate raw material capital reduction when switching high-volume bridal pieces from solid cast to precision electroforming.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Slider 1: Solid Weight */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-[#0B1120]">
                  <span>Original Cast Weight:</span>
                  <span className="font-mono text-[#0085CB] font-bold">{solidWeightInput} g</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="120"
                  step="1"
                  value={solidWeightInput}
                  onChange={(e) => setSolidWeightInput(Number(e.target.value))}
                  className="w-full accent-[#0085CB] cursor-pointer"
                />
                <span className="text-[11px] text-slate-400 block">Range: 15g to 120g statement jewelry</span>
              </div>

              {/* Slider 2: Gold Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-[#0B1120]">
                  <span>Gold Rate (per g):</span>
                  <span className="font-mono text-[#0085CB] font-bold">₹{goldRatePerGram.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="6000"
                  max="9500"
                  step="100"
                  value={goldRatePerGram}
                  onChange={(e) => setGoldRatePerGram(Number(e.target.value))}
                  className="w-full accent-[#0085CB] cursor-pointer"
                />
                <span className="text-[11px] text-slate-400 block">Prevailing 22K/24K market benchmark</span>
              </div>

              {/* Slider 3: Target Weight Reduction */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-[#0B1120]">
                  <span>Hollow Weight Reduction:</span>
                  <span className="font-mono text-emerald-600 font-bold">{savingsRatio}%</span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="70"
                  step="1"
                  value={savingsRatio}
                  onChange={(e) => setSavingsRatio(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <span className="text-[11px] text-slate-400 block">Up to 70% safe structural hollow limit</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="bg-[#0B1120] text-white p-6 rounded-xl border border-slate-800 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
                <div className="space-y-1 sm:px-2">
                  <div className="text-xs text-slate-400">Solid Casting Gold Cost</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-slate-200">
                    ₹{solidCost.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">{solidWeightInput} grams</div>
                </div>

                <div className="space-y-1 sm:px-2 pt-3 sm:pt-0">
                  <div className="text-xs text-amber-300">Electroformed Gold Cost</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">
                    ₹{electroformedCost.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-amber-300/80 font-mono">{electroformedWeight} grams ({savingsRatio}% lighter)</div>
                </div>

                <div className="space-y-1 sm:px-2 pt-3 sm:pt-0">
                  <div className="text-xs text-emerald-400">Net Capital Saved / Piece</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                    ₹{costSavings.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-emerald-500 font-mono">{weightSaved}g raw gold liberated</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <span>*Calculations exclude bath replenishment surcharge and surface polishing allowances.</span>
                <button
                  onClick={() => onOpenEnquireModal('electroforming-consult')}
                  className="text-amber-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Full Chemical Plant Feasibility Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 bg-[#0085CB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Deploy Electroforming in Your Jewelry Manufacturing Facility
          </h2>
          <p className="text-sm text-sky-100 max-w-xl mx-auto">
            We provide turnkey setup consulting, chemical formula standardization, and CAD hollow core team training.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenEnquireModal('electroforming-consult')}
              className="px-6 py-3.5 bg-white text-[#0085CB] hover:bg-slate-50 font-bold text-xs rounded-lg shadow transition-colors cursor-pointer"
            >
              Schedule Turnkey Lab Consultation
            </button>
            <button
              onClick={() => onNavigate('get-in-touch')}
              className="px-6 py-3.5 bg-[#006195] hover:bg-[#004a74] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-sky-400/30"
            >
              Contact Engineering Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
