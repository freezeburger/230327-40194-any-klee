import { Component, Host, Optional } from '@angular/core';
import { LayoutBaseComponent } from './layout-base.component';

@Component({
  selector: 'klee-layout-header,layout-header',
  template: `
    <ng-content></ng-content>
  `
})
export class LayoutHeaderComponent {
  constructor(
    @Optional() @Host() private base:LayoutBaseComponent
  ){
    if( base === null ) console.warn('Must be used within a LayouBase Component !')
  }
}

@Component({
  selector: 'klee-layout-main,layout-main',
  template: `
    <ng-content></ng-content>
  `
})
export class LayoutMainComponent {}

@Component({
  selector: 'klee-layout-menu,layout-menu',
  template: `
    <ng-content></ng-content>
  `
})
export class LayoutMenuComponent {}

@Component({
  selector: 'klee-layout-footer,layout-footer',
  template: `
    <ng-content></ng-content>
  `
})
export class LayoutFooterComponent {}

