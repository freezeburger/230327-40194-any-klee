import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { KMessageDTO } from '../interfaces/k-message.dto';
import { API } from './values/api';

import { BehaviorSubject, tap, map } from 'rxjs';

@Injectable()
export class MessageManagerService {

  messageIdList$ = new BehaviorSubject<KMessageDTO['id'][]>([])

  constructor(
    // @Inject(HttpClient) private http:HttpClient,
    private http: HttpClient
  ) { }

  getMessagesId():void {
    this.http
      .get<KMessageDTO[]>(API)
      .pipe(
        tap( this.log ),
        map( this.mapToIds )
      )
      .subscribe( this.emitNextIds )
  }

  private emitNextIds = ( ids:Array<KMessageDTO['id']> ) => {
    this.messageIdList$.next(ids)
  }

  private log = ( data : KMessageDTO[]) => {
    console.groupCollapsed('MessageManagerService')
    console.table(data) 
    console.groupEnd()
  }

  private mapToIds = ( data : KMessageDTO[]):Array<KMessageDTO['id']> => {
    return data.map( m => m.id );
  }


}
