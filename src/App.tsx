import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorksGrid from "./components/WorksGrid";
import Services from "./components/Services";
import OurProcess from "./components/OurProcess";
import BookingContact from "./components/BookingContact";
import Footer from "./components/Footer";
import CVViewer from "./components/CVViewer";
import LutSandbox from "./components/LutSandbox";

export default function App() {
  // Modal states
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isLutSandboxOpen, setIsLutSandboxOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Cross-component estimate export pipeline
  const [exportedEstimate, setExportedEstimate] = useState<{ projectType: string; duration: number; price: number } | null>(null);

  // Master smooth scrolling navigation function
  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === "contact" || sectionId === "contact-channels") {
      setIsBookingOpen(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset slightly to account for the fixed header
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handle selected estimator presets
  const handleSelectEstimate = (estimate: { projectType: string; duration: number; price: number }) => {
    setExportedEstimate(estimate);
    setIsBookingOpen(true);
  };

  const handleClearEstimate = () => {
    setExportedEstimate(null);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#ff8500] selection:text-black relative">
      
      {/* High-end textured background mirroring the uploaded reference (Premium cracked carbon/wood slate with glowing orange veins) */}
        
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Base rich charcoal-black textured backing */}
        <div className="absolute inset-0 bg-[#08080a]" />

        {/* Noise Filter Overlay to simulate fine-grained wood/slate surface texture */}
        <div className="absolute inset-0 opacity-[0.03] md:opacity-[0.06] mix-blend-overlay bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />

        {/* Master SVG containing Glowing Orange-Red Veins and Diagonal Slate Cuts */}
        <svg
  className="absolute inset-0 w-full h-full"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1920 1080"
  preserveAspectRatio="xMidYMid slice"
>
          <defs>
            {/* Glowing filter for hot orange/amber micro-cracks */}
            <filter id="crack-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur1" />
              <feGaussianBlur stdDeviation="2.2" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Soft shadow to drop behind overlapping slate plates */}
            <filter id="plate-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="-4" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.95" />
            </filter>

            {/* Subtle linear brush gradient for carbon/slate plates */}
            <linearGradient id="slate-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#141418" />
              <stop offset="50%" stopColor="#0d0d10" />
              <stop offset="100%" stopColor="#050507" />
            </linearGradient>

            <linearGradient id="slate-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#111116" />
              <stop offset="60%" stopColor="#0a0a0d" />
              <stop offset="100%" stopColor="#030304" />
            </linearGradient>
          </defs>

          {/* Underlay layer: Organic glowing orange crack network layout (Subdued & Blended) */}
          {/* Deep crack 1 */}
          <path d="M -10,350 Q 150,330 280,390 T 500,320 T 720,440 T 950,380 T 1300,520 T 1800,480" 
                fill="none" stroke="#e04f00" strokeWidth="1.2" opacity="0.15" filter="url(#crack-glow)" />
          <path d="M -10,350 Q 150,330 280,390 T 500,320 T 720,440 T 950,380 T 1300,520 T 1800,480" 
                fill="none" stroke="#ff8500" strokeWidth="0.6" opacity="0.3" filter="url(#crack-glow)" />
          <path d="M -10,350 Q 150,330 280,390 T 500,320 T 720,440 T 950,380 T 1300,520 T 1800,480" 
                fill="none" stroke="#ffea78" strokeWidth="0.3" opacity="0.4" />

          {/* Micro branching cracks from deep crack 1 */}
          <path d="M 280,390 Q 320,440 350,520 Q 370,580 430,620" 
                fill="none" stroke="#ff8500" strokeWidth="0.4" opacity="0.25" />

          <path d="M 720,440 Q 780,350 820,220 Q 840,150 910,90" 
                fill="none" stroke="#ff8500" strokeWidth="0.4" opacity="0.2" filter="url(#crack-glow)" />

          {/* Secondary glowing crack network (bottom part) */}
          <path d="M 300,910 Q 550,860 780,950 T 1150,890 T 1600,990" 
                fill="none" stroke="#ff5500" strokeWidth="1" opacity="0.15" filter="url(#crack-glow)" />
          <path d="M 300,910 Q 550,860 780,950 T 1150,890 T 1600,990" 
                fill="none" stroke="#ff8500" strokeWidth="0.5" opacity="0.25" filter="url(#crack-glow)" />

          {/* Branching from bottom crack */}
          <path d="M 780,950 Q 820,830 890,750 T 1020,600" 
                fill="none" stroke="#ff5500" strokeWidth="0.6" opacity="0.15" filter="url(#crack-glow)" />

          {/* Upper crack network */}
          <path d="M 100,120 Q 400,90 680,180 T 1100,100 T 1500,210" 
                fill="none" stroke="#ff8500" strokeWidth="0.4" opacity="0.2" filter="url(#crack-glow)" />


          {/* ---------------- SLATE PLATES (Overlapping Geometry) ---------------- */}
          {/* Top Diagonal Plate with subtle wood grain pattern and shadow casting down */}
          <path d="M -50,-50 L 2100,-50 L 2100,320 L 1300,500 L -50,335 Z" 
                fill="url(#slate-grad-1)" filter="url(#plate-shadow)" />

          {/* Bottom Right Giant Diagonal Plate overlapping the center */}
          <path d="M 2100,450 L 1250,490 L -50,910 L -50,2100 L 2100,2100 Z" 
                fill="url(#slate-grad-2)" filter="url(#plate-shadow)" />


          {/* Core glowing seam cracks exactly between the plates for peak realism */}
          {/* Seam Crack 1 line */}
          <path d="M -50,335 L 1300,500 L 2100,320" 
                fill="none" stroke="#b33600" strokeWidth="3" opacity="0.1" filter="url(#crack-glow)" />
          <path d="M -50,335 L 1300,500 L 2100,320" 
                fill="none" stroke="#ff5500" strokeWidth="1.2" opacity="0.25" filter="url(#crack-glow)" />
          <path d="M -50,335 L 1300,500 L 2100,320" 
                fill="none" stroke="#ff8500" strokeWidth="0.5" opacity="0.4" />

          {/* Seam Crack 2 line */}
          <path d="M -50,910 L 1250,490 L 2100,450" 
                fill="none" stroke="#b33600" strokeWidth="3" opacity="0.15" filter="url(#crack-glow)" />
          <path d="M -50,910 L 1250,490 L 2100,450" 
                fill="none" stroke="#ff6a00" strokeWidth="1.5" opacity="0.3" filter="url(#crack-glow)" />
          <path d="M -50,910 L 1250,490 L 2100,450" 
                fill="none" stroke="#ff8500" strokeWidth="0.6" opacity="0.45" />
          <path d="M -50,910 L 1250,490 L 2100,450" 
                fill="none" stroke="#fffab3" strokeWidth="0.3" opacity="0.5" />


          {/* Micro details: glowing embers sprinkled along the background (Very subtle) */}
          <circle cx="250" cy="380" r="1" fill="#ff8500" opacity="0.3" filter="url(#crack-glow)" />
          <circle cx="340" cy="510" r="0.6" fill="#ffc000" opacity="0.4" />
          <circle cx="700" cy="430" r="1.2" fill="#ff5500" opacity="0.3" filter="url(#crack-glow)" />
          <circle cx="1020" cy="470" r="0.8" fill="#ff8500" opacity="0.35" />
          <circle cx="1180" cy="720" r="0.6" fill="#ff8500" opacity="0.25" />
          <circle cx="850" cy="800" r="1" fill="#ffdd00" opacity="0.4" filter="url(#crack-glow)" />
          <circle cx="1550" cy="190" r="0.8" fill="#ff8500" opacity="0.35" />
        </svg>

        {/* Dynamic vignette atmosphere for premium cinema feeling */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_15%,rgba(0,0,0,0.85)_100%)] mix-blend-multiply" />
      </div>

      {/* 1. Header Capsule with smooth scroll handles */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* 2. Main Page Layout Sections Flow */}
      <main className="w-full relative">
        
        {/* Hero Section containing live grading monitor and running partners band */}
        <Hero 
          onScrollToSection={handleScrollToSection} 
          onOpenCV={() => setIsCVOpen(true)} 
          onOpenLutSandbox={() => setIsLutSandboxOpen(true)} 
        />

        {/* Works Section carousel categorized recent edits */}
        <WorksGrid />

        {/* Services & Live Dynamics Estimator block */}
        <Services 
          onScrollToSection={handleScrollToSection}
          onSelectEstimate={handleSelectEstimate}
        />

        {/* Our Process connected pipeline nodes chain */}
        <OurProcess />

      </main>

      {/* 3. Fully Featured Multi-column Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* 4. Overlay Modals */}
      <CVViewer isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      <LutSandbox isOpen={isLutSandboxOpen} onClose={() => setIsLutSandboxOpen(false)} />
      <BookingContact 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        exportedEstimate={exportedEstimate} 
        onClearEstimate={handleClearEstimate} 
      />

    </div>
  );
}
