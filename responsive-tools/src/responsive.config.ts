export class BreakpointsConfig {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;

  constructor() {
    this.xs = 480;
    this.sm = 768;
    this.md = 992;
    this.lg = 1200;
    this.xl = 1440;
  }
}

export const BROWSER_RE = {
  CHROME: /Chrome|Chromium/i,
  EDGE: /Edge|Edg/i,
  FIREFOX: /Firefox/i,
  IE: /ie11/i,
  OPERA: /Opera|OPR/i,
  SAFARI: /Safari/i
};

export const DEVICE_RE = {
  MOBILE: /IEMobile|Windows Phone|Lumia|iPhone|iP[oa]d|Android|BlackBerry|PlayBook|BB10|Mobile Safari|webOS|Mobile|Opera Mini/i,
  TABLET: /Tablet|Tab|iPad|Nexus 7|Nexus 10|KFA[PU]WI/i,
  SMARTTV: /SMART_TV|SmartTV/i
};

export const SYSYEM_RE = {
  MAC: /Mac/i,
  WINDOWS: /Windows/i,
  LINUX: /Linux/i
};
