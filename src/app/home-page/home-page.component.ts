import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [MessageService] 

})
export class HomePageComponent {
  constructor(private messageService: MessageService){

  }

  sendMessage(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'votre message a ete envoye avec succes' });

  }
}
