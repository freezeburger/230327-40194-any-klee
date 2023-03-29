import { EventEmitter, InjectionToken } from "@angular/core";
import { BusEventType } from "../../../../core/interfaces/util-bus-event";

export const MSG_BUS_EVENT = new InjectionToken<EventEmitter<BusEventType>>('MSG_BUS_EVENT')