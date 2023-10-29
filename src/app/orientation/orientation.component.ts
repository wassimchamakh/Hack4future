import { NgFor } from '@angular/common';
import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import {FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.scss']
})
export class OrientationComponent implements OnInit {
    visible:boolean=false
    layout: string ='list';
    products= [
      {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Physique',
          description: 'Product Description',
          image: 'la-physique.png',
          inventoryStatus: 'DISPONIBLE',
         
      },
      {
          id: '1001',
          code: 'nvklal433',
          name: 'Francais',
          description: 'Product Description',
          image: 'france.png',
          inventoryStatus: 'INDISPONIBLE',
         
      },
      {
          id: '1002',
          code: 'zz21cz3c1',
          name: 'Anglais',
          description: 'Product Description',
          image: 'langue-anglaise.png',
          inventoryStatus: 'DISPONIBLE',
      },
      {
          id: '1003',
          code: '244wgerg2',
          name: 'Math',
          description: 'Product Description',
          image: 'maths.png',
          price: 29,
          category: 'Clothing',
          quantity: 25,
          inventoryStatus: 'DISPONIBLE',
          rating: 5
      },
      {
          id: '1004',
          code: 'h456wer53',
          name: 'Histoire',
          description: 'Product Description',
          image: 'bracelet.jpg',
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
          description: 'Product Description',
          image: 'brown-purse.jpg',
          price: 120,
          category: 'Accessories',
          quantity: 0,
          inventoryStatus: 'INDISPONIBLE',
          rating: 4
      },
      {
          id: '1006',
          code: 'bib36pfvm',
          name: 'Chakra Bracelet',
          description: 'Product Description',
          image: 'chakra-bracelet.jpg',
          price: 32,
          category: 'Accessories',
          quantity: 5,
          inventoryStatus: 'DISPONIBLE',
          rating: 3
      },
      {
          id: '1007',
          code: 'mbvjkgip5',
          name: 'Galaxy Earrings',
          description: 'Product Description',
          image: 'galaxy-earrings.jpg',
          price: 34,
          category: 'Accessories',
          quantity: 23,
          inventoryStatus: 'DISPONIBLE',
          rating: 5
      },
      {
          id: '1008',
          code: 'vbb124btr',
          name: 'Game Controller',
          description: 'Product Description',
          image: 'game-controller.jpg',
          price: 99,
          category: 'Electronics',
          quantity: 2,
          inventoryStatus: 'DISPONIBLE',
          rating: 4
      },
      {
          id: '1009',
          code: 'cm230f032',
          name: 'Gaming Set',
          description: 'Product Description',
          image: 'gaming-set.jpg',
          price: 299,
          category: 'Electronics',
          quantity: 63,
          inventoryStatus: 'DISPONIBLE',
          rating: 3
      },
      {
          id: '1010',
          code: 'plb34234v',
          name: 'Gold Phone Case',
          description: 'Product Description',
          image: 'gold-phone-case.jpg',
          price: 24,
          category: 'Accessories',
          quantity: 0,
          inventoryStatus: 'INDISPONIBLE',
          rating: 4
      },
      {
          id: '1011',
          code: '4920nnc2d',
          name: 'Green Earbuds',
          description: 'Product Description',
          image: 'green-earbuds.jpg',
          price: 89,
          category: 'Electronics',
          quantity: 23,
          inventoryStatus: 'DISPONIBLE',
          rating: 4
      },
      {
          id: '1012',
          code: '250vm23cc',
          name: 'Green T-Shirt',
          description: 'Product Description',
          image: 'green-t-shirt.jpg',
          price: 49,
          category: 'Clothing',
          quantity: 74,
          inventoryStatus: 'DISPONIBLE',
          rating: 5
      },
      {
          id: '1013',
          code: 'fldsmn31b',
          name: 'Grey T-Shirt',
          description: 'Product Description',
          image: 'grey-t-shirt.jpg',
          price: 48,
          category: 'Clothing',
          quantity: 0,
          inventoryStatus: 'INDISPONIBLE',
          rating: 3
      },
      {
          id: '1014',
          code: 'waas1x2as',
          name: 'Headphones',
          description: 'Product Description',
          image: 'headphones.jpg',
          price: 175,
          category: 'Electronics',
          quantity: 8,
          inventoryStatus: 'DISPONIBLE',
          rating: 5
      },
      {
          id: '1015',
          code: 'vb34btbg5',
          name: 'Light Green T-Shirt',
          description: 'Product Description',
          image: 'light-green-t-shirt.jpg',
          price: 49,
          category: 'Clothing',
          quantity: 34,
          inventoryStatus: 'DISPONIBLE',
          rating: 4
      },
      {
          id: '1016',
          code: 'k8l6j58jl',
          name: 'Lime Band',
          description: 'Product Description',
          image: 'lime-band.jpg',
          price: 79,
          category: 'Fitness',
          quantity: 12,
          inventoryStatus: 'DISPONIBLE',
          rating: 3
      },
      {
          id: '1017',
          code: 'v435nn85n',
          name: 'Mini Speakers',
          description: 'Product Description',
          image: 'mini-speakers.jpg',
          price: 85,
          category: 'Clothing',
          quantity: 42,
          inventoryStatus: 'DISPONIBLE',
          rating: 4
      },
      {
          id: '1018',
          code: '09zx9c0zc',
          name: 'Painted Phone Case',
          description: 'Product Description',
          image: 'painted-phone-case.jpg',
          price: 56,
          category: 'Accessories',
          quantity: 41,
          inventoryStatus: 'DISPONIBLE',
          rating: 5
      },
      {
          id: '1019',
          code: 'mnb5mb2m5',
          name: 'Pink Band',
          description: 'Product Description',
          image: 'pink-band.jpg',
          price: 79,
          category: 'Fitness',
          quantity: 63,
          inventoryStatus: 'INDISPONIBLE',
          rating: 4
      },
      {
          id: '1020',
          code: 'r23fwf2w3',
          name: 'Pink Purse',
          description: 'Product Description',
          image: 'pink-purse.jpg',
          price: 110,
          category: 'Accessories',
          quantity: 0,
          inventoryStatus: 'INDISPONIBLE',
          rating: 4
      }];

    counterValue:any=0
    reponse: any[] = [{id:1,rep:'Reponse 1'}, {id:2,rep:'Reponse 2'}, {id:3,rep:'Reponse 3'}, {id:4,rep:'Reponse 4'}];
    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
    constructor(private _formBuilder: FormBuilder) { }

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
