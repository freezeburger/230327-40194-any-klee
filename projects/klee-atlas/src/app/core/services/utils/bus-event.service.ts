import { Injectable, EventEmitter } from '@angular/core';
import { BusEventType } from '../../interfaces/util-bus-event';


@Injectable()
export class BusEventService extends EventEmitter<BusEventType>{

  rnd = Math.random()
}
