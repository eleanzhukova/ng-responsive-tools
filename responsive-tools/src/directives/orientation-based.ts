import { Directive, Input } from '@angular/core';
import { BaseResponsiveDirective } from './__init__';

@Directive({
  selector: '[portraitClass]'
})
export class PortraitClassDirective extends BaseResponsiveDirective {
  @Input('portraitClass')
  classes: string;

  orientation = 'portrait';
}

@Directive({
  selector: '[landscapeClass]'
})
export class LandscapeClassDirective extends BaseResponsiveDirective {
  @Input('landscapeClass')
  classes: string;

  orientation = 'landscape';
}
