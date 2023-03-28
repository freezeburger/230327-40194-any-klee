import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatMessageRoutingModule } from './feat-message-routing.module';
import { FeatMessageComponent } from './feat-message.component';


@NgModule({
  declarations: [
    FeatMessageComponent
  ],
  imports: [
    CommonModule,
    FeatMessageRoutingModule
  ]
})
export class FeatMessageModule { }
