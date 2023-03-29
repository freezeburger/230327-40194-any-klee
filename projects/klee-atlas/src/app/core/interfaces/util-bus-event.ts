import { EventEmitter } from "@angular/core";

export interface BusEventType{
    type:string,
    payload:any
}

export interface UtilBusEvent<EventType> extends EventEmitter<EventType>{}