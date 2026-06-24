import React, { useState, useRef } from "react";
import { PROJECTS_DATA } from "../data/portfolio";
import { PortfolioProject } from "../types";
import { Play, Eye, EyeOff, LayoutGrid, Award, Settings, Layers, Sliders, X, ChevronLeft, ChevronRight, Plus } from "lucide-react";

// Helper to convert YouTube Shorts / Watch / Share links to valid Embed URLs for iframe streaming
function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  
  // Handle shorts
  if (url.includes("youtube.com/shorts/")) {
    const parts = url.split("youtube.com/shorts/");
    if (parts[1]) {
      const id = parts[1].split(/[?#]/)[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&vq=hd1080&rel=0&playsinline=1`;
    }
  }
  
  // Handle watch?v=
  if (url.includes("youtube.com/watch")) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&vq=hd1080&rel=0&playsinline=1`;
    }
  }
  
  // Handle youtu.be/
  if (url.includes("youtu.be/")) {
    const parts = url.split("youtu.be/");
    if (parts[1]) {
      const id = parts[1].split(/[?#]/)[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&vq=hd1080&rel=0&playsinline=1`;
    }
  }
  
  return url;
}

// Helper to convert YouTube link to a silent, looping preview that loads in HD quality directly inside the card background
function getYouTubePreviewUrl(url?: string): string | null {
  if (!url) return null;
  let id = "";
  if (url.includes("youtube.com/shorts/")) {
    const parts = url.split("youtube.com/shorts/");
    if (parts[1]) {
      id = parts[1].split(/[?#]/)[0];
    }
  } else if (url.includes("youtube.com/watch")) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      id = match[2];
    }
  } else if (url.includes("youtu.be/")) {
    const parts = url.split("youtu.be/");
    if (parts[1]) {
      id = parts[1].split(/[?#]/)[0];
    }
  }

  if (id) {
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0&vq=hd720&playsinline=1&enablejsapi=1`;
  }
  return null;
}

export default function WorksGrid() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  // Ref for snap-scroll carousel
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Track active layer filter in theater mode (color steps simulation)
  const [activeGradingStep, setActiveGradingStep] = useState<"flat" | "primaries" | "skin" | "master">("master");

  // CSS Filter string for Flat Ungraded mock look
  const flatSLogStyle: React.CSSProperties = {
    filter: "saturate(35%) contrast(65%) brightness(110%) sepia(5%)",
  };

  // Layered grading steps simulation
  const getStepFilterStyle = (): React.CSSProperties => {
    switch (activeGradingStep) {
      case "flat":
        return flatSLogStyle;
      case "primaries":
        return { filter: "saturate(90%) contrast(105%) brightness(95%)" };
      case "skin":
        return { filter: "saturate(110%) contrast(115%) brightness(95%) sepia(8%)" };
      case "master":
      default:
        return {}; // Implies full master grade look
    }
  };

  // Handle slide/scroll left-right programmatically
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollOffset = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollOffset : scrollLeft + scrollOffset,
        behavior: "smooth"
      });
    }
  };

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS_DATA 
    : activeCategory === "Automotive"
      ? PROJECTS_DATA.filter(p => p.category === "Automotive" || p.title.toLowerCase().includes("automotive") || p.title.toLowerCase().includes("car") || p.description.toLowerCase().includes("car"))
      : activeCategory === "Food"
        ? PROJECTS_DATA.filter(p => p.category === "Food" || p.title.toLowerCase().includes("food") || p.title.toLowerCase().includes("steak") || p.title.toLowerCase().includes("pasta") || p.description.toLowerCase().includes("steak") || p.description.toLowerCase().includes("pasta") || p.description.toLowerCase().includes("food") || p.description.toLowerCase().includes("espresso"))
        : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="relative bg-transparent py-6 px-4 md:px-8 overflow-hidden">
      {/* Absolute ambient lights */}
      <div className="absolute -top-10 left-1/3 w-[450px] h-[350px] bg-[#ff8500]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-8">
        
        {/* Title Block Header matching reference spacing exactly */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 max-w-2xl mx-auto mb-3">
          <div className="space-y-3">
            {/* Elegant sparkle header detail from reference mock */}
            <div className="flex items-center justify-center gap-1.5 text-[#ff8500]">
              <span className="text-[11px] font-mono tracking-widest uppercase">✦ PORTFOLIO SCOPE ✦</span>
            </div>
            
            <h2 className="font-display font-light text-4xl sm:text-[46px] text-zinc-350 tracking-tight leading-tight">
              Let's have a look at my <br />
              <span className="font-black text-white relative inline-block">
                portfolio
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#ff8500] rounded-full shadow-[0_0_8px_#ff8500]" />
              </span>
            </h2>
            
            <p className="text-zinc-500 font-sans text-xs sm:text-[13px] leading-relaxed max-w-lg mx-auto">
              There are many variations of passages of cinematic color grades and narrative packages available, but the majority have suffered alteration in some form.
            </p>
          </div>

          {/* Landscape Straight YouTube Car Video Showcase */}
          <div className="mt-5 mb-6 sm:mt-6 sm:mb-8 w-full flex flex-col items-center justify-center px-4 select-none animate-fade-in">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#ff8500] uppercase mb-4 block">
              ✦ CINEMATIC EDITS ✦
            </span>
            <div className="relative w-full max-w-[480px] aspect-[16/9] bg-[#0e0e11] border border-zinc-850 rounded-[24px] overflow-hidden group shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01] hover:border-[#ff8500]/40 hover:shadow-[0_0_40px_rgba(255,133,0,0.12)]">
              {/* Elegant glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff8500]/10 to-orange-500/10 rounded-[24px] blur opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              
              <div className="relative w-full h-full bg-[#050507] rounded-[24px] overflow-hidden z-10">
                <iframe
                  src="https://www.youtube.com/embed/LHdPwsGdLOI?autoplay=1&mute=1&loop=1&playlist=LHdPwsGdLOI&controls=0&modestbranding=1&rel=0&playsinline=1"
                  title="Cinematic Car Shoot Showcase"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Real-time Status and Media Type Indicators */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 text-[8px] font-mono font-bold text-[#ff8500] uppercase tracking-wider flex items-center gap-1.5 select-none pointer-events-none">
                  <span className="w-1.5 h-1.5 bg-[#ff8500] rounded-full animate-pulse" />
                  LANDSCAPE FEATURE
                </div>
                
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 text-[8px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 select-none pointer-events-none">
                  AUTOMOTIVE SHOT
                </div>
              </div>
            </div>
          </div>

          {/* Filter Pills styled identically to screenshot */}
          <div className="flex flex-nowrap items-center justify-start sm:justify-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-6 pt-3 px-4 max-w-full">
            {["All", "Automotive", "Food", "Ads & VSL"].map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-black text-[10px] uppercase tracking-wider transition-all duration-300 select-none cursor-pointer outline-none shrink-0 ${
                    isActive 
                      ? "bg-white text-black shadow-[0_4px_16px_rgba(255,255,255,0.08)]" 
                      : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-750"
                  }`}
                >
                  {cat === "Short Form" ? "Shorts" : cat === "Long Form" ? "Cinematics" : cat === "Ads & VSL" ? "Ads & Promos" : cat === "Automotive" ? "Automotive" : cat === "Food" ? "Food Edits" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Snap-Scrolling Flex Carousel matching the exact posters */}
        <div className="relative w-full">
          <div 
            ref={scrollRef}
            className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {filteredProjects.map((proj) => {
              const isPlaceholder = proj.id === "placeholder_slot";
              return (
                <div 
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className={`snap-start flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] bg-[#0e0e11] rounded-[28px] overflow-hidden group shadow-2xl relative select-none cursor-pointer border transition-all duration-300 ${
                    isPlaceholder
                      ? "border-dashed border-[#ff8500]/40 hover:border-[#ff8500] hover:shadow-[0_0_20px_rgba(255,133,0,0.15)]"
                      : "border-zinc-900"
                  }`}
                >
                  {/* Aspect Card wrapper */}
                  <div className="aspect-[9/14] relative w-full overflow-hidden bg-zinc-950">
                    {/* Portrait background / Display element */}
                    {isPlaceholder ? (
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e11]/90 via-[#070709] to-black flex flex-col justify-between p-6 z-20">
                        {/* Elegant minimalist header */}
                        <div className="flex justify-between items-start mt-2 pointer-events-none">
                          <span className="text-[8px] font-mono tracking-wider text-[#ff8500] uppercase bg-black/60 px-2.5 py-0.5 rounded border border-zinc-805/60 backdrop-blur-sm">
                            RESERVED
                          </span>
                          <span className="text-[8px] font-mono tracking-wider text-zinc-500 font-bold">
                            SLOT
                          </span>
                        </div>

                        {/* Centered representation of addition */}
                        <div className="flex flex-col items-center justify-center gap-2 py-4 pointer-events-none">
                          <div className="w-12 h-12 rounded-full border border-dashed border-[#ff8500]/30 bg-[#0e0e11] group-hover:bg-[#ff8500]/10 flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,133,0,0.05)] group-hover:shadow-[0_0_20px_rgba(255,133,0,0.15)] text-[#ff8500]/60 group-hover:text-[#ff8500] group-hover:scale-105">
                            <Plus className="w-5 h-5 transition-transform" />
                          </div>
                          <span className="text-[9px] font-mono tracking-widest text-[#ff8500]/70 group-hover:text-[#ff8500] uppercase font-bold text-center mt-1.5 transition-colors">
                            ADD NEW VIDEO
                          </span>
                        </div>

                        {/* Bottom elegant info */}
                        <div className="space-y-1 font-sans text-left pointer-events-none">
                          <span className="text-[8px] font-mono tracking-wider text-zinc-500 font-bold uppercase block tracking-widest">
                            PORTFOLIO EXPANSION
                          </span>
                          <h4 className="text-zinc-300 text-xs font-bold leading-relaxed truncate group-hover:text-white transition-colors">
                            Add your 1 more video slot
                          </h4>
                        </div>
                      </div>
                    ) : proj.videoUrl ? (
                      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
                        <iframe
                          src={getYouTubePreviewUrl(proj.videoUrl) || ""}
                          title={proj.title}
                          className="absolute inset-0 w-full h-full border-0 pointer-events-none select-none scale-[1.25] origin-center"
                          style={{
                            width: "100%",
                            height: "100%"
                          }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                      </div>
                    ) : (
                      <img
                        src={proj.gradeAfterImg}
                        alt={proj.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0"
                        referrerPolicy="no-referrer"
                      />
                    )}

                    {!isPlaceholder && (
                      <>
                        {/* Gradient theme shading overlay based on type */}
                        <div className="absolute inset-0 z-10 transition-colors duration-350 bg-gradient-to-b from-black/25 via-transparent to-black/90 pointer-events-none" />

                        {/* Beautiful Premium Info Overlay matching the exact spacing on reference image */}
                        <div className="absolute inset-0 z-20 pointer-events-none p-5 flex flex-col justify-between">
                          {/* Elegant minimalist header */}
                          <div className="flex justify-between items-start mt-2">
                            <span className="text-[8px] font-mono tracking-wider text-[#ff8500] uppercase bg-black/60 px-2.5 py-0.5 rounded border border-zinc-800/60 backdrop-blur-sm">
                              {proj.resolution || "4K RED RAW"}
                            </span>
                            <span className="text-[8px] font-mono tracking-wider text-zinc-500 font-bold">
                              {proj.year || "2025"}
                            </span>
                          </div>

                          {/* Bottom elegant info */}
                          <div className="space-y-1 font-sans text-left">
                            <span className="text-[8px] font-mono tracking-wider text-zinc-400 font-bold uppercase block tracking-widest">
                              {proj.client}
                            </span>
                            <h4 className="text-white text-sm font-extrabold uppercase tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] truncate">
                              {proj.title}
                            </h4>
                          </div>
                        </div>

                        {/* Minimal hover overlay highlights */}
                        <div className="absolute inset-0 z-30 transition-colors duration-300 group-hover:bg-black/15 pointer-events-none" />
                      </>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation Arrow elements matching design exactly */}
        <div className="flex flex-col items-center justify-center gap-6 pt-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full border border-zinc-800 hover:border-zinc-705 hover:bg-zinc-950/60 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer outline-none active:scale-95 select-none"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-[18px] h-[18px]" />
            </button>
            
            <button 
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full bg-[#ff8500] hover:bg-[#ffa300] text-black flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_4px_16px_rgba(255,133,0,0.25)] outline-none active:scale-95 select-none"
              aria-label="Next Project"
            >
              <ChevronRight className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>

        {/* 🎬 THEATER MODE / PRODUCTION WORKSPACE MODAL OVERLAY (KEEPS EXQUISITE RICH FUNCTIONALITY) */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
            
            <div className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col md:grid md:grid-cols-12 max-h-[90vh] shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
              
              {/* Close Button top right */}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setActiveGradingStep("master");
                }}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Grid Left: Visual Player & Nodes (Column Span 7) */}
              <div className="md:col-span-8 bg-black flex flex-col justify-between">
                
                {/* Viewport Frame */}
                <div className="relative aspect-video flex-1 flex items-center justify-center bg-zinc-950 overflow-hidden">
                  {selectedProject.id === "placeholder_slot" ? (
                    <div className="absolute inset-0 bg-[#070709] flex flex-col items-center justify-center p-6 text-center z-10 border border-zinc-900 overflow-y-auto">
                      <div className="w-12 h-12 rounded-full border border-dashed border-[#ff8500]/40 bg-[#0e0e11] flex items-center justify-center mb-3 text-[#ff8500] shadow-[0_0_20px_rgba(255,133,0,0.1)]">
                        <Plus className="w-6 h-6 animate-pulse" />
                      </div>
                      <h3 className="font-display text-white text-md font-extrabold uppercase tracking-wide mb-1">RESERVED VIDEO SPACE</h3>
                      <p className="text-zinc-400 text-xs max-w-sm leading-relaxed mb-4">
                        This workspace slot is custom-built to easily host 1 more video. You can integrate your live video showcase here instantly.
                      </p>
                      
                      <div className="bg-black/40 border border-zinc-850 p-3 rounded-xl max-w-md text-left space-y-2">
                        <span className="font-mono text-[8px] text-[#ff8500] block uppercase tracking-widest font-extrabold font-mono">✦ QUICK INTEGRATION GUIDE</span>
                        <p className="text-[10px] text-zinc-450 leading-relaxed font-mono">
                          1. Open <code className="text-white font-bold bg-zinc-900/60 px-1 py-0.5 rounded">src/data/portfolio.ts</code><br />
                          2. Locate the <code className="text-white font-bold bg-zinc-900/60 px-1 py-0.5 rounded">placeholder_slot</code> object<br />
                          3. Update <code className="text-[#ff8500] font-bold">videoUrl</code> with your YouTube Shorts/Watch link, update details, and save.
                        </p>
                      </div>
                    </div>
                  ) : selectedProject.videoUrl ? (
                    <iframe
                      src={getYouTubeEmbedUrl(selectedProject.videoUrl) || ""}
                      title={selectedProject.title}
                      style={getStepFilterStyle()}
                      className="w-full h-full border-0 absolute inset-0 z-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={selectedProject.gradeAfterImg}
                      alt={selectedProject.title}
                      style={getStepFilterStyle()}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Scope Overlay overlay (bottom left) */}
                  <div className="absolute bottom-3 left-3 bg-black/85 border border-zinc-800/80 rounded-xl p-2.5 select-none w-36 pointer-events-none font-mono z-10">
                    <span className="text-[7px] text-zinc-500 block mb-1">🔴 REAL HISTOGRAM</span>
                    <div className="flex items-end gap-1 h-12 pt-1">
                      {selectedProject.scopeLogs.histogram.map((freq, i) => (
                        <div 
                          key={i} 
                          className="bg-[#ff8500]/80 w-1 rounded-sm"
                          style={{ 
                            height: `${(freq / 160) * 100}%`,
                            opacity: activeGradingStep === "flat" ? 0.3 : 1
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Camera overlay boundaries (active look) */}
                  <div className="absolute inset-4 border border-white/5 pointer-events-none flex flex-col justify-between font-mono text-[7px] text-zinc-400 z-10">
                    <div className="flex justify-between">
                      <span>4K DECODE PLAYBACK</span>
                      <span>TIME: {selectedProject.duration}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span>PRORES RECORD COLOR</span>
                      <span>ASPECT: {selectedProject.aspectRatio}</span>
                    </div>
                  </div>
                </div>

                {/* Multi-Node Grading Stack Step bar (Simulates real node graphs like DaVinci) */}
                <div className="bg-zinc-900 border-t border-zinc-800 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-[#ff8500]" />
                      <span>Node Pipeline Workspace</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#ff8500]">
                      ACTIVE NODE: {activeGradingStep.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {/* Step 1: Flat */}
                    <button
                      onClick={() => setActiveGradingStep("flat")}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        activeGradingStep === "flat"
                          ? "border-[#ff8500] bg-orange-950/20 text-[#ff8500]"
                          : "border-zinc-800 bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <span className="font-mono text-[9px] text-zinc-500 block uppercase font-bold mb-0.5">01 // SOURCE</span>
                      <span className="text-[10px] font-bold block">Camera S-Log3</span>
                    </button>

                    {/* Step 2: Primaries Balance */}
                    <button
                      onClick={() => setActiveGradingStep("primaries")}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        activeGradingStep === "primaries"
                          ? "border-[#ff8500] bg-orange-950/20 text-[#ff8500]"
                          : "border-zinc-800 bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <span className="font-mono text-[9px] text-zinc-500 block uppercase font-bold mb-0.5">02 // BASE</span>
                      <span className="text-[10px] font-bold block">Primary Balance</span>
                    </button>

                    {/* Step 3: Skin Isolation */}
                    <button
                      onClick={() => setActiveGradingStep("skin")}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        activeGradingStep === "skin"
                          ? "border-[#ff8500] bg-orange-950/20 text-[#ff8500]"
                          : "border-zinc-800 bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <span className="font-mono text-[9px] text-zinc-500 block uppercase font-bold mb-0.5">03 // SECTOR</span>
                      <span className="text-[10px] font-bold block">Skin Isolation</span>
                    </button>

                    {/* Step 4: LUT Master Grade */}
                    <button
                      onClick={() => setActiveGradingStep("master")}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        activeGradingStep === "master"
                          ? "border-[#ff8500] bg-orange-950/20 text-[#ff8500]"
                          : "border-zinc-800 bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <span className="font-mono text-[9px] text-zinc-500 block uppercase font-bold mb-0.5">04 // SHAPE</span>
                      <span className="text-[10px] font-bold block">Signature LUT</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Grid Right: Rich Metadata & Scopes (Column Span 5) */}
              <div className="md:col-span-4 bg-zinc-950 border-l border-zinc-900 p-6 flex flex-col justify-between overflow-y-auto">
                
                {/* Meta details */}
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-[#ff8500]">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-white tracking-tight pt-1">
                      {selectedProject.title}
                    </h3>
                    <p className="font-mono text-zinc-500 text-[10px]">
                      RELEASE YEAR: {selectedProject.year} // RESOLUTION: {selectedProject.resolution}
                    </p>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="pt-4 border-t border-zinc-900 space-y-3.5">
                    {/* Data list rows */}
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-mono">CLIENT BRAND</span>
                      <span className="text-white font-medium">{selectedProject.client}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-mono">TIMELINE RUNTIME</span>
                      <span className="text-white font-medium">{selectedProject.duration}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-mono">ASPECT RATIO</span>
                      <span className="text-white font-medium">{selectedProject.aspectRatio}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-mono">LUT FORMULA</span>
                      <span className="text-[#ff8500] font-mono">{selectedProject.lutPresetUsed}</span>
                    </div>
                  </div>
                </div>

                {/* Live waveform vectorscope display simulator */}
                <div className="pt-6 mt-6 border-t border-zinc-900 space-y-2.5">
                  <span className="font-mono text-[9px] text-zinc-500 block uppercase tracking-wider">
                    Waveform Monitor // Intensity Luminance
                  </span>
                  
                  {/* Waveform monitor visual box */}
                  <div className="bg-black/80 rounded-xl p-3 border border-zinc-900">
                    <svg width="100%" height="60" viewBox="0 0 200 100" className="opacity-90">
                      <path
                        d="M 10,70 L 25,65 L 45,50 L 60,65 L 85,85 L 105,75 M 105,75 L 125,55 L 140,40 L 160,52 L 175,65 L 190,72"
                        className="transition-all duration-300"
                        fill="none"
                        stroke="#ff8500"
                        strokeWidth="2"
                      />
                      <path
                        d="M 5,85 L 30,75 L 50,60 L 70,75 L 90,90 L 110,80 M 110,80 L 130,60 L 150,50 L 170,58 L 180,72 L 195,85"
                        fill="none"
                        stroke="rgba(255,133,0,0.3)"
                        strokeWidth="1.5"
                      />
                      {/* Scale markings */}
                      <text x="5" y="15" fill="#52525b" fontSize="8" fontFamily="monospace">100 IRE</text>
                      <text x="5" y="55" fill="#52525b" fontSize="8" fontFamily="monospace">50 IRE</text>
                      <text x="5" y="95" fill="#52525b" fontSize="8" fontFamily="monospace">0 IRE (Shadow)</text>
                      <line x1="0" y1="10" x2="200" y2="10" stroke="rgba(255,255,255,0.06)" />
                      <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.06)" />
                      <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.06)" />
                    </svg>
                  </div>
                  
                  <div className="text-[9px] text-zinc-500 font-mono text-center">
                    Simulating DaVinci Resolve YRGB Color Trace Engine.
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        )}

      </div>
    </section>
  );
}
