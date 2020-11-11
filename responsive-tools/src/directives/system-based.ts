import { Directive, Input } from '@angular/core';
import { BaseResponsiveDirective } from './__init__';

@Directive({
  selector: '[macClass]'
})
export class MacClassDirective extends BaseResponsiveDirective {
  @Input('macClass')
  classes: string;

  system = 'mac';
}

@Directive({
  selector: '[windowsClass]'
})
export class WindowsClassDirective extends BaseResponsiveDirective {
  @Input('windowsClass')
  classes: string;

  system = 'windows';
}

@Directive({
  selector: '[linuxClass]'
})
export class LinuxClassDirective extends BaseResponsiveDirective {
  @Input('linuxClass')
  classes: string;

  system = 'linux';
}
