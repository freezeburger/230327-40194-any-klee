import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { LayoutBaseComponent } from './layout-base/layout-base.component';
import { LayoutFooterComponent, LayoutHeaderComponent, LayoutMainComponent, LayoutMenuComponent } from './layout-base/layout-containers.component';

@NgModule({
  declarations: [
    LayoutBaseComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutMainComponent,
    LayoutMenuComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LayoutBaseComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutMainComponent,
    LayoutMenuComponent
  ]
})
export class KleeModule { }
