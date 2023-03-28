import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BusEventService } from './services/utils/bus-event.service';
import { GLOBAL_EVENT_BUS } from './tokens/global-event-bus.token';

@NgModule({
  providers: [
    BusEventService,
    {
      provide: GLOBAL_EVENT_BUS,
      useExisting: BusEventService
    },
    {
      provide: APP_INITIALIZER,
      useValue: () => console.warn('Before components !!'),
      multi: true
    }
  ]
})
export class CoreModule {
  constructor() {
    console.warn('Modules Time !', this)
  }
}
