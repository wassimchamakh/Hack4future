import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid'
@Component({
  selector: 'app-enseignant-home-page',
  templateUrl: './enseignant-home-page.component.html',
  styleUrls: ['./enseignant-home-page.component.scss']
})
export class EnseignantHomePageComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin,timeGridPlugin],
    eventClick:this.handleDateClick.bind(this),
    events: [
      { title: 'math', start: '2023-10-30T09:00:00', end: '2023-10-30T09:30:00'},
      { title: 'physique', start: '2023-10-30T10:00:00', end: '2023-10-30T10:30:00' },
      { title: 'sport', start: '2023-10-30T11:00:00', end: '2023-10-30T11:45:00'},
      { title: 'français', start: '2023-10-30T14:00:00', end: '2023-10-30T14:45:00' },
      { title: 'informatique', start: '2023-10-30T15:00:00', end: '2023-10-30T16:30:00'},
      { title: 'phylo', start: '2023-10-30T17:00:00', end: '2023-10-30T18:30:00' }
    ],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay' // user can switch between the two
    }
  };
  listeEtudiant:any[]=[
    {
      id:1,
      name:'Etudiant aa'
    },
    {
      id:2,
      name:'Etudiant ds'
    },
    {
      id:3,
      name:'Etudiant ik'
    },
    {
      id:4,
      name:'Etudiant a'
    },
    {
      id:5,
      name:'Etudiant e'
    },
    {
      id:6,
      name:'Etudiant d'
    },
  ]
  visible:boolean=false
  event:any
  visibleListe:boolean=false
  constructor(){}
  handleDateClick(info:any) {
    this.event=info
    this.visible=!this.visible
    console.log('info', info.event);
    
  }

  marquerAbsent(){
    this.event.event.setProp('backgroundColor','red')
    this.visible = ! this.visible
  }

  showListeEtudiant(){
    this.visibleListe=! this.visibleListe
  }
}
