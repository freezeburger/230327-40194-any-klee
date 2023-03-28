import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FeatAuthModule } from './feat-auth/feat-auth.module';
// import { FeatMessageModule } from './feat-message/feat-message.module';
// import { FeatNewsModule } from './feat-news/feat-news.module';


@NgModule({
  declarations: [],
  imports: [
    /* FeatAuthModule, */
    /* FeatMessageModule,
    FeatNewsModule */
  ]
})
export class FeaturesModule {
   constructor() {
    console.warn('Modules Time !', this)
  }
 }
