import React, { useState } from "react";
import { Sparkles, CheckCircle2, ChevronRight, X, Cpu, Film, Flame, Video, Smartphone, TrendingUp } from "lucide-react";

interface ServicesProps {
  onScrollToSection: (id: string) => void;
  onSelectEstimate?: (estimate: { projectType: string; duration: number; price: number }) => void;
}

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  tags: string[];
  specs: { label: string; value: string }[];
  deliverables: string[];
  software: string[];
  baseBudget: number;
}

export default function Services({ onScrollToSection, onSelectEstimate }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      id: "editing",
      title: "Video Editing",
      category: "NARRATIVE & CUT",
      description: "Transform raw footage into polished, professional content that captivates audiences and drives engagement across all platforms.",
      longDescription: "High-end narrative assembly that prioritizes story structure, pacing, sound synchronization, and emotional beats. Perfect for commercials, features, and high-production-value videos looking for deliberate visual rhythm.",
      icon: <Video className="w-5.5 h-5.5 text-white stroke-[1.25]" />,
      tags: ["Narrative pacing", "Proxy workflow", "A-cut select master"],
      specs: [
        { label: "Delivery", value: "Master ProRes 4444 XQ" },
        { label: "Supported Footage", value: "Arri RAW, RED R3D, Sony OCNo" },
        { label: "Timeline Resolution", value: "Up to 8K DCI Mastered" }
      ],
      deliverables: [
        "Offline Assembly Draft",
        "Fine Cut with basic temp music track",
        "EDL/XML generation for color grading session",
        "Final Master with baked subtitles and audio stems"
      ],
      software: ["Adobe Premiere Pro", "DaVinci Resolve Studio"],
      baseBudget: 2500
    },
    {
      id: "shorts",
      title: "Shorts & Reels",
      category: "VERTICAL FORMATS",
      description: "Create viral-worthy vertical content optimized for TikTok, Instagram Reels, and YouTube Shorts that maximizes reach and conversion.",
      longDescription: "Ultra-precise formatting tailored specifically for vertical screens. This service leverages dynamic text overlays, fast-moving cuts, hook-focused introductions, and custom motion markers to maximize watch-time and trigger algorithms.",
      icon: <Smartphone className="w-5.5 h-5.5 text-white stroke-[1.25]" />,
      tags: ["Algorithm hook", "Dynamic subtitles", "Vertical conform"],
      specs: [
        { label: "Aspect Ratio", value: "9:16 Vertical Master" },
        { label: "Average Duration", value: "15 to 60 Seconds" },
        { label: "Engagement Rate", value: "Designed for high retention" }
      ],
      deliverables: [
        "Highly engaging viral hook variants",
        "Custom dynamic typographic rendering",
        "Fully sound-designed high impact audio",
        "Thumbnail freeze-frame capture sets"
      ],
      software: ["Premiere Pro", "After Effects"],
      baseBudget: 800
    },
    {
      id: "motion",
      title: "Motion Graphics",
      category: "ANALOG & DIGITAL FX",
      description: "Elevate your brand with stunning animations, dynamic text, and visual effects that make your content stand out from the competition.",
      longDescription: "Bespoke look development and dynamic typography built from scratch. Add premium animations, vector elements, lower thirds, callouts, and clean 2D/3D graphics to give your master copies full premium value.",
      icon: <Sparkles className="w-5.5 h-5.5 text-white stroke-[1.25]" />,
      tags: ["Kinetic text", "Logo intro animation", "Vector elements conform"],
      specs: [
        { label: "Render Precision", value: "32-bit float processing" },
        { label: "Animation Style", value: "Bespoke flat & custom 3D" },
        { label: "Delivery Formats", value: "Apple ProRes 4444 with Alpha Channel" }
      ],
      deliverables: [
        "Kinetic visual titles & lower thirds",
        "Animated vector assets",
        "Clean loopable motion backdrops",
        "Final video master with integrated graphics"
      ],
      software: ["Adobe After Effects", "Cinema 4D"],
      baseBudget: 1500
    },
    {
      id: "ads",
      title: "Commercial Ads",
      category: "BRAND ACQUISITION",
      description: "Produce high-converting advertisements that communicate your message clearly and inspire action from your target audience.",
      longDescription: "Sound is 50% of the screen experience, matched with high-fidelity storytelling graphics. We craft customized, immersive environments using custom sound design, color precision, and dynamic action edits aimed at scaling conversion rates.",
      icon: <TrendingUp className="w-5.5 h-5.5 text-white stroke-[1.25]" />,
      tags: ["High-converting style", "Call-to-action hooks", "Ad variations"],
      specs: [
        { label: "Hook variants", value: "Multiple intro styles" },
        { label: "Ad formats", value: "Landscape, Square & Vertical" },
        { label: "Deliverable", value: "Ad-platform optimized masters" }
      ],
      deliverables: [
        "Original standard duration commercial cut",
        "Multiple creative dynamic hooks",
        "Aspect ratio conforms for all main social networks",
        "Clear call-to-actions master visual overlay"
      ],
      software: ["DaVinci Resolve Studio", "Premiere Pro", "After Effects"],
      baseBudget: 1800
    }
  ];

  const handleSelectServicePipeline = (service: ServiceDetail) => {
    if (onSelectEstimate) {
      onSelectEstimate({
        projectType: service.title,
        duration: 10,
        price: service.baseBudget
      });
    }
    setSelectedService(null);
    onScrollToSection("contact-channels");
  };

  return (
    <section id="services" className="relative bg-transparent py-4 px-4 sm:px-8 overflow-hidden font-sans">
      
      {/* Immersive cinematic background lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#ff8500]/[0.01] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#ff8500]/[0.06] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#ff8500]/[0.005] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-8 relative z-10">
        
        {/* Centered Title Block Header matching portfolio style, with Book a Call button on the right */}
        <div className="relative flex flex-col items-center justify-center text-center pb-2">
          <div className="space-y-3 mx-auto">
            <h2 className="font-display text-4xl sm:text-[46px] text-white tracking-tight leading-tight">
              <span className="font-black relative inline-block">
                Services
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#ff8500] rounded-full shadow-[0_0_8px_#ff8500]" />
              </span>
            </h2>
            <p className="text-zinc-400 font-sans text-xs sm:text-[13px] leading-relaxed max-w-md mx-auto">
              Comprehensive video production solutions tailored to your goals
            </p>
          </div>

          <div className="mt-4 md:absolute md:right-0 md:bottom-[6px] md:mt-0">
            <button 
              onClick={() => onScrollToSection("contact-channels")}
              className="px-6 py-3 bg-[#ff8500] hover:bg-[#ffa300] text-white font-medium rounded-full text-sm select-none cursor-pointer tracking-wide transition-all duration-300 shadow-[0_4px_14px_rgba(255,133,0,0.15)] flex items-center gap-2 shrink-0"
            >
              <span>Book a Call &nbsp;↗</span>
            </button>
          </div>
        </div>

        {/* Dynamic Service Cards with elegant thin white-border style of reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-2">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group p-5 rounded-[18px] border border-zinc-800/70 bg-zinc-950/20 hover:border-zinc-700 hover:bg-zinc-900/10 shadow-lg transition-all duration-500 text-left flex flex-col justify-between cursor-pointer min-h-[200px]"
            >
              <div className="space-y-4">
                
                {/* Thin outline icon at the top left */}
                <div className="w-6 h-6 flex items-center justify-start text-zinc-400 group-hover:text-[#ff8500] group-hover:scale-105 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Text Blocks */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-semibold text-base text-white group-hover:text-[#ff8500] transition-all duration-300 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-[11px] leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Pipeline / Workflow Detailed Slate Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div 
            className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-900 rounded-[35px] shadow-3xl overflow-hidden text-left flex flex-col max-h-[90vh] md:max-h-[85vh] animate-scale-up"
          >
            {/* Soft decorative glow header inside modal */}
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-[radial-gradient(circle_at_top,rgba(255,133,0,0.06)_0%,transparent_70%)] pointer-events-none" />

            {/* Modal Navigation Close Header */}
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-zinc-900/80 shrink-0 relative z-10">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#ff8500] uppercase tracking-[0.2em] font-bold">
                  STUDIO WORKFLOW PIPELINE // {selectedService.category}
                </span>
                <h3 className="font-display font-black text-2xl md:text-3xl text-white tracking-wide uppercase">
                  {selectedService.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="w-10 h-10 rounded-full border border-zinc-800 hover:border-zinc-700 bg-[#07090e]/70 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Scroll area */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8 relative z-10 font-sans font-light">
              
              {/* Primary overview definition */}
              <div className="space-y-3">
                <p className="text-white text-base md:text-lg leading-relaxed">
                  {selectedService.longDescription}
                </p>
                
                {/* Tech Specs Bento Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {selectedService.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="bg-zinc-905 bg-zinc-900/40 border border-zinc-800/85 p-4 rounded-2xl flex flex-col justify-center">
                      <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">{spec.label}</span>
                      <span className="font-display font-extrabold text-white text-sm mt-1">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parallel lists: Deliverables vs Software Tools */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                
                {/* Deliverables checklist column */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#ff8500] flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#ff8500]" />
                    What you receive (Deliverables)
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex gap-3 text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                        <span className="font-mono text-[11px] text-zinc-650 mt-0.5 font-bold">[{dIdx + 1}]</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software Pipeline Column */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#ff8500] flex items-center gap-2 font-medium">
                    <Cpu className="w-4 h-4 text-[#ff8500]" />
                    Software & Pipeline Stack
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedService.software.map((sw, swIdx) => (
                      <div 
                        key={swIdx} 
                        className="flex items-center gap-2 bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-2.5 shadow-md hover:border-zinc-805 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff8500] shadow-[0_0_8px_#ff8500]" />
                        <span className="font-display font-bold text-xs text-white uppercase tracking-wider">
                          {sw}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Aesthetic visual representation block */}
                  <div className="bg-[#05060a]/50 border border-zinc-900 rounded-2xl p-4 flex items-center gap-3 relative overflow-hidden mt-6">
                    <Film className="w-8 h-8 text-zinc-500 opacity-60 shrink-0" />
                    <div className="space-y-0.5">
                      <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest block">COLOR MASTER PROCESS</span>
                      <span className="font-sans text-xs text-zinc-450 leading-normal block">Conformed via High-Precision ACES or DaVinci YRGB Wide Gamut.</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Sticky Action Footer */}
            <div className="p-6 bg-zinc-900 border-t border-zinc-900/80 flex flex-col sm:flex-row gap-4 items-center justify-between shrink-0 relative z-10">
              <div className="flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-[#ff8500] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase">
                  Have a custom specifications deck? Let's implement it.
                </span>
              </div>
              <button 
                onClick={() => handleSelectServicePipeline(selectedService)}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#ff8500] hover:bg-[#ffa300] text-black rounded-xl font-bold text-xs tracking-wider transition-all duration-300 cursor-pointer select-none uppercase shadow-lg flex items-center justify-center gap-1.5"
              >
                <span>Book This Workline</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
