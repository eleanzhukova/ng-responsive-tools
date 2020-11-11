import { Directive, Input } from '@angular/core';
import { BaseResponsiveDirective } from './__init__';

@Directive({
  selector: '[mobileClass]'
})
export class MobileClassDirective extends BaseResponsiveDirective {
  @Input('mobileClass')
  classes: string;

  device = 'mobile';
}

@Directive({
  selector: '[tabletClass]'
})
export class TabletClassDirective extends BaseResponsiveDirective {
  @Input('tabletClass')
  classes: string;

  device = 'tablet';
}

@Directive({
  selector: '[desktopClass]'
})
export class DesktopClassDirective extends BaseResponsiveDirective {
  @Input('desktopClass')
  classes: string;

  device = 'desktop';
}

@Directive({
  selector: '[smarttvClass]'
})
export class SmartTVClassDirective extends BaseResponsiveDirective {
  @Input('smarttvClass')
  classes: string;

  device = 'smarttv';
}
