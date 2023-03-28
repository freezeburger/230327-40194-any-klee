import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatNewsRoutingModule } from './feat-news-routing.module';
import { FeatNewsComponent } from './feat-news.component';


@NgModule({
  declarations: [
    FeatNewsComponent
  ],
  imports: [
    CommonModule,
    FeatNewsRoutingModule
  ]
})
export class FeatNewsModule { }
