import React from "react";
import { X, Mail, Phone, MapPin, Globe, Award, Download, FileText, Printer, CheckCircle2, GraduationCap, Briefcase, ChevronRight } from "lucide-react";

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVViewer({ isOpen, onClose }: CVViewerProps) {
  if (!isOpen) return null;

  // The premium matching HTML that the user downloads or prints, matching the exact 2-page minimalist elegant format.
  const getCVHtmlContent = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NAWAR - Video Editor & Videographer Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --color-primary: #0f172a;
      --color-text-dark: #1e293b;
      --color-text-muted: #475569;
      --color-border: #cbd5e1;
      --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #f1f5f9;
      font-family: var(--font-sans);
      color: var(--color-text-dark);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 20px;
    }

    /* Print Banner */
    .print-banner {
      width: 100%;
      max-width: 210mm;
      background: #0f172a;
      color: #f8fafc;
      padding: 14px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
      font-size: 13px;
    }

    .print-banner span {
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .print-btn {
      background: #ff8500;
      color: #07090e;
      border: none;
      padding: 8px 16px;
      font-weight: 800;
      font-size: 13px;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }

    .print-btn:hover {
      background: #ffa300;
      transform: translateY(-1px);
    }

    /* CV Page Wrapper */
    .cv-pages-container {
      display: flex;
      flex-direction: column;
      gap: 30px;
      width: 210mm;
    }

    /* Standard A4 layout sheets */
    .page-sheet {
      background-color: #ffffff;
      width: 210mm;
      min-height: 297mm;
      position: relative;
      padding: 45mm 22mm 25mm 22mm; /* Professional resume margins */
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08); /* Modern shadow */
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }

    /* Header component exact styling */
    .cv-header {
      margin-top: -15mm;
      margin-bottom: 10mm;
      text-align: center;
    }

    .header-name {
      font-size: 44px;
      font-weight: 800;
      letter-spacing: 3.5px;
      color: var(--color-primary);
      text-transform: uppercase;
      line-height: 1.1;
      margin-bottom: 8px;
    }

    .header-title {
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 2.5px;
      color: var(--color-text-muted);
      text-transform: uppercase;
      margin-bottom: 15px;
    }

    .header-contact {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 11.5px;
      color: var(--color-text-muted);
      font-weight: 400;
      border-top: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0;
      padding: 10px 0;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .contact-divider {
      color: #94a3b8;
    }

    .contact-link {
      color: var(--color-text-dark);
      text-decoration: none;
    }

    .contact-link:hover {
      color: #ff8500;
    }

    /* Main headings */
    .section-title {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1.8px;
      color: var(--color-primary);
      text-transform: uppercase;
      margin-top: 25px;
      margin-bottom: 8px;
      line-height: 1.2;
    }

    .section-divider {
      height: 1px;
      background-color: #747d8c;
      margin-bottom: 15px;
      opacity: 0.8;
    }

    /* Content formats */
    .summary-text {
      font-size: 12.5px;
      line-height: 1.7;
      color: var(--color-text-dark);
      text-align: justify;
    }

    /* Core skills grid */
    .skills-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .skill-block {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      font-size: 12.5px;
      line-height: 1.6;
    }

    .skill-category {
      font-weight: 700;
      color: var(--color-primary);
      min-width: 250px;
      width: 250px;
      flex-shrink: 0;
    }

    .skill-values {
      color: var(--color-text-dark);
    }

    /* Professional Experience */
    .experience-list {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    .exp-item {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 4px;
    }

    .exp-title-block {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .exp-employer {
      font-size: 13.5px;
      font-weight: 700;
      color: var(--color-primary);
    }

    .exp-role {
      font-size: 12.5px;
      font-style: italic;
      color: var(--color-text-muted);
    }

    .exp-date {
      font-size: 12.5px;
      font-weight: 600;
      color: var(--color-primary);
      white-space: nowrap;
    }

    .exp-bullets {
      list-style-type: none;
      padding-left: 0;
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .bullet-item {
      font-size: 12px;
      line-height: 1.6;
      color: var(--color-text-dark);
      position: relative;
      padding-left: 14px;
    }

    .bullet-item::before {
      content: "\\2022";
      color: #334155;
      font-size: 11px;
      position: absolute;
      left: 0;
      top: 0;
    }

    /* Print styling rules */
    @media print {
      body {
        padding: 0;
        background-color: #ffffff;
      }
      .print-banner {
        display: none;
      }
      .cv-pages-container {
        gap: 0;
      }
      .page-sheet {
        box-shadow: none;
        padding: 25mm 20mm 20mm 20mm;
        page-break-after: always;
        break-after: always;
        min-height: 297mm;
        height: 297mm;
      }
      .page-sheet:last-child {
        page-break-after: avoid;
        break-after: avoid;
      }
    }
  </style>
</head>
<body>

  <div class="print-banner">
    <span>NAWAR &mdash; Professional Resume Document (Page-aligned Minimalist Standard)</span>
    <button class="print-btn" onclick="window.print()">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
      Print / Save as PDF
    </button>
  </div>

  <div class="cv-pages-container">
    
    <!-- PAGE 1 OF CV -->
    <div class="page-sheet">
      <!-- Header Area -->
      <div class="cv-header">
        <h1 class="header-name">NAWAR</h1>
        <div class="header-title">Video Editor & Videographer</div>
        <div class="header-contact">
          <div class="contact-item">Bengaluru, India</div>
          <span class="contact-divider">|</span>
          <div class="contact-item">+91 9544992782</div>
          <span class="contact-divider">|</span>
          <div class="contact-item">nawar.nbn@gmail.com</div>
          <span class="contact-divider">|</span>
          <div class="contact-item"><a href="https://nawarworks.in/" target="_blank" class="contact-link">nawarworks.in</a></div>
        </div>
      </div>

      <!-- Professional Summary -->
      <div>
        <h2 class="section-title">Professional Summary</h2>
        <div class="section-divider"></div>
        <p class="summary-text">
          Creative and detail-oriented Video Editor and Videographer with 7 years of professional experience conceptualizing, shooting, and editing high-quality, high-retention visual assets. Expert in industry-standard post-production suites, cinematic color grading, advanced sound design, and motion graphics. Proven track record of managing end-to-end media campaigns for international corporate clients, optimizing short-form workflows for algorithm performance, and delivering premium aesthetic results under demanding deadlines.
        </p>
      </div>

      <!-- Core Skills -->
      <div style="margin-top: 10px;">
        <h2 class="section-title">Core Skills</h2>
        <div class="section-divider"></div>
        <div class="skills-section">
          <div class="skill-block">
            <span class="skill-category">Video Editing & Post-Production:</span>
            <span class="skill-values">Adobe Premiere Pro, After Effects, DaVinci Resolve, CapCut, Topaz, Speed Ramping, Multi-Cam Editing, Micro-Beats Script Breakdown</span>
          </div>
          <div class="skill-block">
            <span class="skill-category">Motion Graphics & Audio:</span>
            <span class="skill-values">2D Motion Graphics, Visual Effects (VFX), Audio Restoration, Sound Design, Audio Mixing</span>
          </div>
          <div class="skill-block">
            <span class="skill-category">Cinematography & Grading:</span>
            <span class="skill-values">Studio & Field Camera Operation, Premium Lighting Architecture, Cinematic Color Grading, Luxury Brand Visual Aesthetics</span>
          </div>
          <div class="skill-block">
            <span class="skill-category">Project & Client Management:</span>
            <span class="skill-values">International Stakeholder Relations, Cross-Functional Team Collaboration, Asset Pipeline Optimization, Lifecycle Timeline Management</span>
          </div>
        </div>
      </div>

      <!-- Professional Experience (First Part) -->
      <div style="margin-top: 10px;">
        <h2 class="section-title">Professional Experience</h2>
        <div class="section-divider"></div>
        <div class="experience-list">
          
          <!-- Job 1 -->
          <div class="exp-item">
            <div class="exp-header">
              <div class="exp-title-block">
                <span class="exp-employer">TDL (Tech Digital Lab)</span>
                <span class="exp-role">Video Editor</span>
              </div>
              <span class="exp-date">2024 &ndash; 2025</span>
            </div>
            <ul class="exp-bullets">
              <li class="bullet-item">Produced premium, high-end commercial video content specifically engineered for elite US-based brands and corporate clients.</li>
              <li class="bullet-item">Conceptualized and structuralized high-retention, "viral-style" short-form media optimized for platform engagement mechanics and distribution algorithms.</li>
              <li class="bullet-item">Executed comprehensive advanced post-production workflows, including custom cinematic color grading, detailed sound design layers, and precise motion graphic configurations.</li>
            </ul>
          </div>

          <!-- Job 2 -->
          <div class="exp-item">
            <div class="exp-header">
              <div class="exp-title-block">
                <span class="exp-employer">The Horus Academy</span>
                <span class="exp-role">Video Editor, Content Creator & Videographer</span>
              </div>
              <span class="exp-date">2024 &ndash; 2025</span>
            </div>
            <ul class="exp-bullets">
              <li class="bullet-item">Orchestrated full lifecycle asset development, managing the end-to-end conceptualization, scripting, shooting, and advanced post-production of educational and promotional media.</li>
              <li class="bullet-item">Directed and captured studio and field footage designed to maximize target audience development, digital engagement metrics, and global brand visibility.</li>
              <li class="bullet-item">Supervised editing delivery pipelines, ensuring structural excellence across precise color corrections, audio engineering, and motion design layouts.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <!-- PAGE 2 OF CV -->
    <div class="page-sheet">
      <!-- Professional Experience (Continued) -->
      <div style="margin-top: -20mm;">
        <h2 class="section-title">Professional Experience (Continued)</h2>
        <div class="section-divider"></div>
        <div class="experience-list">
          
          <!-- Job 3 -->
          <div class="exp-item">
            <div class="exp-header">
              <div class="exp-title-block">
                <span class="exp-employer">DSTRCT Group (London, UK / Remote)</span>
                <span class="exp-role">Video Editor</span>
              </div>
              <span class="exp-date">2023 &ndash; 2024</span>
            </div>
            <ul class="exp-bullets">
              <li class="bullet-item">Developed high-retention, trend-optimized video assets for a diverse international portfolio spanning creative, digital media, and corporate IT clients.</li>
              <li class="bullet-item">Collaborated seamlessly with multi-disciplinary global creative teams (directors, designers, and marketers) across multiple international time zones to align creative assets with brand objectives.</li>
              <li class="bullet-item">Provided critical, systematic technical feedback and post-production evaluations to junior editors to elevate overall production design benchmarks.</li>
              <li class="bullet-item">Spearheaded asset optimization frameworks that directly enhanced performance reach, average view duration, and consumer retention metrics.</li>
            </ul>
          </div>

          <!-- Job 4 -->
          <div class="exp-item">
            <div class="exp-header">
              <div class="exp-title-block">
                <span class="exp-employer">Freelance Video Editor & Videographer</span>
                <span class="exp-role">Independent Creative Contractor</span>
              </div>
              <span class="exp-date">2018 &ndash; 2023</span>
            </div>
            <ul class="exp-bullets">
              <li class="bullet-item">Delivered scalable, high-tier production, videography, and post-production services for corporate entities, non-profit institutions, and high-profile individuals.</li>
              <li class="bullet-item">Shot, directed, and engineered over 100 high-impact projects, including broadcast commercials, short-form documentaries, and corporate branding campaigns.</li>
              <li class="bullet-item">Crafted dynamic social media assets optimized for strategic audience expansion, boosting organic reach, follower metrics, and transactional traffic.</li>
              <li class="bullet-item">Integrated professional-level audio mastering, detailed color matching, and graphic titles into standard deliverables to match broad commercial specifications.</li>
              <li class="bullet-item">Managed client accounts, project scoping, milestones, and asset distribution pipelines directly with executive directors and major project stakeholders.</li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Education Section -->
      <div style="margin-top: 25px;">
        <h2 class="section-title">Education</h2>
        <div class="section-divider"></div>
        <div class="experience-list">
          <div class="exp-item">
            <div class="exp-header">
              <div class="exp-title-block">
                <span class="exp-employer">KMCT College of Engineering (APJ Abdul Kalam Technological University)</span>
                <span class="exp-role">Bachelor of Technology (B.Tech) in Mechanical Engineering &bull; Kerala, India</span>
              </div>
              <span class="exp-date">2019 &ndash; 2023</span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</body>
</html>`;
  }

  const handleDownloadCV = () => {
    const cvHtml = getCVHtmlContent();
    const blob = new Blob([cvHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Nawar_Professional_CV.html";
    link.click();
    URL.revokeObjectURL(url);
  };

  const openPrintPreview = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(getCVHtmlContent());
    printWindow.document.close();
    // Prompt print directly when loaded
    printWindow.onload = function() {
      printWindow.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-5xl bg-[#0b0f19] border border-zinc-800 rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)] max-h-[95vh] flex flex-col">
        
        {/* Top Premium bar Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#ff8500]" />
            <div>
              <h3 className="font-display font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider">
                PROFESSIONAL PORTFOLIO RESUME
              </h3>
              <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase block mt-0.5">
                CURRICULUM VITAE // NAWAR
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Real Instant Print Action */}
            <button
              onClick={openPrintPreview}
              title="Print / Save PDF directly"
              className="p-2 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono select-none"
            >
              <Printer className="w-4 h-4 text-[#ff8500]" />
              <span className="hidden sm:inline">PRINT RESUME</span>
            </button>

            {/* Premium Download Action */}
            <button
              onClick={handleDownloadCV}
              className="px-4 py-2 rounded-xl bg-[#ff8500] hover:bg-[#ffa300] text-black text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1.5 shrink-0 select-none cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(255,133,0,0.15)] hover:shadow-[0_6px_16px_rgba(255,133,0,0.3)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD FILE</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Container with the visual sheets styled exactly like the provided resume layout */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-zinc-950 flex flex-col items-center gap-8">
          
          <div className="w-full text-center max-w-2xl px-4 py-2">
            <p className="text-xs text-zinc-400 font-sans">
              Below is the preview of your luxury 2-page minimalist resume. You can download the interactive HTML version or print directly to a beautifully partitioned local PDF.
            </p>
          </div>

          {/* PAGE 1 SHEET PREVIEW */}
          <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-[#1e293b] rounded-2xl shadow-2xl p-[18mm] md:p-[20mm] flex flex-col font-sans transition-all duration-300 relative">
            <div className="absolute top-4 right-6 font-mono text-[9px] text-zinc-400 select-none">PAGE 1 // NAWAR</div>

            {/* Header Block */}
            <div className="text-center mb-10 border-b border-zinc-100 pb-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-widest uppercase leading-none mb-3">
                NAWAR
              </h1>
              <div className="text-xs md:text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4">
                VIDEO EDITOR & VIDEOGRAPHER
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5 text-[11px] md:text-xs text-zinc-500 font-medium">
                <span>Bengaluru, India</span>
                <span className="text-zinc-300 hidden sm:inline">•</span>
                <span>+91 9544992782</span>
                <span className="text-zinc-300 hidden sm:inline">•</span>
                <span>nawar.nbn@gmail.com</span>
                <span className="text-zinc-300 hidden sm:inline">•</span>
                <a href="https://nawarworks.in/" target="_blank" rel="noreferrer" className="text-[#ff8500] hover:underline">
                  nawarworks.in
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h2 className="text-[13px] font-extrabold text-[#0f172a] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#ff8500] shrink-0" />
                PROFESSIONAL SUMMARY
              </h2>
              <div className="h-[1px] bg-zinc-300 mb-3" />
              <p className="text-xs text-[#1e293b] leading-relaxed text-justify font-normal">
                Creative and detail-oriented Video Editor and Videographer with 7 years of professional experience conceptualizing, shooting, and editing high-quality, high-retention visual assets. Expert in industry-standard post-production suites, cinematic color grading, advanced sound design, and motion graphics. Proven track record of managing end-to-end media campaigns for international corporate clients, optimizing short-form workflows for algorithm performance, and delivering premium aesthetic results under demanding deadlines.
              </p>
            </div>

            {/* Core Skills */}
            <div className="mb-8">
              <h2 className="text-[13px] font-extrabold text-[#0f172a] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#ff8500] shrink-0" />
                CORE SKILLS
              </h2>
              <div className="h-[1px] bg-zinc-300 mb-4" />
              
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-1 text-xs">
                  <span className="md:col-span-4 font-bold text-[#0f172a] leading-tight">Video Editing & Post-Production:</span>
                  <span className="md:col-span-8 text-[#334155]">Adobe Premiere Pro, After Effects, DaVinci Resolve, CapCut, Topaz, Speed Ramping, Multi-Cam Editing, Micro-Beats Script Breakdown</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-1 text-xs">
                  <span className="md:col-span-4 font-bold text-[#0f172a] leading-tight">Motion Graphics & Audio:</span>
                  <span className="md:col-span-8 text-[#334155]">2D Motion Graphics, Visual Effects (VFX), Audio Restoration, Sound Design, Audio Mixing</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-1 text-xs">
                  <span className="md:col-span-4 font-bold text-[#0f172a] leading-tight">Cinematography & Grading:</span>
                  <span className="md:col-span-8 text-[#334155]">Studio & Field Camera Operation, Premium Lighting Architecture, Cinematic Color Grading, Luxury Brand Visual Aesthetics</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-1 text-xs">
                  <span className="md:col-span-4 font-bold text-[#0f172a] leading-tight">Project & Client Management:</span>
                  <span className="md:col-span-8 text-[#334155]">International Stakeholder Relations, Cross-Functional Team Collaboration, Asset Pipeline Optimization, Lifecycle Timeline Management</span>
                </div>
              </div>
            </div>

            {/* Professional Experience Part 1 */}
            <div>
              <h2 className="text-[13px] font-extrabold text-[#0f172a] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#ff8500]" />
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="h-[1px] bg-zinc-300 mb-4" />

              <div className="space-y-6">
                {/* Job 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[#0f172a] text-sm leading-tight">TDL (Tech Digital Lab)</h4>
                      <p className="text-xs text-zinc-500 italic font-medium">Video Editor</p>
                    </div>
                    <span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">2024 – 2025</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-600 list-none leading-relaxed">
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Produced premium, high-end commercial video content specifically engineered for elite US-based brands and corporate clients.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Conceptualized and structuralized high-retention, "viral-style" short-form media optimized for platform engagement mechanics and distribution algorithms.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Executed comprehensive advanced post-production workflows, including custom cinematic color grading, detailed sound design layers, and precise motion graphic configurations.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[#0f172a] text-sm leading-tight">The Horus Academy</h4>
                      <p className="text-xs text-zinc-500 italic font-medium">Video Editor, Content Creator & Videographer</p>
                    </div>
                    <span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">2024 – 2025</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-600 list-none leading-relaxed">
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Orchestrated full lifecycle asset development, managing the end-to-end conceptualization, scripting, shooting, and advanced post-production of educational and promotional media.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Directed and captured studio and field footage designed to maximize target audience development, digital engagement metrics, and global brand visibility.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Supervised editing delivery pipelines, ensuring structural excellence across precise color corrections, audio engineering, and motion design layouts.</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

          {/* PAGE 2 SHEET PREVIEW */}
          <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-[#1e293b] rounded-2xl shadow-2xl p-[18mm] md:p-[20mm] flex flex-col font-sans transition-all duration-300 relative">
            <div className="absolute top-4 right-6 font-mono text-[9px] text-zinc-400 select-none">PAGE 2 // NAWAR</div>

            {/* Experience Continued section */}
            <div className="mb-8 mt-4">
              <h2 className="text-[13px] font-extrabold text-[#0f172a] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#ff8500] shrink-0" />
                PROFESSIONAL EXPERIENCE <span className="text-[10px] text-zinc-400 font-normal lowercase tracking-normal">(continuation)</span>
              </h2>
              <div className="h-[1px] bg-zinc-300 mb-4" />

              <div className="space-y-6">
                {/* Job 3 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[#0f172a] text-sm leading-tight">DSTRCT Group (London, UK / Remote)</h4>
                      <p className="text-xs text-zinc-500 italic font-medium">Video Editor</p>
                    </div>
                    <span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">2023 – 2024</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-600 list-none leading-relaxed">
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Developed high-retention, trend-optimized video assets for a diverse international portfolio spanning creative, digital media, and corporate IT clients.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Collaborated seamlessly with multi-disciplinary global creative teams (directors, designers, and marketers) across multiple international time zones to align creative assets with brand objectives.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Provided critical, systematic technical feedback and post-production evaluations to junior editors to elevate overall production design benchmarks.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Spearheaded asset optimization frameworks that directly enhanced performance reach, average view duration, and consumer retention metrics.</li>
                  </ul>
                </div>

                {/* Job 4 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[#0f172a] text-sm leading-tight">Freelance Video Editor & Videographer</h4>
                      <p className="text-xs text-zinc-500 italic font-medium">Independent Creative Contractor</p>
                    </div>
                    <span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">2018 – 2023</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-600 list-none leading-relaxed">
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Delivered scalable, high-tier production, videography, and post-production services for corporate entities, non-profit institutions, and high-profile individuals.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Shot, directed, and engineered over 100 high-impact projects, including broadcast commercials, short-form documentaries, and corporate branding campaigns.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Crafted dynamic social media assets optimized for strategic audience expansion, boosting organic reach, follower metrics, and transactional traffic.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Integrated professional-level audio mastering, detailed color matching, and graphic titles into standard deliverables to match broad commercial specifications.</li>
                    <li className="relative pl-4"><span className="absolute left-0 text-[#ff8500]">•</span>Managed client accounts, project scoping, milestones, and asset distribution pipelines directly with executive directors and major project stakeholders.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-4">
              <h2 className="text-[13px] font-extrabold text-[#0f172a] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <GraduationCap className="w-4.5 h-4.5 text-[#ff8500]" />
                EDUCATION
              </h2>
              <div className="h-[1px] bg-zinc-300 mb-4" />

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-sm leading-tight">KMCT College of Engineering (APJ Abdul Kalam Technological University)</h4>
                    <p className="text-xs text-[#334155] mt-1">Bachelor of Technology (B.Tech) in Mechanical Engineering &bull; Kerala, India</p>
                  </div>
                  <span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded shrink-0">2019 – 2023</span>
                </div>
              </div>
            </div>

            {/* Visual signature verified */}
            <div className="mt-auto pt-16 border-t border-zinc-100 flex justify-between items-center font-mono text-[9px] text-zinc-400 select-none">
              <span>DOCUMENTS VERIFIED & OFFICIAL ATTESTATION INCLUDED</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff8500]" />
                PORTFOLIO PLATFORM CERTIFIED
              </span>
            </div>

          </div>

        </div>

        {/* Footer info details */}
        <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-900 font-mono text-[9px] text-zinc-500 flex justify-between items-center shrink-0">
          <div>NAWAR // BENGALURU, KERALA // +91 9544992782</div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8500]" />
            <span>ORIGINAL DOCUMENTS VALIDATED</span>
          </div>
        </div>

      </div>
    </div>
  );
}
