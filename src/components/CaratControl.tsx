import React, { useState } from "react";
import {
  Scale,
  Activity,
  Gauge,
  Layers,
  Zap,
  FlaskConical,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
  TrendingUp,
  Droplets,
  RefreshCw,
  Sliders,
  HelpCircle,
  Atom,
  Check,
  ChevronRight,
  Calculator,
} from "lucide-react";

interface CaratControlSectionProps {
  onOpenEnquireModal?: (courseKey?: string) => void;
}

export const CaratControl: React.FC<CaratControlSectionProps> = ({
  onOpenEnquireModal,
}) => {
  // 1. Alloy State (18K vs 14K)
  const [selectedKarat, setSelectedKarat] = useState<"18K" | "14K">("18K");

  // 2. Interactive Tri-Variable Principle Mode
  const [activePrinciple, setActivePrinciple] = useState<
    "all" | "efficiency" | "density" | "current"
  >("all");

  // 3. Current Density Slider for Interactive Principle Explorer
  const [currentDensity, setCurrentDensity] = useState<number>(1.2); // A/dm2

  // Computed values based on Current Density
  // Direct relationship: Efficiency = f(Current Density)
  // At 0.8 A/dm2 -> higher efficiency for Gold; At 1.6 A/dm2 -> lower efficiency or different alloy ratio
  const simulatedEfficiency =
    selectedKarat === "18K"
      ? Math.round((92 + (currentDensity - 1.0) * 15) * 10) / 10
      : Math.round((78 + (currentDensity - 1.0) * 18) * 10) / 10;

  const simulatedDensity =
    selectedKarat === "18K"
      ? Math.round((15.42 - (currentDensity - 1.2) * 0.18) * 100) / 100
      : Math.round((13.08 - (currentDensity - 1.2) * 0.22) * 100) / 100;

  const simulatedCarat =
    selectedKarat === "18K"
      ? Math.round((750.5 + (simulatedEfficiency - 95) * 0.15) * 10) / 10
      : Math.round((585.5 + (simulatedEfficiency - 81) * 0.18) * 10) / 10;

  // 4. Formula Interactive Math Model State
  const [surfaceAreaS, setSurfaceAreaS] = useState<number>(2.5); // dm2
  const [layerThicknessE, setLayerThicknessE] = useState<number>(18); // um per layer
  const [depositDensityD, setDepositDensityD] = useState<number>(
    selectedKarat === "18K" ? 15.4 : 13.1,
  ); // g/cm3
  const [quantityCurrentQ, setQuantityCurrentQ] = useState<number>(7.2); // Amn (A·min)

  // Update deposit density when Karat changes if user hasn't heavily customized
  const handleKaratChange = (karat: "18K" | "14K") => {
    setSelectedKarat(karat);
    setDepositDensityD(karat === "18K" ? 15.4 : 13.1);
  };

  // Formulas from engineering specifications:
  // E = ( S × e × d ) / Q
  // where S (dm²), e (µm), d (g/cm³), Q (A·min), W = S × e × d
  const calculatedWeightW =
    Math.round(surfaceAreaS * layerThicknessE * depositDensityD * 10) / 10;
  const calculatedEfficiencyE =
    quantityCurrentQ > 0
      ? Math.round(
          ((surfaceAreaS * layerThicknessE * depositDensityD) /
            quantityCurrentQ) *
            10,
        ) / 10
      : 0;

  // 5. Multi-Layer In-Water Weighing Simulation State
  const [simulatedLayerIndex, setSimulatedLayerIndex] = useState<number>(3); // 1 to 8 layers
  const totalLayers = 8;
  const layerThicknessStep = 18.75; // 18.75um * 8 = 150um total
  const currentTotalThickness = Math.round(
    simulatedLayerIndex * layerThicknessStep,
  );

  // Progressive real-time carat convergence towards exact target
  const layerData = [
    {
      layer: 1,
      thickness: 19,
      readingCarat: selectedKarat === "18K" ? "753.2‰" : "589.1‰",
      correction: "Reduce J by 0.08 A/dm²",
      inWaterWeight: "12.42 g",
      status: "Calibration Layer",
    },
    {
      layer: 2,
      thickness: 38,
      readingCarat: selectedKarat === "18K" ? "751.8‰" : "587.4‰",
      correction: "Minor trimming -0.03 A/dm²",
      inWaterWeight: "24.91 g",
      status: "Fine-Tuning",
    },
    {
      layer: 3,
      thickness: 56,
      readingCarat: selectedKarat === "18K" ? "750.9‰" : "586.1‰",
      correction: "Nominal equilibrium holding",
      inWaterWeight: "37.35 g",
      status: "Equilibrium",
    },
    {
      layer: 4,
      thickness: 75,
      readingCarat: selectedKarat === "18K" ? "750.6‰" : "585.8‰",
      correction: "Replenish Au salt 1.2g",
      inWaterWeight: "49.80 g",
      status: "Equilibrium",
    },
    {
      layer: 5,
      thickness: 94,
      readingCarat: selectedKarat === "18K" ? "750.4‰" : "585.5‰",
      correction: "Nominal holding current",
      inWaterWeight: "62.24 g",
      status: "High Precision",
    },
    {
      layer: 6,
      thickness: 113,
      readingCarat: selectedKarat === "18K" ? "750.5‰" : "585.4‰",
      correction: "Target lock verified",
      inWaterWeight: "74.70 g",
      status: "High Precision",
    },
    {
      layer: 7,
      thickness: 131,
      readingCarat: selectedKarat === "18K" ? "750.5‰" : "585.5‰",
      correction: "Final layer prep",
      inWaterWeight: "87.16 g",
      status: "Pre-Finishing",
    },
    {
      layer: 8,
      thickness: 150,
      readingCarat: selectedKarat === "18K" ? "750.5‰" : "585.5‰",
      correction: "Completed & Certified",
      inWaterWeight: "99.62 g",
      status: "Hallmark Certified",
    },
  ];

  return (
    <section
      id="carat-control-section"
      className="py-20 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 font-mono text-xs font-bold rounded-full border border-amber-500/30">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Closed-Loop In-Situ Process Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Carat Control: How Does It Work?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            In modern electroforming, carat regulation is not achieved by
            chance. It relies on the rigorous science of{" "}
            <strong className="text-amber-300 font-semibold">
              Precious Gold Alloys
            </strong>
            , three interdependent physical relationships, and{" "}
            <strong className="text-sky-300 font-semibold">
              hydrostatic in-water weighing
            </strong>{" "}
            between 10–20µm micro-layers.
          </p>
        </div>

        {/* 1. ALLOY COMPOSITION ARCHITECTURE CARD */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 mb-12 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
                <Atom className="w-4 h-4 text-amber-400" />
                <span>Chemical Foundation</span>
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span>CARAT</span>
                <span className="text-amber-400 text-xl font-mono">⬄</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                  GOLD ALLOYS
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Electroformed jewelry alloys are electro-synthesized from a
                precision gold-copper (Au-Cu) co-deposition matrix.
              </p>
            </div>

            {/* 18K vs 14K Toggle Buttons */}
            <div className="flex items-center p-1 bg-slate-900 rounded-xl border border-slate-800 self-start md:self-auto">
              <button
                onClick={() => handleKaratChange("18K")}
                className={`px-5 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all flex items-center gap-2 ${
                  selectedKarat === "18K"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md font-extrabold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>18 K Characteristics</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/20">
                  750‰
                </span>
              </button>
              <button
                onClick={() => handleKaratChange("14K")}
                className={`px-5 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all flex items-center gap-2 ${
                  selectedKarat === "14K"
                    ? "bg-gradient-to-r from-sky-500 to-sky-600 text-slate-950 shadow-md font-extrabold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>14 K Characteristics</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/20">
                  585‰
                </span>
              </button>
            </div>
          </div>

          {/* Two Elements Breakdown: Gold and Copper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. GOLD (Au) */}
            <div className="bg-slate-900/90 rounded-xl p-5 border border-amber-500/40 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-amber-500/10 font-black text-6xl select-none">
                Au
              </div>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                    Element 79 • Noble Base
                  </span>
                  <span className="text-sm font-mono font-bold text-amber-400">
                    {selectedKarat === "18K" ? "75.0% (750‰)" : "58.5% (585‰)"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>GOLD (Au)</span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Provides hallmarking purity, intrinsic store of value,
                  corrosion resistance, and warm yellow reflectance. Deposited
                  from gold potassium cyanide or non-cyanide sulfite complexes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
                <span>Density Contribution:</span>
                <span className="text-amber-300 font-bold">
                  19.32 g/cm³ base
                </span>
              </div>
            </div>

            {/* 2. COPPER (Cu) */}
            <div className="bg-slate-900/90 rounded-xl p-5 border border-orange-500/40 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-orange-500/10 font-black text-6xl select-none">
                Cu
              </div>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-300">
                    Element 29 • Hardener
                  </span>
                  <span className="text-sm font-mono font-bold text-orange-400">
                    {selectedKarat === "18K" ? "25.0% (250‰)" : "41.5% (415‰)"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>COPPER (Cu)</span>
                  <Zap className="w-4 h-4 text-orange-400" />
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Acts as the primary metallurgical hardening solute. Elevates
                  Vickers hardness (HV) from ~60 to 140–180, preventing
                  structural buckling and ensuring superior mechanical
                  integrity.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
                <span>Density Contribution:</span>
                <span className="text-orange-300 font-bold">
                  8.96 g/cm³ base
                </span>
              </div>
            </div>
          </div>

          {/* Alloy Composition vs Carat Comparison Bar */}
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
              <span className="font-bold text-white flex items-center gap-2">
                <span>
                  Alloy Composition vs Carat: {selectedKarat} Metallurgical
                  Profile
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-amber-500/20 text-amber-300 rounded border border-amber-500/30">
                  Standard Au-Cu Formula
                </span>
              </span>
              <span className="font-mono text-slate-400 text-[11px]">
                Target Hallmarking Range:{" "}
                <strong className="text-emerald-400">
                  {selectedKarat === "18K" ? "750‰ – 753‰" : "585‰ – 588‰"}
                </strong>
              </span>
            </div>

            {/* Multi-Segment Color Bar */}
            <div className="h-6 w-full rounded-lg overflow-hidden flex shadow-inner font-mono text-[10px] font-bold text-slate-950">
              <div
                style={{ width: selectedKarat === "18K" ? "75%" : "58.5%" }}
                className="bg-amber-400 flex items-center justify-center transition-all duration-500"
                title="Gold content"
              >
                Au {selectedKarat === "18K" ? "75%" : "58.5%"}
              </div>
              <div
                style={{ width: selectedKarat === "18K" ? "25%" : "41.5%" }}
                className="bg-orange-500 text-white flex items-center justify-center transition-all duration-500"
                title="Copper content"
              >
                Cu {selectedKarat === "18K" ? "25%" : "41.5%"}
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">
                  Theoretical Deposit Density:
                </span>
                <span className="font-bold text-amber-300 text-sm font-mono">
                  {selectedKarat === "18K" ? "15.40 g/cm³" : "13.10 g/cm³"}
                </span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">
                  Vickers Hardness (HV):
                </span>
                <span className="font-bold text-white text-sm font-mono">
                  {selectedKarat === "18K" ? "140 – 160 HV" : "170 – 195 HV"}
                </span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">
                  Operating Bath Efficiency:
                </span>
                <span className="font-bold text-emerald-400 text-sm font-mono">
                  {selectedKarat === "18K"
                    ? "92 – 98 mg/A·min"
                    : "78 – 84 mg/A·min"}
                </span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">
                  Target Color Shade:
                </span>
                <span className="font-bold text-sky-300 text-sm font-mono">
                  {selectedKarat === "18K"
                    ? "2N (Light Yellow) / 3N"
                    : "1N / 2N European"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE THREE GOVERNING PRINCIPLES */}
        <div className="mb-12 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-mono text-xs font-bold border border-sky-500/30">
              <Activity className="w-3.5 h-3.5" />
              <span>Scientific Foundation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Principle: Carat Control is Based on 3 Direct Relationships
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Precise karat regulation connects three fundamental
              electrochemical variables in real-time.
            </p>
          </div>

          {/* 3 Core Relationships Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Relationship 1: Carat = f(Efficiency) */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                activePrinciple === "efficiency" || activePrinciple === "all"
                  ? "bg-slate-950 border-amber-500/50 ring-1 ring-amber-500/20 shadow-lg"
                  : "bg-slate-950/70 border-slate-800 opacity-70"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-amber-500/20 text-amber-300 rounded-xl">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-amber-400 border border-amber-500/30">
                  Relationship #1
                </span>
              </div>
              <div className="text-sm font-mono font-extrabold text-amber-300 mb-1">
                Carat = f (Efficiency)
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Carat vs Cathodic Efficiency
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">
                  Direct relationship between carat and efficiency:
                </strong>{" "}
                Gold has a higher electrochemical equivalent and deposits at
                higher cathodic efficiency than copper. As efficiency increases,
                the gold weight fraction in the deposit rises correspondingly.
              </p>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-emerald-400 font-bold">Rule:</span> Higher
                bath efficiency selectively deposits higher gold karat (Au‰).
              </div>
            </div>

            {/* Relationship 2: Carat = f(Deposit density) */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                activePrinciple === "density" || activePrinciple === "all"
                  ? "bg-slate-950 border-sky-500/50 ring-1 ring-sky-500/20 shadow-lg"
                  : "bg-slate-950/70 border-slate-800 opacity-70"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-sky-500/20 text-sky-300 rounded-xl">
                  <Gauge className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-sky-400 border border-sky-500/30">
                  Relationship #2
                </span>
              </div>
              <div className="text-sm font-mono font-extrabold text-sky-300 mb-1">
                Carat = f (Deposit density)
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Carat vs Deposit Density
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">
                  Direct relationship between carat and deposit density:
                </strong>{" "}
                Gold is extraordinarily dense (19.32 g/cm³) compared to copper
                (8.96 g/cm³). Therefore, measuring the exact physical density
                directly dictates the exact alloy carat.
              </p>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-sky-400 font-bold">Density Index:</span>{" "}
                18K = 15.40 g/cm³ | 14K = 13.10 g/cm³.
              </div>
            </div>

            {/* Relationship 3: Efficiency = f(Current density) */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                activePrinciple === "current" || activePrinciple === "all"
                  ? "bg-slate-950 border-purple-500/50 ring-1 ring-purple-500/20 shadow-lg"
                  : "bg-slate-950/70 border-slate-800 opacity-70"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-purple-500/20 text-purple-300 rounded-xl">
                  <Sliders className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-purple-400 border border-purple-500/30">
                  Relationship #3
                </span>
              </div>
              <div className="text-sm font-mono font-extrabold text-purple-300 mb-1">
                Efficiency = f (Current density)
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Efficiency vs Current Density
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">
                  Direct relationship between efficiency and current density:
                </strong>{" "}
                Modulating cathodic current density (A/dm²) alters the
                polarization overvoltage, shifting the relative deposition rates
                of Gold and Copper to fine-tune the final alloy.
              </p>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-purple-400 font-bold">
                  Control Lever:
                </span>{" "}
                The machine regulates amperes per dm² to adjust karat mid-run.
              </div>
            </div>
          </div>

          {/* Dynamic Interactive Principle Simulator */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-amber-400" />
                  <span>Interactive Dynamic Tri-Principle Simulator</span>
                </h4>
                <p className="text-xs text-slate-400">
                  Slide cathodic current density to observe how efficiency,
                  deposit density, and karat shift simultaneously.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-400">Selected Alloy:</span>
                <span className="font-bold text-amber-400 px-2 py-0.5 bg-amber-500/10 rounded border border-amber-500/20">
                  {selectedKarat} Standard
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Slider Control Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-semibold">
                      Cathodic Current Density (J):
                    </span>
                    <span className="font-mono font-bold text-purple-400 text-sm">
                      {currentDensity} A/dm²
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.6"
                    max="1.8"
                    step="0.05"
                    value={currentDensity}
                    onChange={(e) =>
                      setCurrentDensity(parseFloat(e.target.value))
                    }
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>0.6 A/dm² (Low Power)</span>
                    <span>1.2 A/dm² (Nominal)</span>
                    <span>1.8 A/dm² (High Rate)</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>How the Tri-Relationship Coordinates:</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Adjusting current density alters cathodic efficiency (E),
                    which shifts the co-deposited metal ratio. This changes the
                    physical deposit density (d) and locks the exact final
                    carat.
                  </p>
                </div>
              </div>

              {/* Dynamic Results Columns */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Result 1: Cathodic Efficiency */}
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                    1. Cathodic Efficiency (E)
                  </span>
                  <div className="text-xl font-mono font-black text-amber-400">
                    {simulatedEfficiency}{" "}
                    <span className="text-xs font-normal text-slate-400">
                      mg/A·min
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 block">
                    {simulatedEfficiency > 90
                      ? "High Au affinity"
                      : "Nominal co-deposition"}
                  </span>
                </div>

                {/* Result 2: Deposit Density */}
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                    2. Deposit Density (d)
                  </span>
                  <div className="text-xl font-mono font-black text-sky-400">
                    {simulatedDensity}{" "}
                    <span className="text-xs font-normal text-slate-400">
                      g/cm³
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-300 block">
                    Theoretical: {selectedKarat === "18K" ? "15.40" : "13.10"}{" "}
                    g/cm³
                  </span>
                </div>

                {/* Result 3: Computed Carat */}
                <div className="bg-slate-900 p-4 rounded-xl border border-amber-500/30 text-center space-y-1 ring-1 ring-amber-500/20">
                  <span className="text-[10px] font-mono uppercase text-amber-300 font-bold">
                    3. Resulting Carat
                  </span>
                  <div className="text-xl font-mono font-black text-white">
                    {simulatedCarat}{" "}
                    <span className="text-xs text-amber-400 font-normal">
                      ‰
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold block ${
                      (selectedKarat === "18K" &&
                        simulatedCarat >= 750 &&
                        simulatedCarat <= 753) ||
                      (selectedKarat === "14K" &&
                        simulatedCarat >= 585 &&
                        simulatedCarat <= 588)
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }`}
                  >
                    {(selectedKarat === "18K" &&
                      simulatedCarat >= 750 &&
                      simulatedCarat <= 753) ||
                    (selectedKarat === "14K" &&
                      simulatedCarat >= 585 &&
                      simulatedCarat <= 588)
                      ? "✓ Strict Hallmark Compliant"
                      : "⚠ Requires In-Water Trim"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. EFFICIENCY DETERMINATION MATHEMATICAL FORMULA CARD */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 mb-12 shadow-xl space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-1">
              <FlaskConical className="w-4 h-4 text-sky-400" />
              <span>Analytical Determination</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Principle: Efficiency Determination
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Governing electro-metallurgical formulas used by the supervisory
              computer to compute exact mass deposited (W) and bath efficiency
              (E).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Formulas Box */}
            <div className="lg:col-span-5 space-y-4">
              {/* Formula 1: Efficiency Determination */}
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Deposit Mass Formula:
                </div>
                <div className="text-xl sm:text-2xl font-mono font-black text-amber-300 tracking-wide bg-slate-950 px-4 py-3 rounded-lg border border-slate-800 text-center">
                  E = ( S × e × d ) / Q
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Computes cathodic deposition efficiency (E in mg / A·min)
                  directly from rack surface area (S), deposit thickness (e),
                  alloy density (d), and electrical charge quantity (Q).
                </p>
              </div>

              {/* Formula 2: Relationship Breakdown */}
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Cathodic Efficiency Formula:
                </div>
                <div className="text-xl sm:text-2xl font-mono font-black text-sky-300 tracking-wide bg-slate-950 px-4 py-3 rounded-lg border border-slate-800 text-center">
                  E = W / Q
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Efficiency (E in mg / A·min) determines milligrams of gold
                  alloy deposited per unit quantity of electric charge (Q in
                  A·min), where deposit mass W = S × e × d.
                </p>
              </div>

              {/* Variable Definitions Legend */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-sky-400" />
                  <span>Technical Variable Reference:</span>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="font-bold text-amber-400">E :</span>{" "}
                    Efficiency (mg / A·min)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="font-bold text-amber-400">Q :</span>{" "}
                    Quantity of current (A·min)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="font-bold text-sky-400">S :</span> Surface
                    of pieces (dm²)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="font-bold text-sky-400">e :</span> Deposit
                    thickness (µm)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="font-bold text-purple-400">d :</span>{" "}
                    Deposit density (g/cm³)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="font-bold text-purple-400">W :</span>{" "}
                    Deposit mass (mg)
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Calculator Workspace */}
            <div className="lg:col-span-7 bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span>Real-Time Formula Verification Lab</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Live Mathematical Solver
                  </span>
                </div>

                {/* Slider 1: Surface S */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">
                      Surface Area of Rack Pieces (S):
                    </span>
                    <span className="font-mono font-bold text-sky-300">
                      {surfaceAreaS} dm²
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="6.0"
                    step="0.1"
                    value={surfaceAreaS}
                    onChange={(e) =>
                      setSurfaceAreaS(parseFloat(e.target.value))
                    }
                    className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-sky-400"
                  />
                </div>

                {/* Slider 2: Thickness e */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">
                      Incremental Layer Thickness (e):
                    </span>
                    <span className="font-mono font-bold text-sky-300">
                      {layerThicknessE} µm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={layerThicknessE}
                    onChange={(e) =>
                      setLayerThicknessE(parseFloat(e.target.value))
                    }
                    className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-sky-400"
                  />
                  <span className="text-[10px] text-slate-500 font-mono">
                    Standard electroformed micro-layer = 10–20 µm
                  </span>
                </div>

                {/* Slider 3: Deposit Density d */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">
                      Alloy Deposit Density (d):
                    </span>
                    <span className="font-mono font-bold text-purple-300">
                      {depositDensityD} g/cm³
                    </span>
                  </div>
                  <input
                    type="range"
                    min="12.0"
                    max="16.5"
                    step="0.05"
                    value={depositDensityD}
                    onChange={(e) =>
                      setDepositDensityD(parseFloat(e.target.value))
                    }
                    className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-purple-400"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>14K (~13.1 g/cm³)</span>
                    <span>18K (~15.4 g/cm³)</span>
                  </div>
                </div>

                {/* Slider 4: Current Quantity Q */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">
                      Delivered Current Quantity (Q):
                    </span>
                    <span className="font-mono font-bold text-amber-300">
                      {quantityCurrentQ} A·min
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="20.0"
                    step="0.2"
                    value={quantityCurrentQ}
                    onChange={(e) =>
                      setQuantityCurrentQ(parseFloat(e.target.value))
                    }
                    className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-amber-400"
                  />
                  <span className="text-[10px] text-slate-500 font-mono">
                    Current Quantity Q = Amperes × Plating Minutes
                  </span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    Deposit Mass: W = (S × e × d)
                  </span>
                  <div className="text-2xl font-mono font-black text-amber-400">
                    {calculatedWeightW.toLocaleString()}{" "}
                    <span className="text-xs font-normal text-slate-400">
                      mg
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block mt-1">
                    {(calculatedWeightW / 1000).toFixed(3)} grams
                  </span>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    Computed Efficiency (E)
                  </span>
                  <div className="text-2xl font-mono font-black text-sky-400">
                    {calculatedEfficiencyE}{" "}
                    <span className="text-xs font-normal text-slate-400">
                      mg/A·min
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 block mt-1">
                    Target: {selectedKarat === "18K" ? "92–98" : "78–84"}{" "}
                    mg/A·min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. THE IN-WATER WEIGHING SYSTEM & MULTI-LAYER ARCHITECTURE */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 mb-12 shadow-xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <Scale className="w-4 h-4 text-emerald-400" />
                <span>Archimedes Hydrostatic Principle</span>
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span>Weighing System: Weighing in Water</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                Electroformed jewels are not composed of 1 thick monolithic
                layer, but of several successive micro-layers of 10–20µm.
              </p>
            </div>

            <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/30 flex items-center gap-3 shrink-0">
              <Droplets className="w-6 h-6 text-emerald-400" />
              <div className="text-xs">
                <div className="font-bold text-white">
                  In-Situ Submerged Balance
                </div>
                <div className="text-[11px] font-mono text-emerald-400">
                  Resolution: ± 0.001g Underwater
                </div>
              </div>
            </div>
          </div>

          {/* Principle Breakdown Explanation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Why Multi-Layer Deposition (10–20µm)?</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                If an electroforming machine attempted to deposit the entire
                150µm gold wall in a single uninterrupted 8-hour cycle, subtle
                electrolyte depletion and temperature drift would cause
                uncontrollable carat deviation, resulting in hallmarking
                failure.
              </p>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-400 font-mono">
                <strong className="text-amber-300">Layering Protocol:</strong>{" "}
                The total shell is sliced into 8 to 10 sequential sub-layers.
                After each sub-layer, the robotic crane transfers the rack to
                the hydrostatic water weighing station.
              </div>
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-sky-400" />
                <span>Hydrostatic Differential Measurement Principle</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                By measuring the rack submerged in pure distilled water,
                Archimedes' buoyant force isolates the exact volume and density
                of the deposited layer without surface droplet meniscus errors.
              </p>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-400 font-mono">
                <strong className="text-sky-300">Feedback Loop:</strong> After
                each layer, the rack is weighed, then the computer implements
                updated parameters to fine-tune the final carat.
              </div>
            </div>
          </div>

          {/* Interactive Multi-Layer Step-by-Step Simulation */}
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase">
                  Robotic Sequence Visualizer
                </div>
                <h4 className="text-base font-bold text-white">
                  Multi-Layer Deposition &amp; Feedback Cycle (Layer{" "}
                  {simulatedLayerIndex} of {totalLayers})
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Total Thickness:</span>
                <span className="text-xs font-mono font-bold text-white px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">
                  {currentTotalThickness} µm / 150 µm
                </span>
              </div>
            </div>

            {/* Stepper Buttons for Layers 1 to 8 */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {Array.from({ length: totalLayers }, (_, i) => i + 1).map(
                (layerNum) => (
                  <button
                    key={layerNum}
                    onClick={() => setSimulatedLayerIndex(layerNum)}
                    className={`py-2 px-1 text-center rounded-lg font-mono text-xs font-bold cursor-pointer transition-all border ${
                      simulatedLayerIndex === layerNum
                        ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md ring-2 ring-amber-500/30 font-black"
                        : layerNum < simulatedLayerIndex
                          ? "bg-slate-950 text-slate-300 border-emerald-500/40 hover:border-emerald-400"
                          : "bg-slate-950 text-slate-500 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-[10px] opacity-75">L-{layerNum}</div>
                    <div>{Math.round(layerNum * layerThicknessStep)}µ</div>
                  </button>
                ),
              )}
            </div>

            {/* Active Layer Status Dashboard */}
            {(() => {
              const currentLayer = layerData[simulatedLayerIndex - 1];
              return (
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Hydrostatic Reading
                    </span>
                    <div className="text-lg font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                      <Droplets className="w-4 h-4 text-emerald-400" />
                      <span>{currentLayer.inWaterWeight}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Underwater Buoyant Mass
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Measured Layer Carat
                    </span>
                    <div className="text-lg font-mono font-bold text-amber-300 flex items-center gap-1.5">
                      <Scale className="w-4 h-4 text-amber-400" />
                      <span>{currentLayer.readingCarat}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Delta-Density Computed
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Loop Adjustment
                    </span>
                    <div className="text-xs font-mono font-bold text-sky-300 mt-1">
                      {currentLayer.correction}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Dynamic PLC Feedback
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Process Phase
                    </span>
                    <div className="mt-1">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {currentLayer.status}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Layer {simulatedLayerIndex} of {totalLayers}
                    </span>
                  </div>
                </div>
              );
            })()}

            {/* Micro-Layer Progression Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>Deposition Wall Progression:</span>
                <span className="text-white font-bold">
                  {Math.round((simulatedLayerIndex / totalLayers) * 100)}%
                  Complete
                </span>
              </div>
              <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 rounded-full transition-all duration-300"
                  style={{
                    width: `${(simulatedLayerIndex / totalLayers) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 5. CONCLUSION & ENGINEERING HIGHLIGHT CARD */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold rounded-md border border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Executive Metallurgical Conclusion</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Guaranteed Karat Precision with Zero Gold Giveaway
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-amber-300 font-semibold">
                  Conclusion:
                </strong>{" "}
                Thanks to a very accurate underwater weighing system, the
                machine monitors and regulates the carat of the jewels produced
                with absolute precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Hallmark Rejections:</strong> Eliminates
                    under-karat bath spikes.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Over-Karat Losses:</strong> Stops giving away
                    755‰ gold for 750‰ pieces.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Autonomous Closed-Loop:</strong> Self-correcting
                    current density and bath replenishment.
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-3">
              <button
                onClick={() => onOpenEnquireModal?.("carat-control-lab")}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Consult Carat Regulation Engineer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] font-mono text-slate-400 text-center">
                ISO 9202 / BIS Hallmark Compliant Systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
