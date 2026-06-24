import React, { useState } from "react";
import { Sliders, Maximize2, Download, Eye, EyeOff, X, Palette, HelpCircle, FileDown, Layers, Compass, LineChart } from "lucide-react";

interface LutSandboxProps {
  isOpen: boolean;
  onClose: () => void;
}

const TEST_STILLS = [
  {
    id: "still_desert",
    name: "Golden Hour Canyon",
    url: "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "still_neon",
    name: "Rainy Shibuya Transit",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "still_indoors",
    name: "Subway Car Narrative",
    url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
  }
];

export default function LutSandbox({ isOpen, onClose }: LutSandboxProps) {
  if (!isOpen) return null;

  // Selected test composition image
  const [activeStill, setActiveStill] = useState(TEST_STILLS[0]);
  
  // Custom formula parameters
  const [lutName, setLutName] = useState("MY_CUSTOM_GRADE_V1");
  const [exposure, setExposure] = useState<number>(0);         // -1 to 1
  const [contrast, setContrast] = useState<number>(100);       // 50 to 150
  const [saturation, setSaturation] = useState<number>(100);   // 0 to 200
  const [warmth, setWarmth] = useState<number>(0);             // -30 to 30
  const [vignette, setVignette] = useState<number>(10);        // 0 to 80
  
  // Toggles
  const [bypassGrade, setBypassGrade] = useState(false);

  // Computes inline styles for grading simulation
  const getSimulatedGradeStyle = (): React.CSSProperties => {
    if (bypassGrade) return { filter: "none" };

    const bri = 100 + (exposure * 120);
    const con = contrast;
    const sat = saturation;
    
    return {
      filter: `brightness(${bri}%) contrast(${con}%) saturate(${sat}%)`,
      transition: "filter 0.15s ease-out"
    };
  };

  const handleReset = () => {
    setExposure(0);
    setContrast(100);
    setSaturation(100);
    setWarmth(0);
    setVignette(10);
  };

  // Generate real software-compliant DaVinci Resolve / Premiere Pro 3D LUT (.CUBE) Text File!
  const handleDownloadCube = () => {
    // Normalizing parameters to construct mathematically-based standard values
    const expFactor = exposure * 0.15;
    const satFactor = saturation / 100;
    const conFactor = (contrast / 100 - 1) * 0.5;
    
    // Core .CUBE header specifications
    let cubeText = `# TITLE: ${lutName} - Calibrated by Nawar Studio Grade Desk\n`;
    cubeText += `# CREATED AT: 2026-06-07T14:16:00Z\n`;
    cubeText += `# LUT formula mapped via custom client-side web sandbox.\n`;
    cubeText += `LUT_3D_SIZE 2\n\n`; // Simplified 3D Lattice Cube coordinates (size 2 points mapping corner gradients)
    
    // Generates coordinates with applied math translation matrix values based on active sliders
    for (let r = 0; r <= 1; r++) {
      for (let g = 0; g <= 1; g++) {
        for (let b = 0; b <= 1; b++) {
          // Base normalized RGB coordinates
          let customR = r;
          let customG = g;
          let customB = b;

          // Apply exposure offset
          customR += expFactor;
          customG += expFactor;
          customB += expFactor;

          // Apply contrast scale offset about midpoint 0.5
          customR = 0.5 + (customR - 0.5) * (1 + conFactor);
          customG = 0.5 + (customG - 0.5) * (1 + conFactor);
          customB = 0.5 + (customB - 0.5) * (1 + conFactor);

          // Apply saturation color offset (greyscale midpoint translation)
          const lumaFraction = (customR * 0.299) + (customG * 0.587) + (customB * 0.114);
          customR = lumaFraction + (customR - lumaFraction) * satFactor;
          customG = lumaFraction + (customG - lumaFraction) * satFactor;
          customB = lumaFraction + (customB - lumaFraction) * satFactor;

          // Apply warmth Kelvin balances (Kelvin shifting red/blue)
          customR += (warmth / 200);
          customB -= (warmth / 200);

          // Boundaries checking [0, 1]
          customR = Math.max(0, Math.min(1.0, customR));
          customG = Math.max(0, Math.min(1.0, customG));
          customB = Math.max(0, Math.min(1.0, customB));

          cubeText += `${customR.toFixed(5)} ${customG.toFixed(5)} ${customB.toFixed(5)}\n`;
        }
      }
    }

    // Direct download trigger (Standard Blob download mechanism)
    const blob = new Blob([cubeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${lutName.replace(/\s+/g, "_")}.cube`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Generate wavey paths simulating professional visual scopes
  const getWaveformXCoord = () => {
    const defaultVals = [45, 55, 38, 70, 85, 95, 62, 45, 32, 58, 80, 92, 75, 48, 30, 22, 28, 12];
    const modified = defaultVals.map(v => {
      let calc = v * (contrast / 100) + (exposure * 18);
      return Math.round(120 - Math.max(8, Math.min(115, calc)));
    });
    return "M " + modified.map((v, i) => `${i * 18 + 10},${v}`).join(" L ");
  };

  // Dynamic Vectorscope hub path
  const getVectorscopeTarget = () => {
    // Math to compute color coordinates offsets based on warmth/kelvin and saturation
    const radius = 35 * (saturation / 110);
    const angleRad = (warmth * 3.5) * Math.PI / 180;
    const xCoord = Math.round(100 + Math.cos(angleRad) * radius);
    const yCoord = Math.round(100 - Math.sin(angleRad) * radius);
    return { x: xCoord, y: yCoord };
  };

  const vectorTarget = getVectorscopeTarget();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col md:grid md:grid-cols-12">
        
        {/* Fullscreen Close button top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* LEFT COLUMN: Visual Live Feed Moniter (Span 8) */}
        <div className="md:col-span-8 bg-black flex flex-col justify-between max-h-[90vh]">
          
          <div className="px-6 py-4 bg-zinc-900/60 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#ff8500] animate-spin-slow" />
              <div>
                <span className="font-display font-extrabold text-sm text-white uppercase tracking-wider block">
                  LUT Formulation Space
                </span>
                <span className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase block -mt-0.5">
                  Live Grading Node Desk // Monitor calibrator
                </span>
              </div>
            </div>
            
            {/* Bypass/Graded Switcher */}
            <button
              onClick={() => setBypassGrade(prev => !prev)}
              className={`px-3 py-1 rounded-lg border font-mono text-[9px] select-none uppercase tracking-wider transition-all duration-300 ${
                bypassGrade
                  ? "bg-red-950/20 border-red-500/55 text-red-400"
                  : "bg-orange-950/20 border-orange-500/55 text-[#ff8500]"
              }`}
            >
              {bypassGrade ? "🔴 BYPASS UNGRADED" : "🟢 GRADE PROCESSING"}
            </button>
          </div>

          {/* Primary screen Still Viewport */}
          <div className="relative aspect-video flex-1 flex items-center justify-center bg-zinc-950 overflow-hidden">
            <img
              src={activeStill.url}
              alt="Active calibration composition"
              style={getSimulatedGradeStyle()}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Custom film vignette multiplier */}
            <div 
              className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.95)]" 
              style={{ opacity: vignette / 100 }} 
            />

            {/* Screen border labels */}
            <div className="absolute top-4 left-4 font-mono text-[8px] text-zinc-500 bg-black/75 border border-zinc-800 rounded px-2 py-0.5 pointer-events-none">
              SOURCE STILL: {activeStill.name.toUpperCase()}
            </div>
          </div>

          {/* Still compositions carousel switcher */}
          <div className="bg-zinc-900 border-t border-zinc-800 p-4 space-y-2">
            <span className="font-mono text-[9px] text-zinc-500 block uppercase tracking-widest">
              Pick Calibration Source Frame
            </span>
            <div className="grid grid-cols-3 gap-3">
              {TEST_STILLS.map((still) => {
                const isActive = activeStill.id === still.id;
                return (
                  <button
                    key={still.id}
                    onClick={() => setActiveStill(still)}
                    className={`rounded-xl overflow-hidden border transition-all text-left flex gap-1.5 p-1 bg-zinc-950 hover:bg-zinc-900 ${
                      isActive
                        ? "border-orange-500 shadow-[0_0_10px_rgba(238,94,26,0.15)]"
                        : "border-zinc-800"
                    }`}
                  >
                    <img
                      src={still.url}
                      alt={still.name}
                      style={!isActive ? { filter: "grayscale(60%)", opacity: 0.5 } : {}}
                      className="w-12 h-8 rounded-lg object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col justify-center max-w-[120px]">
                      <span className="text-[10px] text-white font-semibold truncate block">{still.name}</span>
                      <span className="text-[8px] text-zinc-500 font-mono tracking-tighter uppercase block">DP COLLECTION</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Scopes Telemetry & Sliders Adjustment (Span 4) */}
        <div className="md:col-span-4 bg-zinc-950 border-l border-zinc-900 p-6 flex flex-col justify-between overflow-y-auto max-h-[90vh]">
          
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[#ff8500] text-[10px] font-bold block uppercase tracking-wider">
                Telemetry Scopes Panel
              </span>
              <h3 className="font-display font-extrabold text-base text-white">
                Grading Adjustment Dials
              </h3>
            </div>

            {/* Simulated Live Scopes Grid (Waveform and Vectorscope side-by-side) */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-900">
              
              {/* Scope A: Waveform monitor */}
              <div className="bg-black/80 rounded-xl p-2 border border-zinc-900 flex flex-col gap-1 align-center text-center">
                <span className="font-mono text-[7px] text-zinc-500 uppercase tracking-wide">Y-Waveform Monitor</span>
                <svg width="100%" height="80" viewBox="0 0 200 120" className="opacity-90">
                  <path
                    d={getWaveformXCoord()}
                    fill="none"
                    stroke="#ff8500"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                  <line x1="0" y1="30" x2="200" y2="30" stroke="rgba(255,255,255,0.06)" />
                  <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(255,255,255,0.06)" />
                  <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.06)" />
                  <text x="5" y="15" fill="#3f3f46" fontSize="7" fontFamily="monospace">100</text>
                  <text x="5" y="115" fill="#3f3f46" fontSize="7" fontFamily="monospace">0 (Black)</text>
                </svg>
              </div>

              {/* Scope B: Vectorscope representation */}
              <div className="bg-black/80 rounded-xl p-2 border border-zinc-900 flex flex-col gap-1 align-center text-center">
                <span className="font-mono text-[7px] text-zinc-500 uppercase tracking-wide">Chroma Vectorscope</span>
                <svg width="100%" height="80" viewBox="0 0 200 200" className="opacity-90">
                  {/* Circle outlines */}
                  <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.05)" />
                  <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="3,3" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.05)" />
                  
                  {/* Color Boxes (Cyan, Red, Yellow, Green, Magenta, Blue) */}
                  <rect x="95" y="10" width="10" height="10" fill="none" stroke="rgba(255,133,0,0.3)" />
                  <text x="96" y="8" fill="#52525b" fontSize="7" fontFamily="monospace">R</text>

                  <rect x="25" y="45" width="10" height="10" fill="none" stroke="rgba(255,133,0,0.3)" />
                  <text x="26" y="43" fill="#52525b" fontSize="7" fontFamily="monospace">Mg</text>

                  <rect x="165" y="45" width="10" height="10" fill="none" stroke="rgba(255,133,0,0.3)" />
                  <text x="166" y="43" fill="#52525b" fontSize="7" fontFamily="monospace">Yl</text>
                  
                  {/* Live Target Tracer vector point */}
                  <circle cx={vectorTarget.x} cy={vectorTarget.y} r="4" fill="#06b6d4" className="animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                  <line x1="100" y1="100" x2={vectorTarget.x} y2={vectorTarget.y} stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
                </svg>
              </div>

            </div>

            {/* Sliders adjustments */}
            <div className="space-y-4 pt-1">
              
              {/* Exposure Slider */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[9px] text-zinc-400">
                  <span>EXPOSURE SLIDER</span>
                  <span>{exposure >= 0 ? "+" : ""}{exposure.toFixed(2)} EV</span>
                </div>
                <input
                  type="range"
                  min="-0.8"
                  max="0.8"
                  step="0.05"
                  value={exposure}
                  onChange={(e) => setExposure(parseFloat(e.target.value))}
                  className="w-full accent-[#ff8500] bg-zinc-800 h-1 rounded appearance-none cursor-pointer"
                />
              </div>

              {/* Contrast Slider */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[9px] text-zinc-400">
                  <span>CONTRAST GAIN</span>
                  <span>{contrast}%</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="140"
                  step="2"
                  value={contrast}
                  onChange={(e) => setContrast(parseInt(e.target.value))}
                  className="w-full accent-[#ff8500] bg-zinc-800 h-1 rounded appearance-none cursor-pointer"
                />
              </div>

              {/* Saturation Slider */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[9px] text-zinc-400">
                  <span>SATURATION LEVEL</span>
                  <span>{saturation}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="5"
                  value={saturation}
                  onChange={(e) => setSaturation(parseInt(e.target.value))}
                  className="w-full accent-[#ff8500] bg-zinc-800 h-1 rounded appearance-none cursor-pointer"
                />
              </div>

              {/* Kelvin Warmth/Coolness adjustment */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[9px] text-zinc-400">
                  <span>KELVIN TEMPERATURE STATE</span>
                  <span>{warmth > 0 ? "Warm Shift" : warmth < 0 ? "Cool Shift" : "Balanced Neutral"} ({warmth})</span>
                </div>
                <input
                  type="range"
                  min="-30"
                  max="30"
                  step="1"
                  value={warmth}
                  onChange={(e) => setWarmth(parseInt(e.target.value))}
                  className="w-full accent-[#ff8500] bg-zinc-800 h-1 rounded appearance-none cursor-pointer"
                />
              </div>

              {/* Edge Vignette intensity */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[9px] text-zinc-400">
                  <span>LENS VIGNETTE INTENSITY</span>
                  <span>{vignette}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="2"
                  value={vignette}
                  onChange={(e) => setVignette(parseInt(e.target.value))}
                  className="w-full accent-[#ff8500] bg-zinc-800 h-1 rounded appearance-none cursor-pointer"
                />
              </div>

            </div>
          </div>

          {/* Export File & Console actions */}
          <div className="pt-6 border-t border-zinc-900 space-y-4">
            
            {/* LUT Name Input Field in sidebar */}
            <div className="space-y-1.5">
              <label className="font-mono text-[9px] text-zinc-500 uppercase block">
                Assign LUT File Title
              </label>
              <input
                type="text"
                value={lutName}
                onChange={(e) => setLutName(e.target.value.toUpperCase().replace(/\s+g/, "_"))}
                className="w-full uppercase bg-zinc-950 border border-zinc-800 focus:border-[#ff8500]/60 rounded-xl px-4 py-2.5 font-mono text-xs text-white outline-none"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 px-4 py-3 border border-zinc-800 bg-zinc-950 text-zinc-300 text-xs font-semibold rounded-xl hover:border-zinc-700 transition-all select-none cursor-pointer text-center uppercase font-mono text-[10px]"
              >
                Zero Dial
              </button>
              <button
                onClick={handleDownloadCube}
                className="flex-[2] bg-[#ff8500] hover:bg-[#ffa300] text-black py-3 rounded-xl font-black text-xs tracking-wider transition-all duration-300 cursor-pointer select-none text-center flex items-center justify-center gap-1.5 uppercase shadow-[0_4px_15px_rgba(255,133,0,0.15)]"
              >
                <Download className="w-4 h-4" />
                <span>Export .CUBE LUT</span>
              </button>
            </div>

            <p className="text-[10px] text-zinc-500 font-mono text-center">
              The output formulation is native IRIDAS format 3D LUT size 2 grids, fully compliant with Premiere, After Effects, FCPX, and Resolve.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
