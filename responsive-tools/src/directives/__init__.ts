import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Directive()
export class BaseResponsiveDirective implements OnInit {
  classes: any;
  breakpoint: string;
  browser: string;
  device: string;
  orientation: string;
  system: string;
  media: boolean;

  constructor(
    private element: ElementRef,
    private responsiveService: ResponsiveService
  ) { }

  ngOnInit(): void {
    if (this.media) {
      this.activateScreenBasedDirectives();
    }

    if (!!this.browser) {
      this.activateBrowserBasedDirectives();
    }

    if (!!this.device) {
      this.activateDeviceBasedDirectives();
    }

    if (!!this.orientation) {
      this.activateOrientationBasedDirectives();
    }

    if (!!this.system) {
      this.activateSystemBasedDirectives();
    }
  }

  @HostListener('window: resize')
  onWindowResise(): void {
    if (this.media) {
      this.activateScreenBasedDirectives();
    }

    if (!!this.orientation) {
      this.activateOrientationBasedDirectives();
    }
  }

  activateScreenBasedDirectives(): void {
    const commonClasses = this.classes.common ? this.classes.common + ' ' : '';
    const classValue = commonClasses + this.classes[this.responsiveService.currentSpace];
    this.responsiveService.refreshClasses(this.element, classValue);
  }

  activateBrowserBasedDirectives(): void {
    if (this.responsiveService.currentBrowser === this.browser) {
      this.responsiveService.addClasses(this.element, this.classes);
    }
  }

  activateDeviceBasedDirectives(): void {
    if (this.responsiveService.currentDevice === this.device) {
      this.responsiveService.addClasses(this.element, this.classes);
    }
  }

  activateSystemBasedDirectives(): void {
    if (this.responsiveService.currentSystem === this.system) {
      this.responsiveService.addClasses(this.element, this.classes);
    }
  }

  activateOrientationBasedDirectives(): void {
    if (this.responsiveService.currentOrientation === this.orientation) {
      this.responsiveService.addClasses(this.element, this.classes);
    } else {
      this.responsiveService.removeClasses(this.element, this.classes);
    }
  }
}
