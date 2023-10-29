import { AfterViewInit, Component , OnInit, ViewChild} from '@angular/core';
import { TreeNode } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit  {
  items: MenuItem[]= [];
  customers=["wassim","awak","kk"];


dialogVisible: boolean = false;

  ngOnInit(): void {
  
  this.items = [

    {
        label: '1ére',
        icon: 'pi pi-fw pi-users',
        expanded: true,
        items: [
            { command: (event) => { this.showDialog(); } ,
                label: '1ere 3',
                icon: 'pi pi-fw pi-users',
                items: [  ],
                expanded:false ,
            },
            {
                label: '1ere 6',
                icon: 'pi pi-fw pi-users'
            },
            { 
                separator: true 
            }
        ]
    },
    {
        label: '2éme',
        icon: 'pi pi-fw pi-users',
        expanded:true,
        items: [
            {
                label: '2eme 2',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: '2eme 3',
                icon: 'pi pi-fw pi-align-right',
                expanded:false 
            },
            {
                label: '2eme tech',
                icon: 'pi pi-fw pi-align-center',
                expanded:false 
            },
            {
                label: '2eme te',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: '3éme',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus'
            },
            {
                label: '3éme Info',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: '1',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                        
                        ]
                    }
                  ]  
            }
        ]
    },
    {
        label: '4éme',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archieve',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    }
];
}






showDialog() {
  // Check if the clicked item is not expanded
  
      this.dialogVisible = true; // Show the dialog
  
}


}
