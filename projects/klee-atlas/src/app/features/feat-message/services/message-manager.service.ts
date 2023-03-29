import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { KMessageDTO } from '../interfaces/k-message.dto';
import { API } from './values/api';

import { BehaviorSubject, tap, map } from 'rxjs';

@Injectable()
export class MessageManagerService {

  messageIdList$ = new BehaviorSubject<number[]>([])

  constructor(
    // @Inject(HttpClient) private http:HttpClient,
    private http: HttpClient
  ) { }

  getMessagesId() {
    this.http
      .get<KMessageDTO[]>(API)
      .pipe(
        tap( data => console.log(data) ),
        map( data => data.map( m => m.id ))
      )
      .subscribe(
        data => this.messageIdList$.next(data)
      )
  }


}
