import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable, Optional } from '@angular/core';
import { BusEventType } from '../../../../core/interfaces/util-bus-event';
import { BehaviorSubject, filter, tap } from 'rxjs';
import { KMessageDTO, KMessageNEW } from '../../interfaces/k-message.dto';
import { API } from '../values/api';
import { MSG_BUS_EVENT } from '../values/msg-bus-event.token';
import { Priorities } from '../values/priorities.enum';

@Injectable()
export abstract class MessageBaseService {

  private readonly  API = API;

  public message$ = new BehaviorSubject<KMessageDTO |null>(null);
  public status$ = new BehaviorSubject<any>(null);
  
  constructor(
    private http:HttpClient,
    @Optional() @Inject(MSG_BUS_EVENT) private bus: EventEmitter<BusEventType>
  ) { 

  }

  protected save(message:KMessageDTO){

    console.log(message)
    const id = this.message$.value?.id;
    const dtoId = message.id;
    if( ! id || id !== dtoId ) return;

    const url = `${API}/${id}`
    this.http.put<KMessageDTO>(url, message).subscribe( 
      m => {
        this.message$.next(m) 
        this.bus?.emit({type:'MESSAGE_UPDATED',payload: m })
      })
  }

  protected create(){
    const url = `${API}`
    const msg:KMessageNEW = {
      content:'',
      title:'',
      priority:Priorities.LOW,
      creation:Date.now(),
    }
    this.http.post<KMessageDTO>(url, msg).subscribe( m => this.message$.next( m ) )
  }

  protected load(id:KMessageDTO['id']){
    const url = `${API}/${id}`
    this.http.get<KMessageDTO>(url).subscribe( m => this.message$.next(m) )
  }
}
