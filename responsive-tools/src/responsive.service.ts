import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, ElementRef } from '@angular/core';
import { BreakpointsConfig, BROWSER_RE, DEVICE_RE, SYSYEM_RE } from './responsive.config';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  readonly doc: Document;
  readonly ua = window.navigator.userAgent;

  constructor(
    @Inject(DOCUMENT) document: any,
    private breakpoints: BreakpointsConfig
  ) {
    this.doc = document;
  }

  get currentSpace(): string {
    if (this.screenWidth < this.breakpoints.xs) {
      return 'xs';
    }
    if (this.screenWidth >= this.breakpoints.xs && this.screenWidth < this.breakpoints.sm) {
      return 'sm';
    }
    if (this.screenWidth >= this.breakpoints.sm && this.screenWidth < this.breakpoints.md) {
      return 'md';
    }
    if (this.screenWidth >= this.breakpoints.md && this.screenWidth < this.breakpoints.lg) {
      return 'lg';
    }
    if (this.screenWidth >= this.breakpoints.lg) {
      return 'xl';
    }
  }

  get currentDevice(): string {
    if (DEVICE_RE.TABLET.test(this.ua)) {
      return 'tablet';
    } else if (DEVICE_RE.MOBILE.test(this.ua)) {
      return 'mobile';
    } else if (DEVICE_RE.SMARTTV.test(this.ua)) {
      return 'smarttv';
    } else {
      return 'desktop';
    }
  }

  get currentSystem(): string {
    if (SYSYEM_RE.MAC.test(this.ua)) {
      return 'mac';
    } else if (SYSYEM_RE.WINDOWS.test(this.ua)) {
      return 'windows';
    } else if (SYSYEM_RE.LINUX.test(this.ua)) {
      return 'linux';
    }
  }

  get currentBrowser(): string {
    if (BROWSER_RE.EDGE.test(this.ua)) {
      return 'edge';
    } else if (BROWSER_RE.FIREFOX.test(this.ua)) {
      return 'firefox';
    } else if (BROWSER_RE.CHROME.test(this.ua)) {
      return 'chrome';
    } else if (BROWSER_RE.SAFARI.test(this.ua)) {
      return 'safari';
    } else if (BROWSER_RE.OPERA.test(this.ua)) {
      return 'opera';
    } else if (BROWSER_RE.IE.test(this.ua)) {
      return 'ie11';
    }
  }

  get currentOrientation(): string {
    if (window.innerWidth > window.innerHeight) {
      return 'landscape';
    } else {
      return 'portrait';
    }
  }

  get screenWidth(): number {
    return this.doc.getElementsByTagName('html')[0].clientWidth;
  }

  addClasses(element: ElementRef, classes: string): void {
    const classList = element.nativeElement.classList;
    classes.split(' ').forEach((item) => {
      if (!this.includesClass(item, classList)) {
        classList.add(item);
      }
    });
  }

  includesClass(className: string, classList: DOMTokenList): boolean {
    return classList.contains(className);
  }

  removeClasses(element: ElementRef, classes: string): void {
    const classList = element.nativeElement.classList;
    classes.split(' ').forEach((item) => {
      if (this.includesClass(item, classList)) {
        classList.remove(item);
      }
    });
  }

  refreshClasses(element: ElementRef, classes: string): void {
    element.nativeElement.className = classes;
  }
}
