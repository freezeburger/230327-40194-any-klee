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
        tap( this.log ),
        map( this.mapToIds )
      )
      .subscribe( this.emitNextIds )
  }

  private emitNextIds = ( ids:number[]  ) => {
    this.messageIdList$.next(ids)
  }

  private log = ( data : KMessageDTO[]) => {
    console.groupCollapsed('MessageManagerService')
    console.table(data) 
    console.groupEnd()
  }

  private mapToIds = ( data : KMessageDTO[]):number[] => {
    return data.map( m => m.id );
  }


}
