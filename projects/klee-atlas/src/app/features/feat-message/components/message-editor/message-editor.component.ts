import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss']
})
export class MessageEditorComponent {
  @Input() messageId:number | null = null;
}
