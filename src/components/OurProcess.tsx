import React from "react";
import { Search, PenTool, CheckSquare, Send } from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      num: "01",
      title: "Discover & Strategy",
      description: "Understanding your goals, target audience, and creative vision to set a clear artistic direction for your video edit.",
      icon: <Search className="w-5 h-5 text-[#ff8500]" />
    },
    {
      num: "02",
      title: "Creative Production",
      description: "Sculpting your raw footage into a polished, high-fidelity narrative through clean pacing, sound sync, and coloring.",
      icon: <PenTool className="w-5 h-5 text-[#ff8500]" />
    },
    {
      num: "03",
      title: "Review & Revisions",
      description: "Sharing private framing previews, receiving critical timeline feedback, and dialing in revision parameters.",
      icon: <CheckSquare className="w-5 h-5 text-[#ff8500]" />
    },
    {
      num: "04",
      title: "Final Delivery",
      description: "Compiling master exports inside ProRes/RAW containers, tailored on-deck for your targeted social & cinemas.",
      icon: <Send className="w-5 h-5 text-[#ff8500]" />
    }
  ];

  return (
    <section id="process" className="relative bg-transparent py-4 px-4 sm:px-8 overflow-hidden font-sans text-left">
      
      {/* Light highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-b from-[#ff8500]/15 to-transparent blur-[45px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-6">
        
        {/* Centered Title Block Header matching portfolio style */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto mb-2">
          <div className="space-y-3">
            <h2 className="font-display font-light text-4xl sm:text-[46px] text-zinc-350 tracking-tight leading-tight">
              My <span className="font-black text-white relative inline-block">
                Process
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#ff8500] rounded-full shadow-[0_0_8px_#ff8500]" />
              </span>
            </h2>
            <p className="text-zinc-400 font-sans text-xs sm:text-[13px] leading-relaxed max-w-lg mx-auto">
              From concept to completion in four seamless steps
            </p>
          </div>
        </div>

        {/* Steps Connected Loop Row */}
        <div className="relative">
          
          {/* Subtle horizontal connecting line */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[1.5px] bg-gradient-to-r from-[#ff8500]/5 via-[#ff8500]/20 to-[#ff8500]/5 z-0" />

          {/* Grid Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 bg-zinc-950/20 md:bg-transparent p-6 rounded-2xl border border-zinc-900/50 md:border-transparent"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#0a0d14] border border-zinc-800 flex items-center justify-center shadow-lg group hover:border-[#ff8500] transition-colors duration-300 z-10 relative">
                    {step.icon}
                  </div>
                  {/* Glowing halo pulse */}
                  <div className="absolute inset-0 rounded-full bg-[#ff8500]/10 scale-125 blur-sm z-0" />
                  
                  {/* Step index capsule */}
                  <span className="absolute -top-1.5 -right-2 px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[#ff8500] font-mono text-[8px] font-black leading-none">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base text-white">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-[12.5px] leading-relaxed max-w-xs mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
