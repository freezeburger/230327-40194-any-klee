import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageManagerService {

  constructor(
    // @Inject(HttpClient) private http:HttpClient,
    private http:HttpClient
  ) { }
}
