import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-enseignant-side-menu',
  templateUrl: './enseignant-side-menu.component.html',
  styleUrls: ['./enseignant-side-menu.component.scss']
})
export class EnseignantSideMenuComponent implements OnInit {
  activeRoute:any=""
  classActive="active"  ; 
  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    
    console.log("routes", this.route.snapshot.routeConfig?.path=="student/orientation");
    this.activeRoute=this.route.snapshot.routeConfig?.path
  }
}





