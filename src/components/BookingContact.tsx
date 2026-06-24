import React, { useState, useEffect } from "react";
import { BookingSubmission } from "../types";
import { LUT_PRESETS } from "../data/portfolio";
import { Calendar, User, Mail, MessageSquare, Briefcase, Clock, Settings, FileText, CheckCircle2, ChevronRight, CircleDot, Trash2, MessageCircle, X } from "lucide-react";

interface BookingContactProps {
  isOpen: boolean;
  onClose: () => void;
  exportedEstimate: { projectType: string; duration: number; price: number } | null;
  onClearEstimate: () => void;
}

export default function BookingContact({ isOpen, onClose, exportedEstimate, onClearEstimate }: BookingContactProps) {
  // Input fields
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Video Editing");
  const [timeline, setTimeline] = useState("1 Day");
  const [duration, setDuration] = useState(5);
  const [lutPreference, setLutPreference] = useState("iPhone Shoot");
  const [message, setMessage] = useState("");

  // Submissions list stored locally
  const [inquiriesList, setInquiriesList] = useState<BookingSubmission[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync inputs if there is an exported calculation
  useEffect(() => {
    if (exportedEstimate) {
      setProjectType(exportedEstimate.projectType);
      setDuration(exportedEstimate.duration);
    }
  }, [exportedEstimate]);

  // Load bookings from localStorage
  useEffect(() => {
    const data = localStorage.getItem("nawar_portfolio_bookings");
    if (data) {
      try {
        setInquiriesList(JSON.parse(data));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !email) {
      alert("Please fill your Name and Email so Nawar can reach back to you.");
      return;
    }

    const newBooking: BookingSubmission = {
      id: "book_" + Date.now(),
      clientName,
      email,
      projectType,
      timeline,
      duration,
      lutPreference,
      message: message || "No extra messages added.",
      submittedAt: new Date().toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    const updatedList = [newBooking, ...inquiriesList];
    setInquiriesList(updatedList);
    localStorage.setItem("nawar_portfolio_bookings", JSON.stringify(updatedList));

    // Pre-compose the email payload
    const subject = `Portfolio Inquiry: ${projectType} from ${clientName}`;
    const body = `Hello Nawar,

A new timeline reservation record has been secured with the following specifications:

• Client Name: ${clientName}
• Contact Email: ${email}
• Project Pipeline: ${projectType}
• Timeframe Priority: ${timeline}
• Video Duration: ${duration} Min
• Device Choice: ${lutPreference}

Brief Directive & Production Notes:
--------------------------------------------
${message || "No extra messages added."}
--------------------------------------------

Submitted via Nawar Cinematic Portfolio Platform.`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nawar.nbn@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");

    // Reset inputs
    setClientName("");
    setEmail("");
    setMessage("");
    setIsSuccess(true);
    onClearEstimate();

    // Auto-clear success notification after 5s
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const handleDeleteInquiry = (id: string) => {
    const filtered = inquiriesList.filter(item => item.id !== id);
    setInquiriesList(filtered);
    localStorage.setItem("nawar_portfolio_bookings", JSON.stringify(filtered));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4 md:p-8">
      <div className="relative w-full max-w-6xl bg-[#08080a] border border-zinc-800 rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.95)] max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#ff8500]" />
            <div className="text-left">
              <h3 className="font-display font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider">
                Booking & Timeline Enquiry Selection
              </h3>
              <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase block mt-0.5">
                Reserve Nawar's Creative Video Studio Spots
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center select-none border border-zinc-700"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-8">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Booking Form (Span 7) */}
            <div className="lg:col-span-7 space-y-8 bg-zinc-900/40 border border-zinc-800/60 p-4 md:p-6 rounded-[24px]">
              
              <div className="space-y-1.5 text-left pb-4 border-b border-zinc-800/80">
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Book a slot
                </h2>
                <p className="text-xs text-zinc-400 font-light">
                  Are you interested in working together? Setup your inquiry specs below.
                </p>
              </div>

              {/* Export Notice Bar if exported */}
              {exportedEstimate && (
                <div className="bg-amber-950/20 border border-[#ff8500]/40 rounded-xl p-3 flex items-center justify-between text-xs text-[#ff8500]">
                  <div className="flex items-center gap-2 text-left">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Loaded estimate specs: <b>{exportedEstimate.projectType} ({exportedEstimate.duration}m)</b></span>
                  </div>
                  <button 
                    onClick={onClearEstimate}
                    className="text-[10px] bg-amber-950/50 border border-[#ff8500]/50 px-2 py-0.5 rounded text-white hover:bg-orange-850"
                  >
                    Clear Specs
                  </button>
                </div>
              )}

              {isSuccess && (
                <div className="bg-amber-500/10 border border-[#ff8500]/40 p-4 rounded-xl text-xs text-left text-amber-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#ff8500]" />
                  <div>
                    <span className="font-bold block text-white text-sm">Reservation Secured!</span>
                    Your client details are saved. We've opened Gmail to send your structured project details!
                  </div>
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>CLIENT FULL NAME *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Johnathan Ross"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#ff8500]/60 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors placeholder:text-zinc-650"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span>COMMUNICATION EMAIL *</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. j.ross@columbia.com"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#ff8500]/60 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors placeholder:text-zinc-650"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Project Category selection */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>PROJECT PIPELINE TYPE</span>
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white outline-none cursor-pointer"
                    >
                      <option value="Video Editing">Video Editing</option>
                      <option value="High Craft Narrated Editing">High Craft Narrated Editing</option>
                      <option value="Shorts and Reels">Shorts and Reels</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                      <option value="Commercial Ads">Commercial Ads</option>
                      <option value="Video Shoot">Video Shoot</option>
                    </select>
                  </div>

                  {/* Delivery timeframe */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>TIME FRAME</span>
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white outline-none cursor-pointer"
                    >
                      <option value="1 Day">1 Day</option>
                      <option value="3 Days">3 Days</option>
                      <option value="1 Week">1 Week</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Duration selection */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>ESTIMATED TIMELINE MINUTES</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="120"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value) || 5)}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#ff8500]/60 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors"
                    />
                  </div>

                  {/* Device */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      <span>DEVICE</span>
                    </label>
                    <select
                      value={lutPreference}
                      onChange={(e) => setLutPreference(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white outline-none cursor-pointer"
                    >
                      <option value="iPhone Shoot">iPhone Shoot</option>
                      <option value="Camera Shoot">Camera Shoot</option>
                    </select>
                  </div>
                </div>

                {/* Inquiries Notes message area */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>BRIEF DIRECTIVE & NOTES</span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your lighting setup, cameras, film pacing needs, or color matching preferences here..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#ff8500]/60 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors placeholder:text-zinc-650 resize-none z-10"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-[#ff8500] hover:bg-[#ffa300] text-black py-3.5 rounded-xl font-extrabold text-xs tracking-wider transition-all duration-300 cursor-pointer select-none uppercase shadow-md flex items-center justify-center gap-2"
                >
                  <span>Secure Timeline Spot</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>

            </div>

            {/* RIGHT COLUMN: Interactive Historic Log Dashboard (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              
              {/* Direct Channels Card */}
              <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-[24px] p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-tight">
                    Direct Channels
                  </h3>
                  <p className="text-[10px] text-[#ff8500] font-mono uppercase tracking-wider">
                    Instant Consultation
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {/* WhatsApp direct connection */}
                  <a
                    href="https://wa.me/919544992782"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-zinc-800 bg-zinc-950/40 hover:bg-green-500/5 hover:border-green-500/40 transition-all duration-300 group/wa"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20 group-hover/wa:scale-105 transition-transform duration-300">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block group-hover/wa:text-green-400 transition-colors">WhatsApp Chat</span>
                        <span className="text-[10px] text-zinc-500 font-mono">+91 9544992782</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover/wa:text-green-400 transition-colors animate-pulse" />
                  </a>

                  {/* Email direct connection */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nawar.nbn@gmail.com&body=Hi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-zinc-800 bg-zinc-950/40 hover:bg-orange-500/5 hover:border-[#ff8500]/40 transition-all duration-300 group/mail"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ff8500]/10 text-[#ff8500] flex items-center justify-center border border-[#ff8500]/20 group-hover/mail:scale-105 transition-transform duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block group-hover/mail:text-[#ff8500] transition-colors">Email Direct</span>
                        <span className="text-[10px] text-zinc-500 font-mono">nawar.nbn@gmail.com</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover/mail:text-[#ff8500] transition-colors" />
                  </a>
                </div>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-[24px] p-6 space-y-6">
                
                <div className="space-y-1">
                  <h3 className="font-display font-black text-lg text-white">
                    Timeline Inquiry Log
                  </h3>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                    Persistent Client Database
                  </p>
                </div>

                <span className="text-zinc-400 text-xs leading-relaxed block">
                  Here lies your active, sandboxed inquiries queue. Form submissions write to client local cache so you can review real-time state changes inside the workspace context.
                </span>

                {/* Booking Records Queue list */}
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                  {inquiriesList.length === 0 ? (
                    <div className="border border-dashed border-zinc-800 rounded-2xl p-8 text-center space-y-2">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 mx-auto flex items-center justify-center text-zinc-500">
                        <CircleDot className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[9px] text-zinc-500 block uppercase">
                        Queue is empty
                      </span>
                      <span className="text-zinc-650 text-[10px] block">
                        Submit the booking reservation form on the left to add a record here.
                      </span>
                    </div>
                  ) : (
                    inquiriesList.map((item) => (
                      <div
                        key={item.id}
                        className="bg-zinc-950 rounded-xl border border-zinc-800/80 p-4 relative group hover:border-zinc-700 transition-all duration-300 space-y-2.5"
                      >
                        {/* Delete inquiry */}
                        <button
                          onClick={() => handleDeleteInquiry(item.id)}
                          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 p-1.5 rounded-md hover:bg-zinc-900 text-zinc-500 hover:text-red-450 transition-all cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ff8500] animate-pulse" />
                          <span className="font-display font-bold text-xs text-white">
                            {item.clientName}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-[10px] font-mono text-zinc-500 border-t border-b border-zinc-900 py-2">
                          <div>
                            <span>TYPE: </span>
                            <span className="text-zinc-300 font-sans font-semibold block uppercase">
                              {item.projectType}
                            </span>
                          </div>
                          <div>
                            <span>DEVICE: </span>
                            <span className="text-[#ff8500] block font-bold">
                              {item.lutPreference}
                            </span>
                          </div>
                          <div>
                            <span>TIMEFRAME: </span>
                            <span className="text-zinc-300 block">
                              {item.timeline}
                            </span>
                          </div>
                          <div>
                            <span>LENGTH: </span>
                            <span className="text-zinc-300 block text-[#ff8500]">
                              {item.duration} Min
                            </span>
                          </div>
                        </div>

                        <p className="text-[11px] text-zinc-400 italic bg-zinc-900/40 p-2 rounded border border-zinc-900 leading-relaxed font-sans line-clamp-2">
                          "{item.message}"
                        </p>

                        <div className="flex justify-between items-center text-[8px] font-mono text-zinc-650">
                          <span>ID: {item.id}</span>
                          <span>DATE: {item.submittedAt}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
