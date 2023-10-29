import { NgFor } from '@angular/common';
import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';

@Component({
  selector: 'app-student-test-orientation',
  templateUrl: './student-test-orientation.component.html',
  styleUrls: ['./student-test-orientation.component.scss']
})
export class StudentTestOrientationComponent {


    visible:boolean=false
    layout: string ='list';
    products= [
      {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Economie et Gestion',
          description: 'Product Description',
          image: 'economie.png',
          inventoryStatus: 'DISPONIBLE',
         
      },
      {
          id: '1001',
          code: 'nvklal433',
          name: 'Science Informatique',
          description: 'Product Description',
          image: 'la-programmation.png',
          inventoryStatus: 'INDISPONIBLE',
         
      },
      {
          id: '1002',
          code: 'zz21cz3c1',
          name: 'Science',
          description: 'Product Description',
          image: 'la-physique.png',
          inventoryStatus: 'DISPONIBLE',
      },
      {
          id: '1003',
          code: '244wgerg2',
          name: 'Technique',
          description: 'Product Description',
          image: 'technique.png',
          price: 29,
          category: 'technique.png',
          quantity: 25,
          inventoryStatus: 'DISPONIBLE',
          rating: 5
      },
      {
          id: '1004',
          code: 'h456wer53',
          name: 'Math',
          description: 'Product Description',
          image: 'maths.png',
          price: 15,
          category: 'Accessories',
          quantity: 73,
          inventoryStatus: 'DISPONIBLE',
          rating: 4
      },
      {
          id: '1005',
          code: 'av2231fwg',
          name: 'Brown Purse',
          description: 'Lettre',
          image: 'brown-purse.jpg',
          price: 120,
          category: 'Accessories',
          quantity: 0,
          inventoryStatus: 'INDISPONIBLE',
          rating: 4
      },
      
    
    ];

    counterValue:any=0
    reponse: any[] = [{id:1,rep:'Reponse 1'}, {id:2,rep:'Reponse 2'}, {id:3,rep:'Reponse 3'}, {id:4,rep:'Reponse 4'}];

    constructor() { }

    ngOnInit() {
        //this.productService.getProducts().then(data => this.products = data);
    
    }
        getSeverity() {
          return "";
      };
      demarrer(id: any){
        this.visible=!this.visible
        setInterval(() => {
            this.counterValue++
        }, 1000)
        this.counterValue=0
      }
}
