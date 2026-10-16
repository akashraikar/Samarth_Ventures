import React, { useState } from "react";
import {
  Boxes,
  Wrench,
  Zap,
  Flame,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Atom,
  ShieldCheck,
  Check,
  AlertCircle,
  HelpCircle,
  FileText,
  Layers,
  Droplets,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
} from "lucide-react";

interface ElectroformingFlowModelProps {
  onOpenEnquireModal?: (courseKey?: string) => void;
}

export const ElectroformingFlowModel: React.FC<
  ElectroformingFlowModelProps
> = ({ onOpenEnquireModal }) => {
  // Interactive 5-Step Jewelry Manufacturing Process State
  const [activeMfgStep, setActiveMfgStep] = useState<number>(1);
  const [selectedMandrelMaterial, setSelectedMandrelMaterial] = useState<
    "fusible" | "zinc" | "wax"
  >("fusible");
  const [step1SubView, setStep1SubView] = useState<
    "materials" | "matrix" | "siliconeMold"
  >("materials");
  const [partingLineMethod, setPartingLineMethod] = useState<"manual" | "bulk">(
    "manual",
  );
  const [eliminationEmptyingMethod, setEliminationEmptyingMethod] = useState<
    "peg" | "hot_air"
  >("peg");
  const [strippingAcidType, setStrippingAcidType] = useState<
    "fusible" | "zinc"
  >("fusible");
  const [heatTreatmentView, setHeatTreatmentView] = useState<
    "after" | "before"
  >("after");
  const [solderingMethod, setSolderingMethod] = useState<
    "manual" | "automatic"
  >("manual");

  // === START OF NEW INTERACTIVE JEWELRY MANUFACTURING SECTION ===
  return (
    <section
      className="py-20 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden"
      id="jewelry-manufacturing-process"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-xs font-bold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Complete Metallurgical Lifecycle Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Jewellery Manufacturing: The 5-Step Electroforming Model
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From sacrificial mandrel core fabrication to 500°C crystal lattice
            thermal stabilization, explore the exact industrial protocol
            governing hollow gold jewelry creation.
          </p>
        </div>

        {/* Step Navigation Bar / Stepper */}
        <div className="bg-slate-950/80 p-2 sm:p-3 rounded-2xl border border-slate-800 shadow-xl mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              {
                num: 1,
                title: "Mandrel Manufacturing",
                subtitle: "Core Conception & Molding",
                icon: Boxes,
              },
              {
                num: 2,
                title: "Mandrel Preparation",
                subtitle: "Polishing, Racking & Cu Plate",
                icon: Wrench,
              },
              {
                num: 3,
                title: "Electroforming",
                subtitle: "Double Machine Deposition",
                icon: Zap,
              },
              {
                num: 4,
                title: "Mandrel Elimination",
                subtitle: "Drilling, PEG & Acid Strip",
                icon: Flame,
              },
              {
                num: 5,
                title: "Finishing of Pieces",
                subtitle: "500°C Annealing & Polish",
                icon: Sparkles,
              },
            ].map((step) => {
              const IconComponent = step.icon;
              const isActive = activeMfgStep === step.num;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveMfgStep(step.num)}
                  className={`text-left p-3 rounded-xl transition-all flex flex-col justify-between cursor-pointer border ${
                    isActive
                      ? "bg-linear-to-br from-amber-500/20 to-sky-500/10 border-amber-500/50 text-white shadow-lg shadow-amber-500/5"
                      : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-6 h-6 rounded-md font-mono text-xs font-bold flex items-center justify-center ${
                        isActive
                          ? "bg-amber-500 text-slate-950"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      0{step.num}
                    </span>
                    <IconComponent
                      className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-500"}`}
                    />
                  </div>
                  <div>
                    <div
                      className={`text-xs font-bold leading-tight ${isActive ? "text-amber-300" : "text-slate-200"}`}
                    >
                      {step.title}
                    </div>
                    <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                      {step.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Progress Line */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between px-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-mono text-amber-400 font-bold">
                Step {activeMfgStep} of 5:
              </span>
              <span className="text-slate-200 font-medium">
                {activeMfgStep === 1 &&
                  "Mandrel Manufacturing (Sacrificial Core Architecture)"}
                {activeMfgStep === 2 &&
                  "Mandrel Preparation (Surface Refinement & Racking Science)"}
                {activeMfgStep === 3 &&
                  "Electroforming (Double Machine Precision Gold Deposition)"}
                {activeMfgStep === 4 &&
                  "Mandrel Elimination (Core Evacuation & Closed-Loop Recovery)"}
                {activeMfgStep === 5 &&
                  "Finishing of the Pieces (Thermal Annealing, Soldering & Luster)"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                disabled={activeMfgStep === 1}
                onClick={() =>
                  setActiveMfgStep((prev) => Math.max(1, prev - 1))
                }
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed rounded text-[11px] font-semibold text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev Step</span>
              </button>
              <button
                disabled={activeMfgStep === 5}
                onClick={() =>
                  setActiveMfgStep((prev) => Math.min(5, prev + 1))
                }
                className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed rounded text-[11px] font-bold text-slate-950 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Next Step</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* STEP 1: MANDREL MANUFACTURING */}
        {activeMfgStep === 1 && (
          <div className="space-y-8 animate-fadeIn">
            {/* Top Golden Axiom Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 font-mono text-xs font-bold rounded-md border border-amber-500/30">
                    Fundamental Axiom
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    1 Mandrel{" "}
                    <span className="text-amber-400 font-mono">➔</span> 1 Jewel
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  In hollow electroforming jewelry fabrication, each individual
                  jewelry piece demands its own sacrificial core mandrel. Unlike
                  hollow stamped tubing or lost-wax casting, the mandrel
                  provides the exact geometry onto which atomized gold
                  crystallizes, dictating internal geometry, dimensional
                  tolerance, and structural wall fidelity.
                </p>
              </div>
              <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
                <img
                  src="/src/assets/images/mandrel_manufacturing.jpg"
                  alt="Precision jewelry mandrel casting and silicone mold fabrication workshop"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-2.5 text-[11px] text-slate-400 font-mono bg-slate-950/90 border-t border-slate-800 flex justify-between">
                  <span>Molding: Centrifugal / Vacuum</span>
                  <span className="text-amber-400 font-semibold">
                    100% Geometry Match
                  </span>
                </div>
              </div>
            </div>

            {/* Mandrel Specifications: 4 Mandatory Pillars */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>
                  Mandrel Technical Specifications — What Defines a Good
                  Mandrel:
                </span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "As Conformal as Possible",
                    desc: "Must replicate the master CAD model with sub-micron fidelity, zero surface sinkage, and exact wall curves.",
                    icon: Atom,
                    badge: "High Precision",
                  },
                  {
                    title: "Good Electrical Conductivity",
                    desc: "Must ensure uniform cathode current density across deep crevices to prevent thin spots or burning.",
                    icon: Zap,
                    badge: "Low Resistance",
                  },
                  {
                    title: "Easy to Mold",
                    desc: "Fluid flow characteristics in silicone or caoutchouc molds under centrifugal force or vacuum pressure.",
                    icon: Boxes,
                    badge: "High Yield",
                  },
                  {
                    title: "Easily Removable",
                    desc: "Low melting point or acid-susceptible core that evacuates cleanly without etching the karat gold shell.",
                    icon: Flame,
                    badge: "Clean Evacuation",
                  },
                ].map((spec, i) => {
                  const SpecIcon = spec.icon;
                  return (
                    <div
                      key={i}
                      className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center">
                          <SpecIcon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {spec.badge}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold text-white">
                        {spec.title}
                      </h5>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {spec.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sub-View Navigation for Step 1 */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Interactive Mandrel Engineering Modules:
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setStep1SubView("materials")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      step1SubView === "materials"
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    Mandrel Materials (3 Alloys)
                  </button>
                  <button
                    onClick={() => setStep1SubView("matrix")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      step1SubView === "matrix"
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    Preparation Sequence Matrix
                  </button>
                  <button
                    onClick={() => setStep1SubView("siliconeMold")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      step1SubView === "siliconeMold"
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    Manufacturing the Silicone Mold (7 Stages)
                  </button>
                </div>
              </div>

              {/* Sub-view 1: Mandrel Materials */}
              {step1SubView === "materials" && (
                <div className="space-y-4">
                  {/* Material Selector Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        id: "fusible",
                        name: "Fusible Alloys",
                        comp: "42% Sn, 58% Bi",
                        tm: "138°C",
                        share: "90% of Production",
                      },
                      {
                        id: "zinc",
                        name: "Zinc Die Cast",
                        comp: "95% Zn, 5% Al/Cu",
                        tm: "400°C",
                        share: "Precision / 14K Specialist",
                      },
                      {
                        id: "wax",
                        name: "Specialty Waxes",
                        comp: "Wax Formulation",
                        tm: "65°C",
                        share: "Ultra-Fine Surface Finish",
                      },
                    ].map((mat) => (
                      <button
                        key={mat.id}
                        onClick={() =>
                          setSelectedMandrelMaterial(mat.id as any)
                        }
                        className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                          selectedMandrelMaterial === mat.id
                            ? "bg-slate-950 border-amber-500 text-white ring-1 ring-amber-500/50 shadow-lg"
                            : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white">
                            {mat.name}
                          </span>
                          <span className="font-mono text-[11px] text-amber-400 font-bold">
                            {mat.tm}
                          </span>
                        </div>
                        {/* <div className="text-[11px] text-slate-400 font-mono">
                          {mat.comp}
                        </div> */}
                        <div className="text-[10px] text-sky-400 mt-2 font-semibold">
                          {mat.share}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Detailed Card for Selected Material */}
                  {selectedMandrelMaterial === "fusible" && (
                    <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/30 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                            Primary Industry Standard
                          </span>
                          <h5 className="text-lg font-bold text-white">
                            Fusible Alloy (Sn-Bi Eutectic)
                          </h5>
                        </div>
                        <div className="flex items-center gap-3 font-mono text-xs">
                          {/* <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-200">
                            Composition:{" "}
                            <strong className="text-amber-400">
                              42% Sn, 58% Bi
                            </strong>
                          </span> */}
                          <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-200">
                            Melting Point:{" "}
                            <strong className="text-amber-400">138°C</strong>
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-emerald-950/20 border border-emerald-900/50 p-4 rounded-xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                            <Check className="w-4 h-4" />
                            <span>Key Advantages</span>
                          </div>
                          <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                            <li>
                              <strong>Low melting point (138°C):</strong> Melts
                              safely below gold annealing temperatures,
                              preventing warpage during core evacuation.
                            </li>
                            <li>
                              <strong>Zero shrinkage:</strong> Bismuth expands
                              slightly upon solidifying, counteracting tin
                              contraction for crisp mold detail.
                            </li>
                            <li>
                              <strong>Centrifugal silicone casting:</strong>{" "}
                              High fluidity in silicone cakes at low energy
                              costs.
                            </li>
                          </ul>
                        </div>

                        <div className="bg-rose-950/20 border border-rose-900/50 p-4 rounded-xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                            <AlertCircle className="w-4 h-4" />
                            <span>Drawbacks &amp; Safeguards</span>
                          </div>
                          <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                            <li>
                              <strong>Copper sandwich required:</strong> A
                              protective copper undercoat and post-coat must
                              sandwich the alloy to avoid chemical contamination
                              of the gold layer.
                            </li>
                            <li>
                              <strong>Acid sensitivity:</strong> Dissolution by
                              HNO3 (nitric acid) tends to dissolve low carat
                              gold layers if not properly shielded.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                        <div className="p-1.5 bg-amber-500/20 rounded text-amber-400 shrink-0 mt-0.5">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-amber-300">
                            Technical Metallurgy Remarks:{" "}
                          </span>
                          This is the most used mandrel material globally
                          (accounting for over{" "}
                          <strong>
                            90% of industrial hollow jewelry production
                          </strong>
                          ). Specially suited for{" "}
                          <strong>18K gold and large sculptural designs</strong>{" "}
                          (statement bangles, hoop earrings, and heavy bridal
                          necklaces) where low thermal stress core drainage is
                          mandatory.
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedMandrelMaterial === "zinc" && (
                    <div className="bg-slate-950 p-6 rounded-2xl border border-sky-500/30 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <span className="text-[11px] font-mono text-sky-400 font-bold uppercase tracking-wider">
                            High Precision Specialist
                          </span>
                          <h5 className="text-lg font-bold text-white">
                            Zinc Die Cast (Zamak Formulation)
                          </h5>
                        </div>
                        <div className="flex items-center gap-3 font-mono text-xs">
                          {/* <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-200">
                            Composition:{" "}
                            <strong className="text-sky-400">
                              95% Zn, 5% Al/Cu
                            </strong>
                          </span> */}
                          <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-200">
                            Melting Point:{" "}
                            <strong className="text-sky-400">400°C</strong>
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-emerald-950/20 border border-emerald-900/50 p-4 rounded-xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                            <Check className="w-4 h-4" />
                            <span>Key Advantages</span>
                          </div>
                          <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                            <li>
                              <strong>Copper plating not required:</strong>{" "}
                              Eliminates copper sandwich steps, saving
                              processing time and bath overhead.
                            </li>
                            <li>
                              <strong>Safe acid dissolution:</strong> Readily
                              dissolves in Hydrochloric Acid (HCl), which{" "}
                              <em>
                                does not damage or etch low karat gold layers
                              </em>
                              .
                            </li>
                            <li>
                              <strong>High structural hardness:</strong> Resists
                              handling de-formation during bulk assembly.
                            </li>
                          </ul>
                        </div>

                        <div className="bg-rose-950/20 border border-rose-900/50 p-4 rounded-xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                            <AlertCircle className="w-4 h-4" />
                            <span>Drawbacks</span>
                          </div>
                          <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                            <li>
                              <strong>High melting point (400°C):</strong>{" "}
                              Thermal remelting cannot be used without annealing
                              the gold shell; requires chemical core
                              dissolution.
                            </li>
                            <li>
                              <strong>
                                Requires steel or high-spec silicone tooling:
                              </strong>{" "}
                              Centrifugal silicon molds require
                              thermal-resistant compounds.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                        <div className="p-1.5 bg-sky-500/20 rounded text-sky-400 shrink-0 mt-0.5">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-sky-300">
                            Technical Metallurgy Remarks:{" "}
                          </span>
                          Specially suited for{" "}
                          <strong>
                            14K gold formulations and ultra-precise mechanical
                            designs
                          </strong>{" "}
                          such as hollow watch cases, interlocking links, and
                          faceted geometric bezels where edge crispness and
                          chemical safety on low-karat alloys are paramount.
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedMandrelMaterial === "wax" && (
                    <div className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider">
                            Artisanal Prototype Medium
                          </span>
                          <h5 className="text-lg font-bold text-white">
                            Formulated Waxes
                          </h5>
                        </div>
                        <div className="flex items-center gap-3 font-mono text-xs">
                          <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-200">
                            Composition:{" "}
                            <strong className="text-purple-400">
                              Specialty Wax Formulation
                            </strong>
                          </span>
                          <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-200">
                            Melting Point:{" "}
                            <strong className="text-purple-400">65°C</strong>
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-emerald-950/20 border border-emerald-900/50 p-4 rounded-xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                            <Check className="w-4 h-4" />
                            <span>Key Advantages</span>
                          </div>
                          <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                            <li>
                              <strong>Very nice surface finish:</strong>{" "}
                              Provides unmatched glassy smooth, blemish-free
                              substrate textures directly from injection.
                            </li>
                            <li>
                              <strong>Ultra-low thermal evacuation:</strong>{" "}
                              Core evacuates completely at just 65°C using warm
                              water or gentle hot air.
                            </li>
                          </ul>
                        </div>

                        <div className="bg-rose-950/20 border border-rose-900/50 p-4 rounded-xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                            <AlertCircle className="w-4 h-4" />
                            <span>Drawbacks &amp; Requirements</span>
                          </div>
                          <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                            <li>
                              <strong>
                                Thick copper plating required (80–100µm):
                              </strong>{" "}
                              Because wax is non-metallic, an extensive copper
                              shell must be built.
                            </li>
                            <li>
                              <strong>Conductive lacquer mandatory:</strong>{" "}
                              Silver spray or conductive varnish must be
                              manually sprayed prior to plating.
                            </li>
                            <li>
                              <strong>Dissolution by organic solvents:</strong>{" "}
                              Solvent cleaning required for complete wax residue
                              evacuation.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                        <div className="p-1.5 bg-purple-500/20 rounded text-purple-400 shrink-0 mt-0.5">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-purple-300">
                            Technical Metallurgy Remarks:{" "}
                          </span>
                          Used primarily in specialized artisanal or highly
                          intricate micro-filigree applications where injection
                          into flexible caoutchouc rubber molds is required and
                          the 80–100µm structural copper layer is chemically
                          dissolved at later stages.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Sub-view 2: Preparation Sequence Comparison Matrix */}
              {step1SubView === "matrix" && (
                <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                  <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-400" />
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                        Preparation Sequence for the Various Mandrels
                      </h5>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      Industrial Comparison Matrix
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-slate-800 bg-slate-900/40 text-slate-400 font-mono uppercase text-[11px]">
                          <th className="py-3 px-4 font-semibold">Parameter</th>
                          <th className="py-3 px-4 font-bold text-amber-400 bg-amber-500/5 border-x border-slate-800">
                            Fusible Alloy
                          </th>
                          <th className="py-3 px-4 font-bold text-sky-400 border-r border-slate-800">
                            Zinc Die Cast
                          </th>
                          <th className="py-3 px-4 font-bold text-purple-400">
                            Wax
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-300">
                        {/* <tr className="hover:bg-slate-900/30">
                          <td className="py-3 px-4 font-semibold text-white">
                            Composition
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-amber-300 bg-amber-500/5 border-x border-slate-800">
                            Sn=42%, Bi=58%
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-sky-300 border-r border-slate-800">
                            Zn=95%, Al/Cu=5%
                          </td>
                          <td className="py-3 px-4 text-slate-400 italic">
                            Depending on supplier
                          </td>
                        </tr> */}
                        <tr className="hover:bg-slate-900/30">
                          <td className="py-3 px-4 font-semibold text-white">
                            Molding Method
                          </td>
                          <td className="py-3 px-4 bg-amber-500/5 border-x border-slate-800">
                            Centrifugation, Silicon mold
                          </td>
                          <td className="py-3 px-4 border-r border-slate-800">
                            Centrifugation, Silicon mold
                          </td>
                          <td className="py-3 px-4">
                            Injection, Caoutchouc mold
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-900/30">
                          <td className="py-3 px-4 font-semibold text-white">
                            Melting Point
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-amber-300 bg-amber-500/5 border-x border-slate-800">
                            138°C
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-sky-300 border-r border-slate-800">
                            400°C
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-purple-300">
                            65°C
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-900/30">
                          <td className="py-3 px-4 font-semibold text-white">
                            Surface Appearance
                          </td>
                          <td className="py-3 px-4 bg-amber-500/5 border-x border-slate-800 text-emerald-400 font-semibold">
                            Good
                          </td>
                          <td className="py-3 px-4 border-r border-slate-800 text-amber-400 font-semibold">
                            Middle
                          </td>
                          <td className="py-3 px-4 text-emerald-300 font-semibold">
                            Excellent
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-900/30">
                          <td className="py-3 px-4 font-semibold text-white">
                            Polishing Type
                          </td>
                          <td className="py-3 px-4 bg-amber-500/5 border-x border-slate-800">
                            Bulk (Tumbling)
                          </td>
                          <td className="py-3 px-4 border-r border-slate-800">
                            Bulk / Manual
                          </td>
                          <td className="py-3 px-4 text-slate-500">—</td>
                        </tr>
                        <tr className="hover:bg-slate-900/30">
                          <td className="py-3 px-4 font-semibold text-white">
                            Prior Electroforming
                          </td>
                          <td className="py-3 px-4 font-mono text-amber-300 bg-amber-500/5 border-x border-slate-800">
                            Cu or Ni undercoat
                          </td>
                          <td className="py-3 px-4 text-slate-500 border-r border-slate-800">
                            —
                          </td>
                          <td className="py-3 px-4 font-mono text-purple-300">
                            Metallisation with lacquer (80-100µm Cu)
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-900/30">
                          <td className="py-3 px-4 font-semibold text-white">
                            After Electroforming
                          </td>
                          <td className="py-3 px-4 font-mono text-amber-300 bg-amber-500/5 border-x border-slate-800">
                            Cu or Ni protective cap
                          </td>
                          <td className="py-3 px-4 text-slate-500 border-r border-slate-800">
                            —
                          </td>
                          <td className="py-3 px-4 text-slate-500">—</td>
                        </tr>
                        <tr className="hover:bg-slate-900/30">
                          <td className="py-3 px-4 font-semibold text-white">
                            Emptying Protocol
                          </td>
                          <td className="py-3 px-4 bg-amber-500/5 border-x border-slate-800 space-y-1">
                            <div>• Remelting (PEG / Hot air)</div>
                            <div>• Dissolution in HNO3</div>
                          </td>
                          <td className="py-3 px-4 border-r border-slate-800 space-y-1">
                            <div>• Dissolution in HCl</div>
                            <span className="text-[10px] text-sky-400">
                              (no remelting)
                            </span>
                          </td>
                          <td className="py-3 px-4 space-y-1">
                            <div>• Remelting (65°C)</div>
                            <div>• Dissolution in solvent</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Sub-view 3: Manufacturing the Silicone Mold Pipeline */}
              {step1SubView === "siliconeMold" && (
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                        Molding Tooling Architecture
                      </span>
                      <h5 className="text-lg font-bold text-white">
                        Manufacturing the Silicone Mold (7-Phase Workflow)
                      </h5>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      Centrifugal Disc Moulding Technique
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
                    {[
                      {
                        step: 1,
                        title: "Positioning of Dies",
                        desc: "Precise radial layout of master model dies around the central sprue axis.",
                      },
                      {
                        step: 2,
                        title: "Positioning of Silicon Cakes",
                        desc: "Layering unvulcanized disc cakes above and below the master dies.",
                      },
                      {
                        step: 3,
                        title: "Vulcanisation",
                        desc: "Controlled hydraulic heat-press curing at 160°C–180°C to permanently cross-link silicone.",
                      },
                      {
                        step: 4,
                        title: "Separation & Venting",
                        desc: "Separation of the 2 halves; manual cutting of feeding channels and air venting gates.",
                      },
                      {
                        step: 5,
                        title: "Centrifugal Casting",
                        desc: "Spin-casting molten fusible alloy (138°C) or zinc into rotating cavities at 800 RPM.",
                      },
                      {
                        step: 6,
                        title: "Automatic Equipment",
                        desc: "Automated temperature and clamping control for consistent mass cycle replication.",
                      },
                      {
                        step: 7,
                        title: "Opening of Moulds",
                        desc: "Demolding solidified mandrels with zero dimensional distortion, ready for preparation.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between space-y-2"
                      >
                        <div className="space-y-1.5">
                          <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold flex items-center justify-center">
                            {item.step}
                          </span>
                          <div className="text-xs font-bold text-white leading-tight">
                            {item.title}
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 2: MANDREL PREPARATION */}
        {activeMfgStep === 2 && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 font-mono text-xs font-bold rounded-md border border-amber-500/30">
                  Phase 02: Pre-Deposition Surface Engineering
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Mandrel Preparation: Parting Line Refinement &amp; Racking Art
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A raw cast mandrel carries casting flash and micro-parting
                  lines from the mold halves. If not eradicated with surgical
                  precision, these microscopic imperfections are amplified
                  exponentially during atomic gold electrodeposition.
                  Preparation ensures an optically flawless, perfectly
                  conductive substrate.
                </p>
              </div>
              <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
                <img
                  src="/src/assets/images/mandrel_preparation.jpg"
                  alt="Precision jewelry mandrel manual polishing and surface preparation"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-2.5 text-[11px] text-slate-400 font-mono bg-slate-950/90 border-t border-slate-800 flex justify-between">
                  <span>Prep: Deburring &amp; Copper Flash</span>
                  <span className="text-emerald-400 font-semibold">
                    Zero Surface Seams
                  </span>
                </div>
              </div>
            </div>

            {/* Module 1: Elimination of Parting Lines */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Surface Flaw Eradication
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    Elimination of Parting Lines (Manual vs. Bulk)
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPartingLineMethod("manual")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      partingLineMethod === "manual"
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    Manual Polishing
                  </button>
                  <button
                    onClick={() => setPartingLineMethod("bulk")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      partingLineMethod === "bulk"
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    Polishing in Bulk (Tumbling)
                  </button>
                </div>
              </div>

              {partingLineMethod === "manual" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-amber-300 uppercase">
                      Process Description
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Master artisans inspect each mandrel under 10x
                      stereo-magnification and use micro-abrasive rubber wheels,
                      Arkansas stones, and fine scotch-brite flex-shaft burs to
                      hand-dress the mold parting line.
                    </p>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-sky-300 uppercase">
                      Primary Application
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Mandatory for intricate, asymmetrical, or deep-relief
                      jewelry designs (filigree pendants, organic floral forms)
                      where centrifugal mechanical tumblers could round off
                      critical design edges.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-amber-300 uppercase">
                      Process Description
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Batch processing using centrifugal disc finishing machines
                      or high-frequency vibratory bowls loaded with
                      micro-porcelain or walnut shell media combined with
                      lubricating burnishing compounds.
                    </p>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-sky-300 uppercase">
                      Primary Application
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Ideal for large production runs of bangles, continuous
                      beads, and symmetrical hoop earrings. Allows hundreds of
                      fusible alloy or zinc mandrels to achieve uniform satin
                      smoothness simultaneously.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Module 2 & 3: Racking The Art & Copper Plating */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Racking: The Art! */}
              <div className="lg:col-span-7 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-6 rounded-2xl border border-amber-500/40 shadow-xl space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h4 className="text-lg font-extrabold text-white">
                    Racking: The Art!
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  In electroforming, mounting pieces on the cathode jig is not
                  merely mechanical fixture—it is widely celebrated as{" "}
                  <strong className="text-amber-300">"The Art"</strong> of
                  hollow manufacturing. An improperly racked mandrel results in
                  disastrous wall thickness variations, burning, or trapped gas
                  bubbles.
                </p>

                <div className="space-y-3 pt-1">
                  {[
                    {
                      title: "Zero-Mark Contact Placement",
                      desc: "Titanium spring hooks must contact the mandrel at hidden assembly junctures (e.g. solder tabs or clasp joints) to avoid visible contact blemishes.",
                    },
                    {
                      title: "Uniform Current Density & Anti-Shielding",
                      desc: 'Spacing between mandrels must prevent electrical "shadowing" where one piece blocks the uniform electrostatic field from reaching its neighbor.',
                    },
                    {
                      title: "Hydrogen Bubble Escape Vector",
                      desc: "The orientation must guarantee that hydrogen gas micro-bubbles naturally rise and evacuate without lodging in concave hollows (which causes fatal pinhole voids).",
                    },
                  ].map((art, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1"
                    >
                      <div className="font-bold text-amber-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>{art.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 pl-5">
                        {art.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Copper Plating for Protection & Surface Appearance */}
              <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                    <Layers className="w-4 h-4" />
                    <span>Substrate Shielding</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Copper Plating for Protection &amp; Surface Appearance
                    Optimization
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Before precious gold deposition, mandrels (especially
                    fusible alloys) receive an initial copper undercoat:
                  </p>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4">
                    <li>
                      <strong>Diffusion Barrier:</strong> Prevents low-melting
                      tin and bismuth atoms from diffusing into the high-carat
                      gold crystal lattice.
                    </li>
                    <li>
                      <strong>Micro-Leveling:</strong> Fills sub-microscopic
                      tool marks, imparting an ultra-smooth specular mirror
                      finish.
                    </li>
                    <li>
                      <strong>Superior Adhesion:</strong> Enhances electrolytic
                      nucleation of the incoming gold sulphite layer.
                    </li>
                  </ul>
                </div>

                <div className="p-3 bg-sky-950/30 rounded-xl border border-sky-800/40 text-[11px] font-mono text-sky-300 flex items-center justify-between">
                  <span>Undercoat Layer: Copper Flash</span>
                  <span className="font-bold">3 – 5 µm</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: ELECTROFORMING */}
        {activeMfgStep === 3 && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 font-mono text-xs font-bold rounded-md border border-amber-500/30">
                  Phase 03: Primary Metallurgical Synthesis
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Electroforming: Double Machine Precision Deposition
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  This is the central transformation phase. Prepared,
                  copper-jacketed mandrels are submerged into computerized
                  electroforming chambers where gold ions in an engineered
                  sulphite electrolyte deposit atom-by-atom onto the cathode
                  cores, growing a seamless, hollow karat gold shell with
                  microscopic structural uniformity.
                </p>
              </div>
              <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
                <img
                  src="/src/assets/images/electroforming_lab_1791375539313.jpg"
                  alt="Industrial double machine electroforming tanks for gold jewelry manufacturing"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-2.5 text-[11px] text-slate-400 font-mono bg-slate-950/90 border-t border-slate-800 flex justify-between">
                  <span>Bath: Non-Cyanide Gold Sulphite</span>
                  <span className="text-amber-400 font-semibold">
                    18K / 22K / 24K
                  </span>
                </div>
              </div>
            </div>

            {/* Double Machine Architecture Breakdown */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/30 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Factory Automation Standard
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    The "Double Machine" Architecture
                  </h4>
                </div>
                <span className="px-3 py-1 bg-slate-800 font-mono text-xs font-semibold text-sky-400 rounded-md">
                  Synchronized Dual-Chamber Redundancy
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h5 className="text-xs font-bold text-white">
                    Dual Tank Continuous Throughput
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    While Machine A conducts a 14-hour gold deposition cycle for
                    thick bridal bangles (200µm), Machine B finishes short-cycle
                    earrings (120µm) or undergoes chemical regeneration without
                    factory downtime.
                  </p>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h5 className="text-xs font-bold text-white">
                    Ampere-Hour Precision Integration
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Microprocessor-driven coulomb meters integrate exact current
                    flow over time. The machine automatically terminates
                    electrolysis the millisecond target gold weight is attained,
                    achieving ±0.05g weight accuracy.
                  </p>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h5 className="text-xs font-bold text-white">
                    Continuous Fluid Filtration &amp; Agitation
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Magnetic drive pumps circulate the bath across 0.5-micron
                    polypropylene filters while cathode bars reciprocate
                    continuously at 12–15 cycles/min to replenish gold ions at
                    micro-recesses.
                  </p>
                </div>
              </div>

              {/* Key Technical Operational Telemetry */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">
                    Current Density
                  </div>
                  <div className="text-sm font-bold font-mono text-amber-400">
                    0.8 – 1.2 A/dm²
                  </div>
                </div>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">
                    Bath Temperature
                  </div>
                  <div className="text-sm font-bold font-mono text-amber-400">
                    55°C ± 1°C
                  </div>
                </div>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">
                    Deposition Rate
                  </div>
                  <div className="text-sm font-bold font-mono text-amber-400">
                    12 – 15 µm / hr
                  </div>
                </div>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">
                    Gold Karat Range
                  </div>
                  <div className="text-sm font-bold font-mono text-amber-400">
                    14K, 18K, 22K, 24K
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: MANDREL ELIMINATION */}
        {activeMfgStep === 4 && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 font-mono text-xs font-bold rounded-md border border-amber-500/30">
                  Phase 04: Chemical &amp; Thermal Core Evacuation
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Mandrel Elimination: Hollow Core Liberation &amp; Acid
                  Stripping
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Once the target gold thickness is deposited, the piece is
                  still solid and heavy. In this critical phase, the sacrificial
                  core is evacuated through micro-drilled fluid ports using
                  thermal remelting and chemical dissolution, leaving a 100%
                  hollow, seamless gold jewelry shell.
                </p>
              </div>
              <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
                <img
                  src="/src/assets/images/mandrel_elemination.jpg"
                  alt="Chemical stripping laboratory apparatus and core evacuation process"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-2.5 text-[11px] text-slate-400 font-mono bg-slate-950/90 border-t border-slate-800 flex justify-between">
                  <span>Stripping: HNO3 / HCl Closed Loop</span>
                  <span className="text-amber-400 font-semibold">
                    100% Core Dissolved
                  </span>
                </div>
              </div>
            </div>

            {/* 6-Stage Elimination Pipeline */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>The Step-by-Step Mandrel Elimination Sequence:</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Sub-step 1: Copper Plating for Protection */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2.5">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                    Step 4.1 (Fusible Alloys Only)
                  </span>
                  <h5 className="text-sm font-bold text-white">
                    Copper Plating for Protection
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A secondary internal copper barrier layer is plated to seal
                    microscopic porosities and insulate the thin gold layer
                    against subsequent aggressive nitric acid attacks during
                    core dissolution.
                  </p>
                </div>

                {/* Sub-step 2: De-racking and Drilling */}
                <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/40 space-y-2.5 ring-1 ring-amber-500/20">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                    Step 4.2 • Mandatory Rule
                  </span>
                  <h5 className="text-sm font-bold text-white">
                    De-Racking &amp; Precision Drilling
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pieces are removed from jigs and drilled with{" "}
                    <strong className="text-amber-400">Minimum 2 holes</strong>.
                    Two distinct holes are essential: one acts as the chemical
                    inlet and the other as an escape vent for hydraulic
                    circulation and steam pressure balance.
                  </p>
                </div>

                {/* Sub-step 3: Pre-Annealing Inspection */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2.5">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    Step 4.6 • Quality Gate
                  </span>
                  <h5 className="text-sm font-bold text-white">
                    Pieces Obtained Before Heat Treatment
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hollow gold shells are weighed and inspected under digital
                    calipers to verify complete core removal and uniform
                    150µm–200µm wall geometry before entering the 500°C
                    annealing oven.
                  </p>
                </div>
              </div>

              {/* Interactive Emptying (PEG vs Hot Air) & Stripping (Fusible vs Zinc) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Emptying: Hot Air vs PEG */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Step 4.3: Core Emptying (Fusible / Wax)
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setEliminationEmptyingMethod("peg")}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded cursor-pointer transition-colors ${
                          eliminationEmptyingMethod === "peg"
                            ? "bg-amber-500 text-slate-950"
                            : "bg-slate-800 text-slate-300"
                        }`}
                      >
                        PEG (Polyethylene Glycol)
                      </button>
                      <button
                        onClick={() => setEliminationEmptyingMethod("hot_air")}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded cursor-pointer transition-colors ${
                          eliminationEmptyingMethod === "hot_air"
                            ? "bg-amber-500 text-slate-950"
                            : "bg-slate-800 text-slate-300"
                        }`}
                      >
                        Hot Air
                      </button>
                    </div>
                  </div>

                  {eliminationEmptyingMethod === "peg" ? (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="font-bold text-amber-300 flex items-center gap-1">
                        <Droplets className="w-4 h-4 text-amber-400" />
                        <span>Emptying with PEG (Polyethylene Glycol):</span>
                      </div>
                      <p className="leading-relaxed">
                        Pieces are submerged in liquid Polyethylene Glycol
                        heated to ~150°C. The liquid bath provides 100% uniform
                        conductive heat transfer without hot spots, gently
                        melting the 138°C Sn-Bi alloy or 65°C wax. The molten
                        alloy drops to the bottom of the flask for instant
                        reuse.
                      </p>
                      <span className="inline-block text-[10px] font-mono text-emerald-400 font-semibold">
                        Recommended: Zero smoke, no thermal shock, prevents
                        shell collapse.
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="font-bold text-sky-300 flex items-center gap-1">
                        <Flame className="w-4 h-4 text-sky-400" />
                        <span>Emptying with Hot Air Convection:</span>
                      </div>
                      <p className="leading-relaxed">
                        Pieces are positioned in a forced-air convection chamber
                        at 150°C–160°C inclined over drainage trays. The molten
                        alloy drains under gravity into collector crucibles.
                        Requires careful airflow calibration to prevent
                        localized overheating.
                      </p>
                      <span className="inline-block text-[10px] font-mono text-sky-400 font-semibold">
                        Alternative for high-volume automated conveyor lines.
                      </span>
                    </div>
                  )}
                </div>

                {/* Stripping: Fusible vs Zinc Die Cast */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Step 4.4: Chemical Core Stripping
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setStrippingAcidType("fusible")}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded cursor-pointer transition-colors ${
                          strippingAcidType === "fusible"
                            ? "bg-amber-500 text-slate-950"
                            : "bg-slate-800 text-slate-300"
                        }`}
                      >
                        Fusible Alloys (HNO3)
                      </button>
                      <button
                        onClick={() => setStrippingAcidType("zinc")}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded cursor-pointer transition-colors ${
                          strippingAcidType === "zinc"
                            ? "bg-amber-500 text-slate-950"
                            : "bg-slate-800 text-slate-300"
                        }`}
                      >
                        Zinc Die Cast (HCl)
                      </button>
                    </div>
                  </div>

                  {strippingAcidType === "fusible" ? (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="font-bold text-amber-300 flex items-center gap-1">
                        <FlaskConical className="w-4 h-4 text-amber-400" />
                        <span>Dissolution in Nitric Acid (HNO3):</span>
                      </div>
                      <p className="leading-relaxed">
                        Residual Sn-Bi core films clinging to the interior walls
                        are dissolved in 20%–30% Nitric Acid. Bismuth and tin
                        oxidize into soluble nitrates, leaving the pure noble
                        gold shell untouched.
                      </p>
                      <span className="inline-block text-[10px] font-mono text-amber-400 font-semibold">
                        Requires copper sandwich protection on 14K pieces.
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="font-bold text-sky-300 flex items-center gap-1">
                        <FlaskConical className="w-4 h-4 text-sky-400" />
                        <span>Dissolution in Hydrochloric Acid (HCl):</span>
                      </div>
                      <p className="leading-relaxed">
                        Zinc die cast mandrels are dissolved directly in
                        Hydrochloric Acid (HCl). Because zinc reacts vigorously
                        with HCl while gold and copper are inert,{" "}
                        <em>
                          HCl will not damage lower karat gold alloys (14K)
                        </em>
                        .
                      </p>
                      <span className="inline-block text-[10px] font-mono text-emerald-400 font-semibold">
                        Superior chemical compatibility for 14K watch cases and
                        links.
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 4.5: Closed Loop Neutralization & Recovery System */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-xs">
                  <div className="font-bold text-white flex items-center gap-2">
                    <span>
                      Step 4.5: Closed Loop Recovery &amp; Neutralization System
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      Zero Effluent Discharge
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    All acid stripping occurs inside hermetic closed-loop
                    stations equipped with wet caustic scrubbers for acid fume
                    neutralization. The dissolved bismuth, tin, zinc, and copper
                    salts are precipitated, filtered, and smelted back into raw
                    ingot alloy cakes, delivering near 100% material recycling
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: FINISHING OF THE PIECES */}
        {activeMfgStep === 5 && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 font-mono text-xs font-bold rounded-md border border-amber-500/30">
                  Phase 05: Metallurgical Maturation &amp; Showroom Finish
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Finishing of the Pieces: 500°C Heat Treatment, Soldering &amp;
                  Luster
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A newly evacuated hollow gold shell is structurally fragile
                  and crystalline. Through an engineered thermal annealing
                  recipe, precision hole sealing, hand polishing, and deep
                  ultrasonic decontamination, the hollow shell transforms into
                  high-end retail jewelry that withstands daily consumer wear.
                </p>
              </div>
              <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
                <img
                  src="/src/assets/images/finishing.jpg"
                  alt="Finishing, polishing, and inspection of electroformed hollow gold jewelry"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-2.5 text-[11px] text-slate-400 font-mono bg-slate-950/90 border-t border-slate-800 flex justify-between">
                  <span>Recipe: 500°C for 20 Minutes</span>
                  <span className="text-amber-400 font-semibold">
                    Ductile &amp; Work-Hardened
                  </span>
                </div>
              </div>
            </div>

            {/* Module 1: Heat Treatment (500°C / 20 min) Interactive Simulator */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/40 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Crystal Lattice Reorganization
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    Heat Treatment: Effect on Gold Shell Metallurgy
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    Compare State:
                  </span>
                  <button
                    onClick={() => setHeatTreatmentView("before")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      heatTreatmentView === "before"
                        ? "bg-rose-500 text-white shadow-md"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    Before Heat Treatment
                  </button>
                  <button
                    onClick={() => setHeatTreatmentView("after")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      heatTreatmentView === "after"
                        ? "bg-emerald-500 text-slate-950 shadow-md"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    After Heat Treatment (500°C / 20mn)
                  </button>
                </div>
              </div>

              {heatTreatmentView === "before" ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-rose-950/20 border border-rose-900/40 p-5 rounded-xl items-center">
                  <div className="md:col-span-8 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                      <AlertCircle className="w-4 h-4" />
                      <span>State: As-Deposited Raw Shell (Unannealed)</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Electrodeposited gold crystals grow in strained,
                      directional columnar grains with trapped dislocation
                      defects and extreme internal stress caused by
                      electrochemical deposition. The piece is{" "}
                      <strong>brittle and prone to micro-cracking</strong> under
                      slight finger pressure or thermal soldering shock.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
                      <div className="bg-slate-900 p-2 rounded text-slate-300">
                        Microstructure:{" "}
                        <span className="text-rose-400 font-bold">
                          Strained Columnar
                        </span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded text-slate-300">
                        Ductility:{" "}
                        <span className="text-rose-400 font-bold">
                          Low (Vulnerable)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4 bg-slate-900 p-4 rounded-xl border border-slate-800 text-center space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Thermal Recipe Needed
                    </div>
                    <div className="text-2xl font-bold font-mono text-amber-400">
                      500 °C
                    </div>
                    <div className="text-xs text-slate-300 font-mono">
                      Soak Duration: 20 Minutes
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-emerald-950/20 border border-emerald-900/40 p-5 rounded-xl items-center">
                  <div className="md:col-span-8 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>
                        State: Fully Homogenized &amp; Stress-Relieved
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Heating to exactly{" "}
                      <strong className="text-amber-300">
                        500°C for 20 minutes
                      </strong>{" "}
                      triggers complete recrystallization. The strained columnar
                      structure converts into uniform equiaxed polyhedral gold
                      grains, relieving internal stresses and yielding
                      exceptional mechanical ductility and fatigue resilience.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
                      <div className="bg-slate-900 p-2 rounded text-slate-300">
                        Microstructure:{" "}
                        <span className="text-emerald-400 font-bold">
                          Equiaxed Recrystallized
                        </span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded text-slate-300">
                        Resilience:{" "}
                        <span className="text-emerald-400 font-bold">
                          Optimal Elasticity
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4 bg-slate-900 p-4 rounded-xl border border-slate-800 text-center space-y-1">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                      Annealing Verified
                    </div>
                    <div className="text-2xl font-bold font-mono text-emerald-400">
                      500 °C / 20mn
                    </div>
                    <div className="text-xs text-slate-300 font-mono">
                      Ready for Soldering &amp; Setting
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Module 2, 3, 4, 5: Soldering, Polishing, Topcoat, Cleaning & Drying */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 1. Soldering */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      Hole Sealing
                    </span>
                    <Wrench className="w-4 h-4 text-amber-400" />
                  </div>
                  <h5 className="text-xs font-bold text-white">
                    Manual or Automatic Soldering
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Micro-soldering seals the 2+ core evacuation ports and
                    attaches clasps, catches, posts, or hinge mechanisms.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono">
                  Manual micro-torch for bespoke pieces; Automatic
                  laser/induction for volume chains.
                </div>
              </div>

              {/* 2. Manual Polishing */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                      Surface Luster
                    </span>
                    <Sparkles className="w-4 h-4 text-sky-400" />
                  </div>
                  <h5 className="text-xs font-bold text-white">
                    Manual Polishing
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Gentle buffing using fine muslin mops, tripoli, and red
                    jewellers' rouge to burnish away solder seams without
                    wearing down the 150µm hollow wall.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono">
                  Preserves structural thickness while creating deep specular
                  reflections.
                </div>
              </div>

              {/* 3. Gold Topcoat */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                      Color Harmonization
                    </span>
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                  <h5 className="text-xs font-bold text-white">
                    Gold Topcoat (If Necessary)
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    An optional flash gold deposition (0.1–0.3µm) in standard
                    1N, 2N, or 3N color shades to conceal solder lines and
                    guarantee 100% hue uniformity across sets.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono">
                  Applied selectively depending on alloy karat and solder
                  composition.
                </div>
              </div>

              {/* 4. Cleaning and Drying */}
              <div className="bg-slate-950 p-5 rounded-xl border border-emerald-500/40 space-y-3 flex flex-col justify-between ring-1 ring-emerald-500/20">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      Final Purity
                    </span>
                    <Droplets className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h5 className="text-xs font-bold text-white">
                    Cleaning and Drying
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Very good cleaning to eliminate all chemical traces from the
                    interior cavity using ultrasonics with hot distilled water.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[10px] text-emerald-400 font-mono">
                  Dried thoroughly using hot air and absorbing materials to
                  prevent internal moisture.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Interactive Workflow Action */}
        <div className="mt-12 p-6 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Industrial Metallurgy Consulting
            </div>
            <h4 className="text-base font-bold text-white">
              Need Customized Mandrel Formulations or Double Machine Setup?
            </h4>
            <p className="text-xs text-slate-400">
              Our metallurgical engineers configure automated turnkey lines for
              14K, 18K, 22K, and 24K hollow manufacturing.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquireModal?.("electroforming-consult")}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg shadow transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Consult Engineering Specialist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  // === END OF NEW INTERACTIVE JEWELRY MANUFACTURING SECTION ===
};
