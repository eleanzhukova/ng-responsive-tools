import { Directive, Input } from '@angular/core';
import { BaseResponsiveDirective } from './__init__';

@Directive({
  selector: '[edgeClass]'
})
export class EdgeClassDirective extends BaseResponsiveDirective {
  @Input('edgeClass')
  classes: string;

  browser = 'edge';
}

@Directive({
  selector: '[firefoxClass]'
})
export class FirefoxClassDirective extends BaseResponsiveDirective {
  @Input('firefoxClass')
  classes: string;

  browser = 'firefox';
}

@Directive({
  selector: '[chromeClass]'
})
export class ChromeClassDirective extends BaseResponsiveDirective {
  @Input('chromeClass')
  classes: string;

  browser = 'chrome';
}

@Directive({
  selector: '[safariClass]'
})
export class SafariClassDirective extends BaseResponsiveDirective {
  @Input('safariClass')
  classes: string;

  browser = 'safari';
}

@Directive({
  selector: '[operaClass]'
})
export class OperaClassDirective extends BaseResponsiveDirective {
  @Input('operaClass')
  classes: string;

  browser = 'opera';
}

