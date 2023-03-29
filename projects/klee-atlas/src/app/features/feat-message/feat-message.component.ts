import { Component , OnInit} from '@angular/core';
import { MessageManagerService } from './services/message-manager.service';

@Component({
  selector: 'app-feat-message',
  templateUrl: './feat-message.component.html',
  styles: [
  ]
})
export class FeatMessageComponent implements OnInit {

  constructor(
    public messageManager:MessageManagerService
  ){}

  ngOnInit(){
    this.messageManager.getMessagesId();
  }
}
