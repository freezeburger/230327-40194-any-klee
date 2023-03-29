import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KMessageDTO } from '../../interfaces/k-message.dto';
import { API } from '../values/api';

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
    //this.http.post()
  }

  protected load(id:KMessageDTO['id']){
    //this.http.get()
  }
}
