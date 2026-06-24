import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onScrollToSection: (id: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "work", label: "Portfolio", hasDot: true },
    { id: "services", label: "Services & Studio", hasDot: true }
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto">
      <header className={`w-full transition-all duration-300 font-sans rounded-3xl md:rounded-full border border-zinc-800/50 bg-zinc-900/45 backdrop-blur-xl px-5 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo matching the screenshot perfectly */}
          <div 
            onClick={() => handleNavClick("home")} 
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            {/* Circular orange icon branding from reference */}
            <div className="w-10 h-10 rounded-full border border-[#ff8500]/30 bg-[#051115] flex items-center justify-center text-[#ff8500] shadow-[0_0_15px_rgba(255,133,0,0.1)] group-hover:border-[#ff8500]/70 group-hover:shadow-[0_0_20px_rgba(255,133,0,0.3)] transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#ff8500] scale-90">
                {/* Sleek dynamic curve path mimicking a camera lens/infinity shape matching screenshot logo */}
                <path d="M16 8C14.5 10.5 11 13.5 8 16M8 8C9.5 10.5 13 13.5 16 16" strokeLinecap="round" className="opacity-40" />
                <path d="M12 4C14.5 7.5 14.5 16.5 12 20C9.5 16.5 9.5 7.5 12 4Z" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
              </svg>
            </div>
            
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-white text-[15px] tracking-[0.12em] block leading-tight">
                NAWAR
              </span>
              <span className="font-mono text-[7px] text-zinc-500 tracking-[0.25em] block mt-0.5 leading-none">
                CINEMATOGRAPHER
              </span>
            </div>
          </div>
  
          {/* Center menu links matching the screenshot capsule with a transparent type orange background */}
          <nav className="hidden md:flex items-center gap-7 bg-[#ff8500]/12 border border-[#ff8500]/25 rounded-full py-2 px-6 backdrop-blur-md shadow-[0_8px_25px_rgba(255,133,0,0.08)]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-zinc-300 hover:text-white text-xs font-semibold cursor-pointer transition-colors relative group py-1 flex items-center"
              >
                <span>{item.label}</span>
                {item.hasDot && (
                  <span className="ml-1.5 w-1.5 h-1.5 bg-[#ff8500] rounded-full inline-block shadow-[0_0_8px_#ff8500]" />
                )}
              </button>
            ))}
          </nav>
  
          {/* Right Action button holding "Let's Talk →" in custom orange button styled perfectly like screenshot */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("contact-channels")}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#ff8500] hover:bg-[#ffa300] text-black text-xs font-extrabold rounded-full select-none cursor-pointer tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(255,133,0,0.15)] hover:shadow-[0_4px_25px_rgba(255,133,0,0.35)] hover:scale-[1.02] transform"
            >
              <span>Let's Talk</span>
              <span className="text-[13px] font-bold">&#x2192;</span>
            </button>
          </div>
  
          {/* Mobile menu triggers */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => handleNavClick("contact-channels")}
              className="px-4 py-2 bg-[#ff8500] text-black text-[11px] font-bold rounded-full select-none cursor-pointer uppercase"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900/85 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
  
        </div>
  
        {/* Mobile Drawer Menu style */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-zinc-950/95 backdrop-blur-2xl border border-zinc-900/50 p-6 rounded-3xl shadow-2xl flex flex-col gap-5 text-center animate-fade-in z-50 mt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-zinc-350 hover:text-white text-sm font-bold py-1.5 border-b border-zinc-900/50 block w-full text-center"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
