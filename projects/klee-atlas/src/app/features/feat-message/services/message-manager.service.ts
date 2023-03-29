import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KMessageDTO } from '../interfaces/k-message.dto';
import { API } from './values/api';

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
      .subscribe(
        data => console.log(data)
      )
  }


}
