import { EventEmitter } from "@angular/core";

export interface BusEventType{
    type:string,
    paylod:any
}

export interface UtilBusEvent<EventType> extends EventEmitter<EventType>{}