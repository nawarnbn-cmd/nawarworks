import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Play, Quote } from "lucide-react";

interface TestimonialRecord {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
}

const TESTIMONIALS_DATA: TestimonialRecord[] = [
  {
    id: "test_1",
    name: "Sarah Johnson",
    role: "Creative Director",
    company: "Nike",
    rating: 5,
    quote: "Working with this team transformed our brand campaign. Their attention to detail and creative vision exceeded all expectations. Every frame was perfection. They understand pacing, sound dynamics, and elite color correction instinctively.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "test_2",
    name: "Marcus Aurelius",
    role: "Lead Video Lead",
    company: "Red Bull Media House",
    rating: 5,
    quote: "The speed ramp edits and sound layering performed in our extreme sports assemblies were breathtaking. Nawar's grading presets gave the footage an instant premium Hollywood action feature look.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "test_3",
    name: "Amina Al-Mansoor",
    role: "Marketing Director",
    company: "Elysium Luxe Dubai",
    rating: 5,
    quote: "Our luxury brand promotional campaigns demand immaculate focus on skin tones and metallic shadows. Nawar delivered an offline masterwork that optimized our Instagram retention metrics by over 45%.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
  }
];

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const active = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="relative bg-transparent py-14 px-4 sm:px-8 border-t border-zinc-900/60 overflow-hidden font-sans text-left">
      
      {/* Background radial lights */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-orange-950/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-10">
        
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="font-display font-extrabold text-4xl text-white tracking-tight leading-none">
            Client Testimonials
          </h2>
          <p className="text-zinc-500 text-sm tracking-wide">
            What our clients say about working with us
          </p>
        </div>

        {/* Testimonial Active Slide Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
          
          {/* Left Block: Client Portrait Frame with play indicator mock */}
          <div className="md:col-span-12 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-square rounded-[32px] border border-zinc-805 bg-zinc-950 overflow-hidden shadow-2xl group cursor-pointer">
              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,133,0,0.12)_0%,transparent_75%)] z-0" />
              
              <img 
                src={active.image} 
                alt={`${active.name} client portrait testimonial`} 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 select-none pointer-events-none z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-20" />

              {/* Centered glass micro-player icon layout */}
              <div className="absolute inset-0 flex items-center justify-center z-30 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
                  <Play className="w-5 h-5 fill-white pl-0.5" />
                </div>
              </div>

              {/* Lower text badge */}
              <div className="absolute bottom-6 left-6 font-mono text-[9px] text-zinc-500 tracking-wider uppercase z-30 select-none">
                CLIENT VERIFIED // F8-STUDIO
              </div>

            </div>
          </div>

          {/* Right Block: Content */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            
            <div className="flex gap-1.5 select-none text-amber-500">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>

            <div className="relative">
              <Quote className="absolute -top-6 -left-6 w-12 h-12 text-[#ff8500]/15 pointer-events-none" />
              <p className="text-white text-lg sm:text-[21px] leading-relaxed font-light text-justify select-none italic tracking-wide">
                "{active.quote}"
              </p>
            </div>

            <div className="pt-2">
              <h4 className="font-display font-black text-xl text-white tracking-snug">
                {active.name}
              </h4>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1">
                {active.role} &bull; <span className="text-[#ff8500] font-bold">{active.company}</span>
              </p>
            </div>

          </div>

        </div>

        {/* Navigation Indicators */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer outline-none active:scale-95"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-[#ff8500] hover:bg-[#ffa300] text-black flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_4px_16px_rgba(255,133,0,0.25)] outline-none active:scale-95 font-bold"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
}
