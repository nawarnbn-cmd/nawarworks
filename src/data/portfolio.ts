import { LUTPreset, PortfolioProject, ServiceItem } from "../types";

export const LUT_PRESETS: LUTPreset[] = [
  {
    id: "nawar_gold",
    name: "NAWAR_GOLD_V2",
    description: "Premium signature gold cinematic print. Warming midtones, rich organic blacks, and optimized skin tones.",
    exposure: 0.05,
    contrast: 115,
    saturation: 105,
    temperature: 15,
    tint: -5,
    vignette: 15,
    colorFilter: "rgba(245, 158, 11, 0.06)" // Subtle golden tint
  },
  {
    id: "teal_orange",
    name: "TEAL__&_ORANGE",
    description: "Authentic Hollywood blockbuster look. Split-toning with warm skin tones and crisp teal-tinted shadows.",
    exposure: 0,
    contrast: 125,
    saturation: 120,
    temperature: 10,
    tint: -15,
    vignette: 25,
    colorFilter: "rgba(6, 182, 212, 0.08)" // Teal shadow cast
  },
  {
    id: "cyberpunk_neon",
    name: "CYBERPUNK_NEON",
    description: "Futuristic neon feel. Boosted cyan and magenta channels with elevated midtones and deep crushing contrast.",
    exposure: 0.15,
    contrast: 135,
    saturation: 140,
    temperature: -20,
    tint: 25,
    vignette: 30,
    colorFilter: "rgba(236, 72, 153, 0.07)" // Magenta midtones
  },
  {
    id: "noir_vintage",
    name: "NOIR_MONO_CLASSIC",
    description: "High-contrast Silver Halide emulsion simulation. Rich organic grains, deep shadow falloff, and classic texture.",
    exposure: -0.1,
    contrast: 145,
    saturation: 0,
    temperature: 0,
    tint: 0,
    vignette: 40,
    colorFilter: "rgba(255, 255, 255, 0)" // Monochromatic
  },
  {
    id: "emerald_matrix",
    name: "COPPER_GLOW_V9",
    description: "Sleek metallic copper of high-contrast cine-films. Warm dark shadows, sharp skin tone separation, and specialized studio aesthetics.",
    exposure: -0.05,
    contrast: 110,
    saturation: 105,
    temperature: 20,
    tint: -10,
    vignette: 20,
    colorFilter: "rgba(238, 94, 26, 0.1)" // Authentic orange/copper glow
  }
];

export const PROJECTS_DATA: PortfolioProject[] = [
  // --- SHORT FORM ---
  {
    id: "short_1",
    title: "FAST PHASE EDITS",
    category: "Short Form",
    year: "2024",
    client: "DOPE MOTION",
    duration: "52 sec",
    aspectRatio: "9:16 Vertical",
    resolution: "4K ProRes",
    // Purple neon creator style thumbnail
    gradeBeforeImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/Szd2rmRgKHA?si=lLO8dl8kg8a2Vjlc",
    lutPresetUsed: "CYBERPUNK_NEON",
    description: "Aithor Beats ChatGPT in Academic Writing. High-energy retention cuts styled with glowing animated captions, custom green spotlights, and dynamic zoom structures.",
    scopeLogs: {
      histogram: [12, 18, 35, 50, 70, 95, 110, 130, 150, 140, 125, 100, 85, 65, 45, 30, 15, 10, 5],
      waveform: [35, 42, 50, 58, 68, 78, 88, 92, 98, 90, 82, 72, 62, 52, 42, 35, 28, 22, 18]
    }
  },
  {
    id: "short_2",
    title: "WORKOUT EDITS",
    category: "Short Form",
    year: "2024",
    client: "DOPE MOTION",
    duration: "45 sec",
    aspectRatio: "9:16 Vertical",
    resolution: "4K ProRes",
    // Vibrant neon coding/editing workspace guy
    gradeBeforeImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/arlNmve-i5w",
    lutPresetUsed: "TEAL__&_ORANGE",
    description: "Video Editing Hacks to Make Edit 10X Faster. Highlighted with animated Premiere/After Effects interface popups, speed ramping transitions, and clean sound designs.",
    scopeLogs: {
      histogram: [10, 15, 25, 45, 60, 80, 105, 125, 140, 155, 135, 110, 90, 70, 50, 35, 20, 12, 8],
      waveform: [25, 32, 40, 48, 58, 68, 78, 85, 92, 88, 80, 70, 60, 50, 42, 35, 28, 22, 16]
    }
  },
  {
    id: "short_3",
    title: "AUTOMOTIVE VIDEOS",
    category: "Short Form",
    year: "2024",
    client: "DOPE MOTION",
    duration: "59 sec",
    aspectRatio: "9:16 Vertical",
    resolution: "4K ProRes",
    // Bold portrait exciting look
    gradeBeforeImg: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=600&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/kYNP0D48WVU",
    lutPresetUsed: "EMERALD_MATRIX",
    description: "Cinematic night roll of supercars in metropolitan highways. Crafted with high-contrast metallic colors, dynamic speed ramp transitions, and customized atmospheric sound designs.",
    scopeLogs: {
      histogram: [8, 14, 28, 48, 65, 85, 100, 120, 138, 148, 130, 115, 95, 75, 55, 38, 22, 14, 6],
      waveform: [30, 38, 46, 54, 64, 74, 84, 90, 96, 88, 80, 72, 62, 52, 44, 38, 30, 24, 18]
    }
  },
  {
    id: "short_4",
    title: "TESTIMONIAL EDITS",
    category: "Short Form",
    year: "2024",
    client: "IMPULSE MEDIA",
    duration: "55 sec",
    aspectRatio: "9:16 Vertical",
    resolution: "4K ProRes",
    // Podcast dark mic red tone look
    gradeBeforeImg: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/B9vijAZwWZI",
    lutPresetUsed: "NAWAR_GOLD_V2",
    description: "Impulse Podcast episode highlight. Cinematic low-light grading with extreme focus on deep red backlight glows, vocal dynamic graphics, and rich ambient acoustics.",
    scopeLogs: {
      histogram: [15, 25, 45, 65, 80, 90, 105, 115, 125, 130, 118, 100, 80, 60, 45, 30, 18, 10, 5],
      waveform: [20, 28, 36, 44, 52, 62, 70, 78, 85, 80, 72, 64, 54, 46, 38, 32, 26, 20, 14]
    }
  },

  // --- FOOD EDITS ---
  {
    id: "long_1",
    title: "FOOD EDITS",
    category: "Food",
    year: "2025",
    client: "STEAKHOUSE EXQUISITE",
    duration: "45 sec",
    aspectRatio: "9:16 Vertical",
    resolution: "4K RED RAW",
    gradeBeforeImg: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/RucpIEBEVa8?si=1P7Px9G5Nyi1U7en",
    lutPresetUsed: "GOLDEN_SHINE",
    description: "Multi-angle food cinematic featuring ultra-close-ups of high-grade seared wagyu steak under soft warm key lights, dynamic speed ramps, and crisp high-fidelity crackle cues.",
    scopeLogs: {
      histogram: [15, 25, 40, 60, 80, 105, 125, 138, 142, 130, 115, 98, 80, 65, 48, 32, 20, 12, 5],
      waveform: [32, 38, 44, 52, 60, 68, 76, 84, 90, 86, 78, 70, 62, 54, 46, 38, 32, 24, 18]
    }
  },
  {
    id: "gourmet_burger_short",
    title: "AFTER EFFECTS",
    category: "VFX",
    year: "2026",
    client: "CREATIVE STUDIO",
    duration: "15 sec",
    aspectRatio: "9:16 Vertical",
    resolution: "4K RED RAW",
    gradeBeforeImg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/29IiyNrG-fU",
    lutPresetUsed: "NAWAR_GOLD_V2",
    description: "Dynamic motion graphics, speed ramping and advanced compositing in After Effects, highlighting trekking and scenic wilderness aesthetics.",
    scopeLogs: {
      histogram: [22, 33, 44, 55, 66, 77, 85, 75, 62, 50, 38, 26, 14],
      waveform: [32, 40, 48, 56, 64, 72, 80, 85, 78, 68, 58, 48, 38, 28]
    }
  },

  {
    id: "long_2",
    title: "FOOD EDITS",
    category: "Food",
    year: "2026",
    client: "CULINARY ARTISTRY",
    duration: "30 sec",
    aspectRatio: "9:16 Vertical",
    resolution: "4K RED RAW",
    gradeBeforeImg: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/UfsYFaWG274",
    lutPresetUsed: "GOLDEN_SHINE",
    description: "Fine dining sizzle reel showcasing gourmet flame searing, fluid plating dynamics, and high-contrast ambient kitchen atmospheres with sharp focus pull transitions.",
    scopeLogs: {
      histogram: [15, 25, 40, 60, 80, 105, 125, 138, 142, 130, 115, 98, 80, 65, 48, 32, 20, 12, 5],
      waveform: [32, 38, 44, 52, 60, 68, 76, 84, 90, 86, 78, 70, 62, 54, 46, 38, 32, 24, 18]
    }
  },
  {
    id: "long_3",
    title: "PRODUCT VIDEO",
    category: "Ads & VSL",
    year: "2025",
    client: "Columbia Records",
    duration: "4 min",
    aspectRatio: "2.39:1 Cinema",
    resolution: "6K ProRes",
    gradeBeforeImg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/-HWDjJfe2nM",
    lutPresetUsed: "TEAL__&_ORANGE",
    description: "High-octane choreography montage inside subterranean industrial structures. Highlighting high dynamic range contrasts with distinct cold steel tones background and warm active foregrounds.",
    scopeLogs: {
      histogram: [20, 40, 60, 50, 35, 30, 45, 65, 85, 105, 125, 135, 115, 95, 75, 55, 35, 25, 15],
      waveform: [25, 30, 35, 42, 50, 62, 75, 85, 90, 82, 70, 58, 48, 38, 30, 25, 22, 20, 18]
    }
  },

  // --- ADS & VSL ---
  {
    id: "ads_1",
    title: "ADD VIDEO",
    category: "Ads & VSL",
    year: "2026",
    client: "Rimowa Global",
    duration: "2 min",
    aspectRatio: "16:9 UHD",
    resolution: "8K RED RAW",
    gradeBeforeImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/d1KBgu6BD-Y",
    lutPresetUsed: "NOIR_MONO_CLASSIC",
    description: "A luxury luggage brand campaign. Minimalist modernist villas set against pristine skies, rendered with crisp industrial grays and stark shadows mimicking geometric lines.",
    scopeLogs: {
      histogram: [5, 8, 12, 18, 25, 38, 55, 75, 100, 130, 145, 140, 110, 80, 50, 30, 15, 10, 5],
      waveform: [85, 82, 78, 72, 65, 58, 50, 42, 35, 42, 50, 58, 65, 72, 78, 82, 85, 88, 90]
    }
  },
  {
    id: "ads_2",
    title: "ARCHITECTURAL",
    category: "Ads & VSL",
    year: "2025",
    client: "ARCH STUDIO",
    duration: "1 min",
    aspectRatio: "16:9 UHD",
    resolution: "4K DCI",
    gradeBeforeImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/eTUW1p0pxG0",
    lutPresetUsed: "NOIR_MONO_CLASSIC",
    description: "Brutalist and modern architectural contours captured via slow tracking sweeps, emphasizing geometric concrete textures, play of light, and hard shadow gradients.",
    scopeLogs: {
      histogram: [15, 30, 50, 75, 90, 80, 65, 55, 45, 55, 70, 95, 110, 120, 100, 80, 60, 40, 20],
      waveform: [30, 35, 42, 50, 60, 70, 75, 82, 90, 85, 78, 68, 58, 48, 40, 35, 30, 25, 20]
    }
  },
  {
    id: "auto_1",
    title: "AUTOMOTIVE",
    category: "Automotive",
    year: "2025",
    client: "AUTO RETRO",
    duration: "2 min",
    aspectRatio: "16:9 UHD",
    resolution: "4K RED RAW",
    gradeBeforeImg: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/sGOi53pwCdw",
    lutPresetUsed: "TEAL__&_ORANGE",
    description: "Premium dusk shoot capturing the drift dynamics of the retro Mazda RX7. Highlighting high dynamic range contrasts with distinct golden hour reflections and deep exhaust tones.",
    scopeLogs: {
      histogram: [10, 20, 35, 55, 75, 95, 110, 130, 145, 150, 135, 115, 95, 75, 55, 40, 25, 15, 8],
      waveform: [35, 40, 48, 55, 62, 70, 78, 85, 92, 88, 80, 72, 65, 55, 48, 42, 35, 28, 22]
    }
  },
  {
    id: "auto_2",
    title: "AUTOMOTIVE VIDEOS",
    category: "Automotive",
    year: "2025",
    client: "TRACK DAY MONSTERS",
    duration: "1 min 45 sec",
    aspectRatio: "2.39:1 Anamorphic",
    resolution: "6K ARRI RAW",
    gradeBeforeImg: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/2eqNjw6E1T0",
    lutPresetUsed: "STREET_GOLD",
    description: "Anamorphic hyper-lap on track featuring aggressive cornering silhouettes, heat distortion waves, and custom tone adjustments over track carbon fiber.",
    scopeLogs: {
      histogram: [12, 22, 38, 58, 80, 100, 120, 135, 140, 130, 110, 90, 70, 50, 35, 20, 12, 6, 3],
      waveform: [40, 45, 52, 60, 68, 75, 82, 88, 92, 85, 78, 70, 62, 54, 45, 38, 32, 25, 18]
    }
  },
  {
    id: "auto_3",
    title: "PERSONAL BRANDING",
    category: "Automotive",
    year: "2025",
    client: "STREET LEAGUE VSL",
    duration: "30 sec",
    aspectRatio: "9:16 Vertical",
    resolution: "4K ProRes 422 HQ",
    gradeBeforeImg: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/ogLnLJ2iNRw",
    lutPresetUsed: "EMERALD_MATRIX",
    description: "Atmospheric street race visuals reflecting neon-lit rain drops, exhaust backfires, and precision tracking shots through Tokyo's midnight alleys.",
    scopeLogs: {
      histogram: [18, 32, 48, 62, 70, 60, 50, 40, 35, 45, 60, 75, 90, 105, 120, 100, 75, 50, 25],
      waveform: [25, 30, 38, 45, 52, 60, 68, 74, 80, 85, 78, 70, 62, 54, 46, 38, 30, 24, 18]
    }
  },
  {
    id: "add_video",
    title: "ADD VIDEO",
    category: "Ads & VSL",
    year: "2026",
    client: "CREATIVE SELECTION",
    duration: "35 sec",
    aspectRatio: "9:16 Vertical",
    resolution: "4K UHD",
    gradeBeforeImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    gradeAfterImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/x-kPVnW9MWY",
    lutPresetUsed: "NAWAR_GOLD_V2",
    description: "Cinematic tracking vertical video featuring high fidelity capture, dynamic light reflections, and warm tone highlights.",
    scopeLogs: {
      histogram: [20, 30, 40, 50, 60, 70, 60, 50, 40, 30, 20],
      waveform: [30, 40, 50, 60, 70, 80, 70, 60, 50, 40, 30]
    }
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv_color",
    title: "Cinematic Color Grading",
    description: "Multi-cam matching, customized LUT generation, secondary color windows, tracking masks, look integration, and comprehensive film grain simulation.",
    basePrice: 1500,
    iconName: "Palette",
    deliverables: ["ProRes 4444 Master", "Custom .CUBE LUTs", "Color Matching Reports", "HDR Deliveries"]
  },
  {
    id: "srv_cutting",
    title: "High-Craft Narrative Editing",
    description: "Rhythm-focused offline cutting, pacing tuning, script continuity alignment, sound sync, dynamic speed ramping, and transition styling.",
    basePrice: 2000,
    iconName: "Scissors",
    deliverables: ["Timeline offline XML/EDL", "Screening Cut exports", "VFX assembly plates", "Chapters structure"]
  },
  {
    id: "srv_direction",
    title: "Director of Photography Hire",
    description: "Cinematography services on-location with high-end camera rigs, prime lenses, calculated lighting designs, and continuous camera direction.",
    basePrice: 3500,
    iconName: "Camera",
    deliverables: ["Original raw camera cards", "A-roll / B-roll logs", "Pre-visualization setups", "Lighting setup boards"]
  }
];
