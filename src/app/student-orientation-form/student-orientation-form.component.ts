import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-student-orientation-form',
  templateUrl: './student-orientation-form.component.html',
  styleUrls: ['./student-orientation-form.component.scss'],
  providers: [MessageService]

})
export class StudentOrientationFormComponent implements OnInit{
  branche:any[]=[]

  firstChoice:string=''
  SecondChoice:string=''
  thirdChoice:string=''
  fourthChoice:string=''

  constructor(private messageService: MessageService) {}
  ngOnInit() {
      this.branche = [
          { name: 'Mathematique', code: 'M' },
          { name: 'Lettre', code: 'L' },
          { name: 'Economie', code: 'E' },
          { name: 'Informatique', code: 'I' },
          { name: 'Sport', code: 'S' }
      ];
  }

  send(){
    console.log("test");
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'votre orientation a été enregistrés avec succés' });
  }
}
