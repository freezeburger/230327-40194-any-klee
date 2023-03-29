import { Component, EventEmitter, Inject, OnInit, Optional } from '@angular/core';
import { BusEventType } from '../../core/interfaces/util-bus-event';
import { MessageManagerService } from './services/message-manager.service';
import { MSG_BUS_EVENT } from './services/values/msg-bus-event.token';

@Component({
  selector: 'app-feat-message',
  templateUrl: './feat-message.component.html',
  styles: [
  ]
})
export class FeatMessageComponent implements OnInit {

  constructor(
    public messageManager: MessageManagerService,
    @Optional() @Inject(MSG_BUS_EVENT) private bus: EventEmitter<BusEventType>
  ) {
    
  }

  ngOnInit() {
    this.messageManager.getMessagesId();
  }

  saveAll(){
    this.bus?.emit({ type: 'MSG_SAVE_ALL', payload: null })
  }
}
