import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatMessageRoutingModule } from './feat-message-routing.module';
import { FeatMessageComponent } from './feat-message.component';
import { MessageEditorComponent } from './components/message-editor/message-editor.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    FeatMessageComponent,
    MessageEditorComponent
  ],
  imports: [
    SharedModule,
    FeatMessageRoutingModule
  ]
})
export class FeatMessageModule { 
  constructor() {
    console.warn('Modules Time !', this)
  }
}
