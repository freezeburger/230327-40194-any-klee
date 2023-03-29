import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KMessageDTO } from '../../interfaces/k-message.dto';
import { API } from '../values/api';

@Injectable({
  providedIn: 'root'
})
export abstract class MessageBaseService {

  private readonly  API = API;

  message$ = new BehaviorSubject<KMessageDTO |null>(null);
  status$ = new BehaviorSubject<any>(null);
  
  constructor(
    private http:HttpClient
  ) { }

  protected save(message:KMessageDTO){
    //this.http.put()
  }

  protected create(){
    //this.http.post()
  }

  protected load(id:KMessageDTO['id']){
    //this.http.get()
  }
}
