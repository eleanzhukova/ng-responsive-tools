# NG RESPONSIVE TOOLS

![AppVeyor branch](https://img.shields.io/appveyor/build/elena-lexeevna/ng-responsive-tools/main?style=flat-square) [![CodeFactor](https://www.codefactor.io/repository/github/elena-lexeevna/ng-responsive-tools/badge?style=flat-square)](https://www.codefactor.io/repository/github/elena-lexeevna/ng-responsive-tools) ![npm](https://img.shields.io/npm/dm/ng-responsive-tools?style=flat-square) [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/elena-lexeevna/ng-responsive-tools/LICENSE)

Angular responsive directives for adding class names depending on the device, screen size and other parameters 

## Features

- easy to use
- simply extendable
- screen breakpoints detection
- screen orientation detection
- device detection
- browser detection
- system detection

## Directives

### Screen based directives

- `[mediaClass]`

### Browser based directives

- `[chromeClass]`
- `[firefoxClass]`
- `[safariClass]`
- `[operaClass]`
- `[edgeClass]`

### System based directives

- `[windowsClass]`
- `[linuxClass]`
- `[macClass]`

### Device based directives

- `[mobileClass]`
- `[tabletClass]`
- `[desktopClass]`
- `[smarttvClass]`

### Orientation based directives

- `[landscapeClass]`
- `[portraitClass]`

## Usage

### Installation

```
npm i ng-responsive-tools
```

### Import

```typescript
import { ResponsiveModule } from 'ng-responsive-tools';
```

Import with default settings:

```typescript
@NgModule({
  imports: [
    ResponsiveModule.forRoot()
  ]
})
```

Import with custom settings:

```typescript
@NgModule({
  imports: [
    ResponsiveModule.forRoot({
      xs: 576, // default: 480px
      sm: 640, // default: 768px
      md: 768, // default: 992px
      lg: 992, // default: 1200px
      xl: 1280 // default: 1440px
    })
  ]
})
```

### How to use

```html
<div
  [mediaClass]="{
    common: 'col',
    xs: 'col-12',
    sm: 'col-6',
    md: 'col-4',
    lg: 'col-3',
    xl: 'col-1'
  }">
</div>
```

## Afterword

You should remember that the changing the `class` of an element causes DOM reflow / layout shift events. 

Generally, the every interaction with the DOM will trigger blocking operation. You cannot rule it out altogether, but it should always be kept at a minimum
