import { InjectionToken } from "@angular/core";
import { BusEventType, UtilBusEvent } from "../interfaces/util-bus-event";

export const GLOBAL_EVENT_BUS = new InjectionToken<UtilBusEvent<BusEventType>>('GLOBAL_EVENT_BUS');