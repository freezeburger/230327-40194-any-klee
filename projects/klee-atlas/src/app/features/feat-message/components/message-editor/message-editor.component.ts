import { Component, Input, inject, Self, SkipSelf} from '@angular/core';
import { MessageEditorService } from '../../services/message-editor.service';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss'],
  providers:[
    MessageEditorService
  ]
})
export class MessageEditorComponent {
  @Input() messageId:number | null = null;
  
  constructor(
    @Self() public editor:MessageEditorService,
  ){}

  ngOnInit(){
    console.log( this.editor )
  }
}
