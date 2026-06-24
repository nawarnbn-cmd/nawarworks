import React, { useState } from "react";
import { Youtube, Instagram, MessageSquare, Mail, MessageCircle } from "lucide-react";

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="relative bg-transparent overflow-hidden text-left py-12 px-4 sm:px-8 font-sans">
      
      {/* Glow overlay */}
      <div className="absolute top-0 right-1/4 w-[400px] h-24 bg-[#ff8500]/5 blur-[80px]" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Brand Indicator & Social Links */}
        <div className="max-w-md space-y-6">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onScrollToSection("home")}>
            <div className="w-8 h-8 rounded-full border border-[#ff8500]/30 bg-[#07090e] flex items-center justify-center text-[#ff8500] font-black text-sm shadow-[0_0_10px_rgba(255,133,0,0.15)]">
              N
            </div>
            <span className="font-display font-black text-lg text-white tracking-tight uppercase">
              NAWAR
            </span>
          </div>

          <p className="text-zinc-500 text-[12.5px] leading-relaxed">
            Cinematic video editing and professional coloring pipelines designed for high-impact content creators, brands, and storytellers.
          </p>

          <div className="flex gap-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-900 flex items-center justify-center text-zinc-500 hover:text-[#ff8500] hover:border-[#ff8500] transition-all duration-300">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/mhd.nawar?igsh=NXpjOWJtOGs2cjE%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-900 flex items-center justify-center text-zinc-500 hover:text-[#ff8500] hover:border-[#ff8500] transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-900 flex items-center justify-center text-zinc-500 hover:text-[#ff8500] hover:border-[#ff8500] transition-all duration-300">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Brand contact channels side by side in a straight line */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full md:w-auto pt-4 md:pt-0">
          
          <a
            href="https://wa.me/919544992782"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 px-5 py-4 rounded-2xl border border-zinc-900 bg-zinc-950/40 hover:bg-green-500/5 hover:border-green-500/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.06)] transition-all duration-300 group/wa w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20 group-hover/wa:scale-105 transition-transform duration-300">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block mb-0.5">WhatsApp Message</span>
              <span className="text-xs font-bold text-white group-hover/wa:text-green-400 transition-colors">+91 9544992782</span>
            </div>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nawar.nbn@gmail.com&body=Hi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 px-5 py-4 rounded-2xl border border-zinc-900 bg-zinc-950/40 hover:bg-[#ff8500]/5 hover:border-[#ff8500]/40 hover:shadow-[0_0_25px_rgba(255,133,0,0.06)] transition-all duration-300 group/mail w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full bg-[#ff8500]/10 text-[#ff8500] flex items-center justify-center border border-[#ff8500]/20 group-hover/mail:scale-105 transition-transform duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block mb-0.5">Gmail Direct</span>
              <span className="text-xs font-bold text-white group-hover/mail:text-[#ff8500] transition-colors">nawar.nbn@gmail.com</span>
            </div>
          </a>

        </div>

      </div>

      <div className="max-w-7xl mx-auto w-full pt-16 mt-16 border-t border-zinc-900/50 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[10.5px] text-zinc-650 relative z-10 dark-grid-footer">
        <span>&copy; {new Date().getFullYear()} Nawar NBN Creative Video Studio. All rights reserved.</span>
        <div className="flex gap-4">
          <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
          <span>&middot;</span>
          <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
        </div>
      </div>

    </footer>
  );
}
