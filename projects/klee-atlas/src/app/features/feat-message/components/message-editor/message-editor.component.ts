import { Component, Input, inject, Self, SkipSelf, OnChanges} from '@angular/core';
import { KMessageDTO } from '../../interfaces/k-message.dto';
import { MessageEditorService } from '../../services/message-editor.service';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss'],
  providers:[
    MessageEditorService
  ]
})
export class MessageEditorComponent implements OnChanges{
  @Input() messageId?:KMessageDTO['id'];
  
  constructor(
    @Self() public editor:MessageEditorService,
  ){}

  ngOnChanges(){
    this.editor.init(this.messageId)
  }
}
