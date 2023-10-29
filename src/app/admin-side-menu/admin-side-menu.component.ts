import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-side-menu',
  templateUrl: './admin-side-menu.component.html',
  styleUrls: ['./admin-side-menu.component.scss']
})
export class AdminSideMenuComponent {
  activeRoute:any=""
  classActive="active"  ; 
  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    
    console.log("routes", this.route.snapshot.routeConfig?.path=="student/orientation");
    this.activeRoute=this.route.snapshot.routeConfig?.path
  }
}