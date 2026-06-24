export interface LUTPreset {
  id: string;
  name: string;
  description: string;
  exposure: number;     // e.g. -2 to +2
  contrast: number;     // e.g. 50 to 150
  saturation: number;   // e.g. 0 to 200
  temperature: number;  // e.g. -50 to +50 (warm/cool)
  tint: number;         // e.g. -50 to +50 (magenta/green)
  vignette: number;     // e.g. 0 to 100
  colorFilter: string;  // CSS mix blend/background color or direct filters
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  duration: string;
  aspectRatio: string;
  resolution: string;
  gradeBeforeImg: string;
  gradeAfterImg: string; // The high quality graded image
  videoUrl?: string;     // Simulated video frame or actual playback placeholder
  lutPresetUsed: string; // Name of the LUT preset
  description: string;
  scopeLogs: {
    histogram: number[]; // Array of values to simulate live scopes
    waveform: number[];
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  iconName: string;
  deliverables: string[];
}

export interface BookingSubmission {
  id: string;
  clientName: string;
  email: string;
  projectType: string;
  timeline: string;
  duration: number; // in minutes
  lutPreference: string;
  message: string;
  submittedAt: string;
}
