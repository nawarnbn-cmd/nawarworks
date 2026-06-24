import React from "react";
import { 
  Instagram, 
  Linkedin, 
  MessageSquare,
  Mail
} from "lucide-react";
// cimmand ti run application ========> npm run dev 
interface HeroProps {
  onScrollToSection: (id: string) => void;
  onOpenCV: () => void;
  onOpenLutSandbox: () => void;
}

export default function Hero({ onScrollToSection, onOpenCV, onOpenLutSandbox }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[85vh] bg-transparent text-white flex flex-col justify-center pt-24 pb-8 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* Background radial soft deep teal gradient aura exactly matching screenshot */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.4)_0%,rgba(0,0,0,0)_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute -left-20 top-1/4 w-96 h-96 bg-zinc-900/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-[#ff8500]/0.04 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        
        {/* Main Columns Grid representing the premium frontpage style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Title & Intro & Actions */}
          <div className="lg:col-span-4 flex flex-col text-left space-y-5 pr-0 lg:pr-4 z-10">
            
            <div className="space-y-4">
              <h1 className="font-display font-extralight text-5xl sm:text-[70px] lg:text-[85px] bg-gradient-to-b from-white via-white to-zinc-300 bg-clip-text text-transparent tracking-normal leading-[1.0] select-none uppercase">
                NAWAR
              </h1>
              
              {/* Brand line with Orange line accent before the label */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#ff8500] inline-block shadow-[0_0_8px_#ff8500]" />
                <span className="font-display font-black text-[11px] sm:text-[12px] text-white tracking-[0.18em] uppercase">
                  VIDEO EDITOR & VIDEOGRAPHER
                </span>
               </div>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-light text-left select-none">
              <span className="block">Low watch time is killing your reach.</span>
              <span className="block">I turn raw footage into cinematic long-form assets</span>
              <span className="block">and viral-style shorts that actually scale</span>
            </p>

            {/* Action buttons matching screenshot pill style */}
            <div className="flex flex-wrap items-center gap-2.5 pt-0">
              <a
                href="https://wa.me/919544992782"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-white hover:bg-zinc-200 text-black text-[10px] font-bold rounded-full flex items-center gap-1 tracking-wider transition-all duration-300 transform active:scale-95 cursor-pointer shadow-md outline-none uppercase no-underline"
              >
                <span>WhatsApp</span>
                <span className="text-[10px] font-bold">&#x2197;</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nawar.nbn@gmail.com&body=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-white hover:bg-zinc-200 text-black text-[10px] font-bold rounded-full flex items-center gap-1 tracking-wider transition-all duration-300 transform active:scale-95 cursor-pointer shadow-md outline-none uppercase no-underline"
              >
                <span>Email</span>
                <span className="text-[10px] font-bold">&#x2197;</span>
              </a>

              <button
                onClick={onOpenCV}
                className="px-3.5 py-1.5 bg-transparent border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 text-white text-[10px] font-bold rounded-full flex items-center gap-1 tracking-wider transition-all duration-300 cursor-pointer outline-none uppercase"
              >
                <span>Download CV</span>
                <span className="text-zinc-500 font-bold text-[10px]">&#x2193;</span>
              </button>
            </div>

            {/* User Trust Banner below the Action buttons */}
            <div className="pt-5">
              
              {/* Avatars stacked with label */}
              <div className="flex items-center gap-4 select-none shrink-0">
                <div className="flex -space-x-3.5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                    alt="Active studio client user review"
                    className="w-10 h-10 rounded-full border-2 border-black object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    alt="Active studio client user review"
                    className="w-10 h-10 rounded-full border-2 border-black object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
                    alt="Active studio client user review"
                    className="w-10 h-10 rounded-full border-2 border-black object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col text-left font-sans">
                  <span className="font-mono text-[11px] text-[#ff8500] uppercase tracking-[0.12em] leading-none">TRUSTED BY</span>
                  <span className="font-display font-black text-sm sm:text-base text-white tracking-tight mt-1.5">650+ Clients</span>
                </div>
              </div>
 
            </div>
 
          </div>

          {/* Center Column: Seamlessly Blended Portrait Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-6 lg:py-0 z-10">
            {/* Ambient Background Glow behind the portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#ff8500]/10 blur-[110px] rounded-full pointer-events-none z-0 animate-pulse" />
            
            {/* Portrait Frame Container with a smooth ellipse mask to dissolve all 4 outer borders */}
            <div className="relative w-full max-w-[255px] sm:max-w-[280px] lg:max-w-[335px] aspect-[4/5] overflow-hidden select-none group">
              <img
                src="https://i.ibb.co/HDL1V8HS/hero-image.jpg"
                alt="Nawar Cinematic Portrait"
                className="w-full h-full object-cover object-top grayscale brightness-95 contrast-[102%] group-hover:scale-[1.03] transition-all duration-700 ease-out"
                style={{
                  maskImage: 'radial-gradient(ellipse 68% 72% at 50% 50%, black 40%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 68% 72% at 50% 50%, black 40%, transparent 100%)'
                }}
                referrerPolicy="no-referrer"
              />

              {/* Edge Gradient Blenders to dissolve borders further with background black */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none opacity-40 mix-blend-multiply" />
            </div>

            {/* Socials bar precisely at the bottom of the hero image */}
            <div className="mt-4 select-none relative z-20">
              <div className="flex items-center gap-4 justify-center">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest text-left">Socials</span>
                <div className="flex items-center gap-2">
                  <a href="https://www.instagram.com/mhd.nawar?igsh=NXpjOWJtOGs2cjE%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-zinc-800 hover:border-[#ff8500]/40 bg-zinc-950/25 hover:bg-[#0c101a] flex items-center justify-center text-zinc-400 hover:text-[#ff8500] transition-all duration-300 shadow-sm">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-zinc-800 hover:border-[#ff8500]/40 bg-zinc-950/25 hover:bg-[#0c101a] flex items-center justify-center text-zinc-400 hover:text-[#ff8500] transition-all duration-300 shadow-sm">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/919544992782" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-zinc-800 hover:border-[#ff8500]/40 bg-zinc-950/25 hover:bg-[#0c101a] flex items-center justify-center text-zinc-400 hover:text-[#ff8500] transition-all duration-300 shadow-sm" title="WhatsApp Chat">
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <a href="mailto:nawar.nbn@gmail.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-zinc-800 hover:border-[#ff8500]/40 bg-zinc-950/25 hover:bg-[#0c101a] flex items-center justify-center text-zinc-400 hover:text-[#ff8500] transition-all duration-300 shadow-sm" title="Email Nawar">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Industry Statistics (Stacked and Aligned) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col justify-around lg:justify-center items-center lg:items-end pl-0 lg:pl-6 gap-4 lg:gap-0 select-none z-10 w-full">
            
            {/* Stat 1 */}
            <div className="space-y-1 relative group text-center lg:text-right w-full">
              <span className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-white block select-none tracking-tight leading-none">
                07+
              </span>
              <span className="font-sans text-[10px] sm:text-xs text-zinc-400 block tracking-normal">
                Years experience
              </span>
            </div>

            {/* Subtle Divider Line */}
            <div className="w-px h-12 lg:w-28 lg:h-px bg-zinc-700/80 my-auto lg:my-6 lg:ml-auto lg:mr-0 shrink-0" />

            {/* Stat 2 */}
            <div className="space-y-1 relative group text-center lg:text-right w-full">
              <span className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-white block select-none tracking-tight leading-none">
                750+
              </span>
              <span className="font-sans text-[10px] sm:text-xs text-zinc-400 block tracking-normal">
                Projects delivered
              </span>
            </div>

            {/* Subtle Divider Line */}
            <div className="w-px h-12 lg:w-28 lg:h-px bg-zinc-700/80 my-auto lg:my-6 lg:ml-auto lg:mr-0 shrink-0" />

            {/* Stat 3 */}
            <div className="space-y-1 relative group text-center lg:text-right w-full">
              <span className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-white block select-none tracking-tight leading-none">
                07+
              </span>
              <span className="font-sans text-[10px] sm:text-xs text-zinc-400 block tracking-normal">
                Countries served
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
