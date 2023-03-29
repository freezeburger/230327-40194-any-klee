import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KMessageDTO, KMessageNEW } from '../../interfaces/k-message.dto';
import { API } from '../values/api';
import { Priorities } from '../values/priorities.enum';

@Injectable()
export abstract class MessageBaseService {

  private readonly  API = API;

  public message$ = new BehaviorSubject<KMessageDTO |null>(null);
  public status$ = new BehaviorSubject<any>(null);
  
  constructor(
    private http:HttpClient
  ) { }

  protected save(message:KMessageDTO){
    //this.http.put()
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
