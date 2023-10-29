import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-student-side-menu',
  templateUrl: './student-side-menu.component.html',
  styleUrls: ['./student-side-menu.component.scss']
})
export class StudentSideMenuComponent implements OnInit {
  activeRoute:any=""
  classActive="active"  ; 
  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    
    console.log("routes", this.route.snapshot.routeConfig?.path=="student/orientation");
    this.activeRoute=this.route.snapshot.routeConfig?.path
  }
}
