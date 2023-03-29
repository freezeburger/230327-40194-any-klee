import { Component, Input, inject} from '@angular/core';
import { MessageEditorService } from '../../services/message-editor.service';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss']
})
export class MessageEditorComponent {
  @Input() messageId:number | null = null;
  editor = inject(MessageEditorService)

  ngOnInit(){
    console.log(this.editor)
  }
}
