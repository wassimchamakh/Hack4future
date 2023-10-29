import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid'
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'
@Component({
  selector: 'app-administration-calendrier',
  templateUrl: './administration-calendrier.component.html',
  styleUrls: ['./administration-calendrier.component.scss']
})
export class AdministrationCalendrierComponent implements OnInit{
  events:any[]=[]
  calendarOptions!: CalendarOptions 
  listeEtudiant: any[] = [
    {
      id: 1,
      name: 'Etudiant aa'
    },
    {
      id: 2,
      name: 'Etudiant ds'
    },
    {
      id: 3,
      name: 'Etudiant ik'
    },
    {
      id: 4,
      name: 'Etudiant a'
    },
    {
      id: 5,
      name: 'Etudiant e'
    },
    {
      id: 6,
      name: 'Etudiant d'
    },
  ]

  matiere: any[] = [
    { id: 1, label: "Mathematique" },
    { id: 2, label: "Economie"},
    { id: 3, label: "Science"},
    { id: 4, label: "Lettre"},
    { id: 5, label: "Informatique"}
  ]
  profs: any[] = [
    { id: 1, label: "Beji beji" },
    { id: 2, label: "wassim chamakh"},
    { id: 3, label: "dhia dhia"},
    { id: 4, label: "karim karim"},
    { id: 5, label: "wassim wassim"}
  ]
  selectedProf:any
  selectedMatiere: any
  visible: boolean = false
  event: any
  visibleListe: boolean = false
  constructor() { }
  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      selectable: true,
      select: this.handleTimeSlotSelect.bind(this),
      events: this.events,
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'timeGridWeek,timeGridDay' // user can switch between the two
      }
    };
  }
  handleTimeSlotSelect(info: any) {
    this.event = info
    this.visible = !this.visible
    console.log('info', info);

  }

  sendMatiere(){
    //this.calendarOptions.eventAdd(event)
    //this.calendarOptions.eventAdd({ start:this.event.startstr,end:this.event.endStr})
  }
}
