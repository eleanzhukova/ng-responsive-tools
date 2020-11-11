import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakpointsConfig } from './responsive.config';
import { ResponsiveService } from './responsive.service';

import {
  MediaClassDirective
} from './directives/screen-based';
import {
  MobileClassDirective,
  TabletClassDirective,
  DesktopClassDirective,
  SmartTVClassDirective
} from './directives/device-based';
import {
  LinuxClassDirective,
  MacClassDirective,
  WindowsClassDirective
} from './directives/system-based';
import {
  ChromeClassDirective,
  EdgeClassDirective,
  FirefoxClassDirective,
  OperaClassDirective,
  SafariClassDirective,
} from './directives/browser-based';
import {
  LandscapeClassDirective,
  PortraitClassDirective
} from './directives/orientation-based';

@NgModule({
  declarations: [
    MediaClassDirective,
    MobileClassDirective,
    TabletClassDirective,
    DesktopClassDirective,
    SmartTVClassDirective,
    LinuxClassDirective,
    MacClassDirective,
    WindowsClassDirective,
    ChromeClassDirective,
    EdgeClassDirective,
    FirefoxClassDirective,
    OperaClassDirective,
    SafariClassDirective,
    LandscapeClassDirective,
    PortraitClassDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MediaClassDirective,
    MobileClassDirective,
    TabletClassDirective,
    DesktopClassDirective,
    SmartTVClassDirective,
    LinuxClassDirective,
    MacClassDirective,
    WindowsClassDirective,
    ChromeClassDirective,
    EdgeClassDirective,
    FirefoxClassDirective,
    OperaClassDirective,
    SafariClassDirective,
    LandscapeClassDirective,
    PortraitClassDirective
  ]
})
export class ResponsiveModule {
  static forRoot(config?: BreakpointsConfig): ModuleWithProviders<ResponsiveModule> {
    return {
      ngModule: ResponsiveModule,
      providers: [
        {
          provide: BreakpointsConfig,
          useValue: !!config ? config : new BreakpointsConfig()
        },
        ResponsiveService
      ]
    };
  }
}
