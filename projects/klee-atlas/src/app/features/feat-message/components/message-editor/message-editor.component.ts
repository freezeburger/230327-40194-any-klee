import { Component, Input, inject, Self, SkipSelf, OnChanges, SimpleChanges} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { KMessageDTO } from '../../interfaces/k-message.dto';
import { MessageEditorService } from '../../services/message-editor.service';
import { Priorities } from '../../services/values/priorities.enum';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss'],
  providers:[
    MessageEditorService
  ]
})
export class MessageEditorComponent {
  @Input() messageId?:KMessageDTO['id'];
  
  public priorities = Priorities;

  public form =new FormGroup({
    id:new FormControl(),
    title:new FormControl(),
    content:new FormControl(),
    creation:new FormControl(Date.now()),
    priority: new FormControl()
  })
  
  constructor(
    @Self() public editor:MessageEditorService,
  ){}

  private sub$ = this.editor.message$.subscribe( m => this.form.patchValue( m as any) )

  edit(){
    this.editor.edit(this.form.value as KMessageDTO)
  }
  
  ngAfterViewInit(changes:SimpleChanges){
    this.editor.init(this.messageId);
  }

  ngOnDestroy(){
    this.sub$.unsubscribe()
  }
 
}
