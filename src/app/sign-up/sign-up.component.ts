import { Component , OnInit} from '@angular/core';

 interface role {
  name:string  ; 
  id:number ; 
 }
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  valCheck: string[] = ['remember'];

    password!: string;
    roles: role[] | undefined ; 
    selectedrole : role | undefined ;

    ngOnInit(): void {
      this.roles = [
        { name:'Administration' , id:1},
        { name:'Enseignant' , id:2},
        { name:'Parent' , id:3},
        { name:'Etudiant' , id:4}

      ]
      

    }
}
