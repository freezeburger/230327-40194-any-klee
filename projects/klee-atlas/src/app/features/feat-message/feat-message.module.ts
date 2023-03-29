import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatMessageRoutingModule } from './feat-message-routing.module';
import { FeatMessageComponent } from './feat-message.component';
import { MessageEditorComponent } from './components/message-editor/message-editor.component';
import { SharedModule } from '../../shared/shared.module';
import { MessageManagerService } from './services/message-manager.service';


@NgModule({
  declarations: [
    FeatMessageComponent,
    MessageEditorComponent
  ],
  imports: [
    SharedModule,
    FeatMessageRoutingModule
  ],
  providers:[
    MessageManagerService
  ]
})
export class FeatMessageModule { 
  constructor(
    messageManager:MessageManagerService
  ) {
    console.warn('Modules Time !', messageManager )
  }
}
