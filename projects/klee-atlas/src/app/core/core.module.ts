import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusEventService } from './services/utils/bus-event.service';



@NgModule({
  providers:[
    BusEventService
  ]
})
export class CoreModule { }
