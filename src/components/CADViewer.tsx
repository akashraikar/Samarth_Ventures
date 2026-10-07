import React, { useState, useEffect, useRef } from 'react';
import { 
  RotateCw, 
  Maximize2, 
  Eye, 
  Layers, 
  Sliders, 
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';

interface CADViewerProps {
  initialMaterial?: 'gold' | 'platinum' | 'rosegold' | 'wireframe';
  title?: string;
}

export const CADViewer: React.FC<CADViewerProps> = ({
  initialMaterial = 'gold',
  title = 'Rhinoceros 8 Viewport: Diamond Solitaire & Micro-Pavé Halo'
}) => {
  const [viewportMode, setViewportMode] = useState<'perspective' | 'top' | 'front' | 'wireframe'>('perspective');
  const [material, setMaterial] = useState<'gold' | 'platinum' | 'rosegold' | 'zebra'>(initialMaterial === 'wireframe' ? 'zebra' : initialMaterial);
  const [isRotating, setIsRotating] = useState(true);
  const [angle, setAngle] = useState(45);
  const [showMeshGrid, setShowMeshGrid] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let lastTime = performance.now();
    const updateRotation = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;
      if (isRotating) {
        setAngle((prev) => (prev + (delta * 0.035)) % 360);
      }
      animationFrameRef.current = requestAnimationFrame(updateRotation);
    };

    animationFrameRef.current = requestAnimationFrame(updateRotation);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isRotating]);

  // Color mappings
  const materialStyles = {
    gold: {
      metalPrimary: '#D97706',
      metalSecondary: '#F59E0B',
      metalHighlight: '#FEF3C7',
      label: '18K Yellow Gold (Au 750)',
      density: '15.5 g/cm³',
      weight: '6.84 g'
    },
    platinum: {
      metalPrimary: '#64748B',
      metalSecondary: '#94A3B8',
      metalHighlight: '#F8FAFC',
      label: '950 Platinum (Pt 950)',
      density: '21.4 g/cm³',
      weight: '9.45 g'
    },
    rosegold: {
      metalPrimary: '#BE123C',
      metalSecondary: '#FB7185',
      metalHighlight: '#FFE4E6',
      label: '18K Rose Gold (Au 750 + Cu)',
      density: '15.2 g/cm³',
      weight: '6.71 g'
    },
    zebra: {
      metalPrimary: '#0284C7',
      metalSecondary: '#38BDF8',
      metalHighlight: '#E0F2FE',
      label: 'CAD Curvature & Zebra Analysis',
      density: 'NURBS G2 Metrology',
      weight: '0.00 mm deviation'
    }
  };

  const currentMat = materialStyles[material];

  // Mathematical rendering calculation for ring rotation in 2.5D SVG
  const rad = (angle * Math.PI) / 180;
  const sinVal = Math.sin(rad);
  const cosVal = Math.cos(rad);

  return (
    <div className="bg-[#0B1120] text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
      {/* Top CAD Header Bar */}
      <div className="bg-[#0F172A] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="font-mono text-slate-300 font-medium">
            {title}
          </span>
          <span className="hidden sm:inline font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40 text-[10px]">
            Rhino 8.6 NURBS
          </span>
        </div>

        {/* Viewport Selectors */}
        <div className="flex items-center bg-slate-900/90 rounded-lg p-0.5 border border-slate-700">
          {(['perspective', 'top', 'front', 'wireframe'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewportMode(mode)}
              className={`px-2.5 py-1 text-[11px] font-medium rounded capitalize transition-all cursor-pointer ${
                viewportMode === mode
                  ? 'bg-[#0085CB] text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Main Viewport Workspace */}
      <div className="relative aspect-16/10 sm:aspect-16/9 bg-[#070B14] cad-dark-grid flex items-center justify-center overflow-hidden p-6 select-none">
        
        {/* Viewport Floating Metrology HUD */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-lg p-2.5 space-y-1 text-[11px] font-mono shadow-lg">
            <div className="text-slate-400 flex items-center gap-2">
              <span>View:</span>
              <span className="text-white font-semibold uppercase">{viewportMode}</span>
            </div>
            <div className="text-slate-400 flex items-center gap-2">
              <span>Finger Size:</span>
              <span className="text-sky-400">US 6.5 (16.92mm Ø)</span>
            </div>
            <div className="text-slate-400 flex items-center gap-2">
              <span>Prong Height:</span>
              <span className="text-emerald-400">1.15mm (±0.01)</span>
            </div>
            <div className="text-slate-400 flex items-center gap-2">
              <span>G2 Continuity:</span>
              <span className="text-amber-400">Verified G0/G1/G2</span>
            </div>
          </div>
        </div>

        {/* Viewport Floating Material HUD */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-lg p-2.5 space-y-1 text-[11px] font-mono shadow-lg text-right">
            <div className="text-slate-400">
              Cast Weight: <span className="text-amber-300 font-bold">{currentMat.weight}</span>
            </div>
            <div className="text-slate-400">
              Alloy: <span className="text-slate-200">{currentMat.label}</span>
            </div>
            <div className="text-slate-400">
              Gem Carat: <span className="text-sky-300 font-semibold">1.25 ct (Center) + 0.42 ct (Pavé)</span>
            </div>
          </div>
        </div>

        {/* Simulated 2.5D CAD Geometry Turntable */}
        <div 
          className="relative w-full max-w-md h-72 flex items-center justify-center transition-transform"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full filter drop-shadow-[0_15px_30px_rgba(0,133,203,0.2)]"
          >
            <defs>
              {/* Radial gradient for main diamond brilliance */}
              <radialGradient id="gemGlow" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stop-color="#FFFFFF" />
                <stop offset="40%" stop-color="#BAE6FD" />
                <stop offset="85%" stop-color="#0284C7" />
                <stop offset="100%" stop-color="#0F172A" />
              </radialGradient>

              {/* Linear gradient for metallic ring band */}
              <linearGradient id="metalBandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color={currentMat.metalPrimary} />
                <stop offset="35%" stop-color={currentMat.metalSecondary} />
                <stop offset="65%" stop-color={currentMat.metalHighlight} />
                <stop offset="100%" stop-color={currentMat.metalPrimary} />
              </linearGradient>

              {/* Wireframe Stroke pattern */}
              <pattern id="wireGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0284C7" stroke-width="0.5" stroke-opacity="0.3" />
              </pattern>
            </defs>

            {/* Coordinate Axis Indicator in 3D */}
            <g transform="translate(40, 280)" opacity="0.6">
              <line x1="0" y1="0" x2="30" y2="0" stroke="#EF4444" strokeWidth="2" />
              <text x="34" y="4" fill="#EF4444" fontSize="10" fontFamily="monospace">X</text>
              <line x1="0" y1="0" x2="0" y2="-30" stroke="#10B981" strokeWidth="2" />
              <text x="-4" y="-34" fill="#10B981" fontSize="10" fontFamily="monospace">Y</text>
              <line x1="0" y1="0" x2="-18" y2="18" stroke="#3B82F6" strokeWidth="2" />
              <text x="-26" y="26" fill="#3B82F6" fontSize="10" fontFamily="monospace">Z</text>
            </g>

            {/* VIEWPORT MODE LOGIC */}
            {viewportMode === 'perspective' && (
              <g transform="translate(200, 160)">
                {/* Ring Shank Base Ellipse */}
                <ellipse
                  cx="0"
                  cy="40"
                  rx={100 + cosVal * 15}
                  ry={35 + Math.abs(sinVal) * 8}
                  fill="none"
                  stroke="url(#metalBandGrad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />

                {/* Inner Shank Thickness Ring */}
                <ellipse
                  cx="0"
                  cy="44"
                  rx={92 + cosVal * 14}
                  ry={30 + Math.abs(sinVal) * 7}
                  fill="none"
                  stroke={currentMat.metalPrimary}
                  strokeWidth="3"
                  strokeDasharray={showMeshGrid ? '3 3' : 'none'}
                  strokeOpacity="0.8"
                />

                {/* CAD Iso-curves / construction lines along shank */}
                {showMeshGrid && (
                  <>
                    <path
                      d={`M ${-95 * cosVal} 30 Q 0 ${50 + sinVal * 10} ${95 * cosVal} 30`}
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      opacity="0.6"
                    />
                    <path
                      d={`M ${-70 * cosVal} 20 Q 0 ${35 + sinVal * 8} ${70 * cosVal} 20`}
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      opacity="0.4"
                    />
                  </>
                )}

                {/* Micro-pavé Diamonds along Shoulders */}
                {[-50, -35, -20, 20, 35, 50].map((offset, idx) => (
                  <circle
                    key={idx}
                    cx={offset * (1 + cosVal * 0.15)}
                    cy={15 + Math.abs(offset) * 0.25}
                    r="4"
                    fill="#FFFFFF"
                    stroke="#0284C7"
                    strokeWidth="1"
                  />
                ))}

                {/* Ring Head & Collet Gallery */}
                <path
                  d="M -30 -10 L -45 -65 L 45 -65 L 30 -10 Z"
                  fill="url(#metalBandGrad)"
                  stroke={currentMat.metalPrimary}
                  strokeWidth="2"
                />

                {/* 4 Precision Solitaire Prongs */}
                <rect x="-42" y="-75" width="6" height="22" rx="3" fill="url(#metalBandGrad)" stroke="#FFFFFF" strokeWidth="0.8" />
                <rect x="36" y="-75" width="6" height="22" rx="3" fill="url(#metalBandGrad)" stroke="#FFFFFF" strokeWidth="0.8" />
                <rect x={`calc(-20 + ${cosVal * 12})`} y="-72" width="5" height="18" rx="2.5" fill="url(#metalBandGrad)" />
                <rect x={`calc(15 - ${cosVal * 12})`} y="-72" width="5" height="18" rx="2.5" fill="url(#metalBandGrad)" />

                {/* Brilliant Cut Solitaire Diamond */}
                {/* Crown / Table Facets */}
                <polygon
                  points="0,-105 38,-75 24,-60 -24,-60 -38,-75"
                  fill="url(#gemGlow)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                {/* Pavilion Facets */}
                <polygon
                  points="-38,-75 0,-15 38,-75"
                  fill="url(#gemGlow)"
                  fillOpacity="0.9"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                {/* Internal Reflection Rays */}
                <line x1="0" y1="-105" x2="0" y2="-15" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2 2" />
                <line x1="-24" y1="-60" x2="0" y2="-15" stroke="#38BDF8" strokeWidth="0.8" />
                <line x1="24" y1="-60" x2="0" y2="-15" stroke="#38BDF8" strokeWidth="0.8" />

                {/* Interactive Dynamic Glint */}
                <circle cx={cosVal * 20} cy={-85 + sinVal * 8} r="5" fill="#FFFFFF" opacity="0.8" />
              </g>
            )}

            {viewportMode === 'top' && (
              <g transform="translate(200, 160)">
                {/* Top View: Perfect Concentric Symmetry */}
                <circle cx="0" cy="0" r="100" fill="none" stroke="url(#metalBandGrad)" strokeWidth="16" />
                <circle cx="0" cy="0" r="92" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
                {/* Center Solitaire Diamond Octagon */}
                <polygon
                  points="0,-48 34,-34 48,0 34,34 0,48 -34,34 -48,0 -34,-34"
                  fill="url(#gemGlow)"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />
                {/* Table facet */}
                <polygon
                  points="0,-25 18,-18 25,0 18,18 0,25 -18,18 -25,0 -18,-18"
                  fill="#FFFFFF"
                  fillOpacity="0.4"
                  stroke="#38BDF8"
                  strokeWidth="1"
                />
                {/* 4 Prongs Top */}
                <circle cx="-35" cy="-35" r="5" fill="url(#metalBandGrad)" stroke="#FFFFFF" strokeWidth="1" />
                <circle cx="35" cy="-35" r="5" fill="url(#metalBandGrad)" stroke="#FFFFFF" strokeWidth="1" />
                <circle cx="35" cy="35" r="5" fill="url(#metalBandGrad)" stroke="#FFFFFF" strokeWidth="1" />
                <circle cx="-35" cy="35" r="5" fill="url(#metalBandGrad)" stroke="#FFFFFF" strokeWidth="1" />
              </g>
            )}

            {viewportMode === 'front' && (
              <g transform="translate(200, 160)">
                {/* Front Elevation View */}
                <circle cx="0" cy="30" r="85" fill="none" stroke="url(#metalBandGrad)" strokeWidth="12" />
                <rect x="-85" y="24" width="170" height="12" fill="none" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="2 2" />
                {/* Peg head and Diamond */}
                <path d="M -30 -30 L -45 -85 L 45 -85 L 30 -30 Z" fill="url(#metalBandGrad)" stroke={currentMat.metalPrimary} strokeWidth="1.5" />
                <polygon points="0,-125 45,-85 0,-40 -45,-85" fill="url(#gemGlow)" stroke="#FFFFFF" strokeWidth="1.2" />
              </g>
            )}

            {viewportMode === 'wireframe' && (
              <g transform="translate(200, 160)">
                {/* Pure Mathematical NURBS Wireframe Lines */}
                <ellipse cx="0" cy="40" rx="100" ry="35" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                <ellipse cx="0" cy="45" rx="88" ry="28" fill="none" stroke="#0284C7" strokeWidth="1" />
                {Array.from({ length: 18 }).map((_, i) => {
                  const x = -90 + i * 10;
                  return (
                    <line
                      key={i}
                      x1={x}
                      y1="25"
                      x2={x}
                      y2="55"
                      stroke="#38BDF8"
                      strokeWidth="0.8"
                      strokeOpacity="0.5"
                    />
                  );
                })}
                {/* Triangular Wireframe Diamond Mesh */}
                <polygon points="0,-105 38,-75 0,-15 -38,-75" fill="none" stroke="#00D2FF" strokeWidth="1.5" />
                <line x1="-38" y1="-75" x2="38" y2="-75" stroke="#00D2FF" strokeWidth="1" />
                <line x1="0" y1="-105" x2="0" y2="-15" stroke="#00D2FF" strokeWidth="1" />
                <line x1="-19" y1="-90" x2="0" y2="-15" stroke="#38BDF8" strokeWidth="0.8" />
                <line x1="19" y1="-90" x2="0" y2="-15" stroke="#38BDF8" strokeWidth="0.8" />
              </g>
            )}
          </svg>
        </div>

        {/* Floating Viewport Status Banner */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono transition-colors cursor-pointer"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin text-sky-400' : ''}`} />
            <span>{isRotating ? 'Turntable Active' : 'Turntable Paused'}</span>
          </button>

          <button
            onClick={() => setShowMeshGrid(!showMeshGrid)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors cursor-pointer ${
              showMeshGrid
                ? 'bg-sky-950/80 text-sky-300 border-sky-700'
                : 'bg-slate-900/80 text-slate-400 border-slate-700 hover:text-slate-300'
            }`}
          >
            Grid: {showMeshGrid ? 'ON' : 'OFF'}
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1 bg-slate-900/90 rounded-lg p-1 border border-slate-700 text-xs font-mono">
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.1))}
            className="px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded cursor-pointer"
          >
            -
          </button>
          <span className="px-2 text-slate-400">{Math.round(zoomLevel * 100)}%</span>
          <button
            onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
            className="px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      {/* Bottom Material Selector & Metrology Specs */}
      <div className="bg-[#0F172A] p-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Material Preset Toggles */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-400 font-medium">Material Shader:</span>
          {(['gold', 'platinum', 'rosegold', 'zebra'] as const).map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                material === mat
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full inline-block"
                style={{ backgroundColor: materialStyles[mat].metalPrimary }}
              />
              <span>{mat === 'zebra' ? 'Curvature Analysis' : mat.charAt(0).toUpperCase() + mat.slice(1)}</span>
            </button>
          ))}
        </div>

        {/* Specification callout */}
        <div className="text-xs text-slate-400 flex items-center gap-4">
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Watertight Solid (0 Naked Edges)
          </span>
          <span className="text-slate-500">·</span>
          <span>DLP/SLA 25µm Slicing Ready</span>
        </div>
      </div>
    </div>
  );
};
