import { Injectable } from '@angular/core';
import { KMessageDTO } from '../interfaces/k-message.dto';
import { MessageBaseService } from './abstract/message-base.service';

@Injectable()
export class MessageEditorService extends MessageBaseService{
  
  rnd = Math.random()

  init( id?:KMessageDTO['id'] ){
    id ? this.load(id) : this.create() ;
  }
 
  edit( message:KMessageDTO ){
    this.save(message) ;
  }
}
