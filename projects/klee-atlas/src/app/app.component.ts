import { Component, EventEmitter, Inject, Optional } from '@angular/core';
import { BusEventType } from './core/interfaces/util-bus-event';
import { MSG_BUS_EVENT } from './features/feat-message/services/values/msg-bus-event.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    @Optional() @Inject(MSG_BUS_EVENT) private bus: EventEmitter<BusEventType>
  ) {
    this.bus?.subscribe(
      e => console.log('APP', e)
    )
  }

}
