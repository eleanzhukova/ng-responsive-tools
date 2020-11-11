import { Directive, Input } from '@angular/core';
import { BaseResponsiveDirective } from './__init__';

@Directive({
  selector: '[mediaClass]'
})
export class MediaClassDirective extends BaseResponsiveDirective {
  @Input('mediaClass')
  classes: any;

  media = true;
}
