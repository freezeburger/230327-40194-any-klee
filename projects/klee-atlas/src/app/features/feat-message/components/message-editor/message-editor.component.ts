import { Component, Input, inject, Self, SkipSelf, OnChanges, SimpleChanges, Optional, Inject, EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BusEventType } from 'projects/klee-atlas/src/app/core/interfaces/util-bus-event';
import { filter } from 'rxjs';
import { KMessageDTO } from '../../interfaces/k-message.dto';
import { MessageEditorService } from '../../services/message-editor.service';
import { MSG_BUS_EVENT } from '../../services/values/msg-bus-event.token';
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
    @Optional() @Inject(MSG_BUS_EVENT) private bus:EventEmitter<BusEventType>
  ){
    this.bus?.pipe( 
      filter(e => e.type === 'MSG_SAVE_ALL' ),
    ).subscribe( () => this.edit() )
  }

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
